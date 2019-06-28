import { Injectable } from "@angular/core";
import * as Azure from "@azure/storage-blob";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor() {}

  async upload(file: ArrayBuffer) {
    const url = `${environment.storage.blob}${environment.storage.sas}`;
    const anonymousCredential = new Azure.AnonymousCredential();
    const pipeline = Azure.StorageURL.newPipeline(anonymousCredential);
    const serviceURL = new Azure.ServiceURL(
      // When using AnonymousCredential, following url should include a valid SAS
      url,
      pipeline
    );

    // Create a container
    const containerName = environment.storage.account;
    const containerURL = Azure.ContainerURL.fromServiceURL(
      serviceURL,
      containerName
    );
    if ((await this._doesContainerExist(serviceURL, containerName)) === false) {
      const createContainerResponse = await containerURL.create(
        Azure.Aborter.none
      );
      console.log(
        `Create container ${containerName} successfully`,
        createContainerResponse.requestId
      );
    }

    const blobName = `capture_${Date.now()}.jpeg`;
    const blobURL = Azure.BlobURL.fromContainerURL(containerURL, blobName);
    const blockBlobURL = Azure.BlockBlobURL.fromBlobURL(blobURL);
    const uploadBlobResponse = await blockBlobURL.upload(
      Azure.Aborter.none,
      file,
      file.byteLength
    );

    console.log(
      `Upload block blob ${blobName} successfully at ${blockBlobURL.url}`,
      uploadBlobResponse.requestId
    );

    return blockBlobURL.url;
  }

  private async _listContainers(serviceURL: Azure.ServiceURL) {
    let marker;
    const containers = [];
    do {
      const listContainersResponse: Azure.Models.ServiceListContainersSegmentResponse = await serviceURL.listContainersSegment(
        Azure.Aborter.none,
        marker
      );

      marker = listContainersResponse.nextMarker;
      for (const container of listContainersResponse.containerItems) {
        console.log(`Container: ${container.name}`);
        containers.push(container.name);
      }
    } while (marker);

    return containers;
  }

  private async _doesContainerExist(
    serviceURL: Azure.ServiceURL,
    name: string
  ) {
    return (await this._listContainers(serviceURL)).includes(name);
  }
}

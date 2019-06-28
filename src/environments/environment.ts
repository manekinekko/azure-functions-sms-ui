// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  storage: {
    account: 'ocrtranslatesms',
    file: 'https://ocrtranslatesms.file.core.windows.net',
    blob: 'https://ocrtranslatesms.blob.core.windows.net',
    sas: '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&se=2019-07-31T05:05:08Z&st=2019-06-26T21:05:08Z&spr=https&sig=7Ys4MRoDX0Dkv4uypadQZ3de765sfvNbZSfErI4mX8o%3D'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

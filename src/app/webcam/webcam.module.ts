import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';


import {WebcamModule as _WebcamModule} from 'ngx-webcam';
import { WebcamComponent } from './webcam/webcam.component';
import { MatButtonModule } from '@angular/material';
import { AzureModule } from '../azure/azure.module';

@NgModule({
  declarations: [WebcamComponent],
  exports: [WebcamComponent],
  imports: [
    CommonModule,
    AzureModule,
    MatCardModule,
    MatButtonModule,
    _WebcamModule
  ]
})
export class WebcamModule { }

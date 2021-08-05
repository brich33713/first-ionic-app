import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PhotoPageRoutingModule } from './photo-routing.module';

import {PhotoService} from './photo.page';
import { ClaimPage } from '../claim/claim.page';



@NgModule({
  declarations: [PhotoService, ClaimPage],
  imports: [
    CommonModule,
    IonicModule,
    PhotoPageRoutingModule
  ]
})
export class PhotoPageModule { }

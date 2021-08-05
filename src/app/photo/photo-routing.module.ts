import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoService } from './photo.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoService
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoPageRoutingModule {}
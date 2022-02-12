import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingImageComponent } from './components/listing-image/listing-image.component';
import { ViewImageComponent } from './components/view-image/view-image.component';

const routes: Routes = [
  {
    path: 'viewImage/:id',
    component: ViewImageComponent,
  },
  {
    path: '',
    component: ListingImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

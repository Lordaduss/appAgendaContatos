import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalharPage } from './detalhar.page';

const routes: Routes = [
  {
    path: '',
    component: DetalharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalharPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GummiAddComponent } from './gummi-add/gummi-add.component';
import { GummiGetComponent } from './gummi-get/gummi-get.component';
import { GummiGrindComponent } from './gummi-grind/gummi-grind.component';
import { GummiMergeComponent } from './gummi-merge/gummi-merge.component';

const routes: Routes = [
  {
    path: 'gummi/create',
    component: GummiAddComponent
  },
  {
    path: 'grind/:id',
    component: GummiGrindComponent
  },
  {
    path: 'merge/:id',
    component: GummiMergeComponent
  },
  {
    path: 'gummis',
    component: GummiGetComponent
  },
  { path: '',   redirectTo: '/gummis', pathMatch: 'full' },
  { path: '**', redirectTo: '/gummis' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

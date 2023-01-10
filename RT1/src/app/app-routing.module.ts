import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // {
  //   component: AppComponent,
  //   path: ''
  // },
  {
    component: HeaderComponent,
    path: 'header'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

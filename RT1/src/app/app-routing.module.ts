import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  // {
  //   component: AppComponent,
  //   path: ''
  // },
  {
    component: ContentComponent,
    path: 'content'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

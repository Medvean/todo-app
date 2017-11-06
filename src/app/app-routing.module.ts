import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { NewPageComponent } from './new-page/new-page.component';
import { DonePageComponent } from './done-page/done-page.component';


const routes: Routes = [
  { path: '', component: GeneralPageComponent },
  { path: 'new', component: NewPageComponent },
  { path: 'done', component: DonePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

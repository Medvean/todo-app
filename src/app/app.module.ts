import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralPageComponent } from './general-page/general-page.component';
import { NewPageComponent } from './new-page/new-page.component';
import { DonePageComponent } from './done-page/done-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    GeneralPageComponent,
    NewPageComponent,
    DonePageComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AsyncLocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

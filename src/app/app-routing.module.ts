import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GreetHindiComponent} from './greet-hindi/greet-hindi.component';
import {GreetEnglishComponent} from './greet-english/greet-english.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'; // CLI imports router

const routes: Routes = [
  {path: 'app-greet-hindi', component: GreetHindiComponent},
  {path: 'app-greet-english', component: GreetEnglishComponent},
  {path: '**', component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

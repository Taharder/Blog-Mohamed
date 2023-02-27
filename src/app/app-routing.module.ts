import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: 'list', component: AppComponent},
  {path: 'create', component: NewsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

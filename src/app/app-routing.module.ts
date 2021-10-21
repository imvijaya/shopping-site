import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensPageComponent } from './pages/mens-page/mens-page.component';
import { WomenPageComponent } from './pages/women-page/women-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';


const routes: Routes = [
  { path: 'men', component:  MensPageComponent },
  { path: 'women', component:  WomenPageComponent },
  { path: '', component:  LandingPageComponent },
  { path: "**", component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

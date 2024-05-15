import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: "", title: "Home", component: HomeComponent },
  { path: "aboutme", title: "About Me", component: AboutmeComponent },
  { path: "services", title: "Services", component: ServicesComponent },
  { path: "work", title: "Work", component: WorkComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "contact", title: "Contact", component: ContactComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

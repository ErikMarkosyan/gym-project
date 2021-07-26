import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AboutComponent} from "../about/about.component";
import {GalleryComponent} from '../gallery/gallery.component';
import {ServicesComponent} from '../services/services.component';
import {NewsComponent} from '../news/news.component';
import {TrainerComponent} from '../trainer/trainer.component';
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    AboutComponent,
    ServicesComponent,
    NewsComponent,
    TrainerComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutComponent,
    NewsComponent,
    TrainerComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent
  ],
})
export class HomeModule {
}

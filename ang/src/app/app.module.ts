import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { ArtsService } from './arts.service';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    SliderComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ArtsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

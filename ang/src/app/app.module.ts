import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { ArtsService } from './arts.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    SliderComponent
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

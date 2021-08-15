import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { ArtsService } from './arts.service';
import { VideoComponent } from './video/video.component';
import { DishService } from './dish.service';
import { DishComponent } from './dish/dish.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { AgeSelectorComponent } from './age-selector/age-selector/age-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    SliderComponent,
    VideoComponent,
    DishComponent,
    DishDetailComponent,
    AgeSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ArtsService, DishService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

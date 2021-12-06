import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { DishComponent } from './dish/dish.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VideoComponent } from './video/video.component';
import { DishDetailComponent} from './dish-detail/dish-detail.component';
import { SketchComponent } from './sketch/sketch.component';

const routes: Routes = [
  {path: '', component: JumbotronComponent},
  {path: 'home', component: JumbotronComponent},
  {path: 'drawings', component: ArtsComponent},
  {path: 'paintings', component: ArtsComponent},
  {path: 'graphics', component: ArtsComponent},
  {path: 'animations', component: ArtsComponent},
  {path: 'video', component: VideoComponent},
  {path: 'dishes', component: DishComponent},
  {path: 'dish/:id', component: DishDetailComponent},
  {path: 'sketch', component: SketchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [JumbotronComponent, ArtsComponent];

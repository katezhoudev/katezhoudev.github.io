import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: '', component: JumbotronComponent},
  {path: 'home', component: JumbotronComponent},
  {path: 'drawing', component: ArtsComponent},
  {path: 'painting', component: ArtsComponent},
  {path: 'graphics', component: ArtsComponent},
  {path: 'animation', component: ArtsComponent},
  {path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [JumbotronComponent, ArtsComponent];

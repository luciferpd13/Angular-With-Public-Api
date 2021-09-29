import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogbreedComponent } from './dogbreed/dogbreed.component';

const routes: Routes = [
  { path: 'dog/:id', component: DogsComponent },
  { path: '', component: DogbreedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

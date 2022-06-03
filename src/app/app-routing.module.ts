// Angular imports
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Local imports
import {ListaComponent} from './component/lista/lista.component';
import { DetalhesComponent } from './component/Detalhes/detalhes.component';

const routes: Routes = [
  {path: 'countries', component: ListaComponent},
  {path: 'countries/:id', component: DetalhesComponent},
  {path: '**', redirectTo: '/countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: 'scan',
      loadChildren: () => import('./components/componente1/componente1.module').then(m => m.Componente1Module)
    },
    {
      path: 'info',
      loadChildren: () => import('./components/componente2/componente2.module').then(m => m.Componente2Module)
    },
    {
      path: 'cursos',
      loadChildren: () => import('./components/componente3/componente3.module').then(m => m.Componente3Module)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

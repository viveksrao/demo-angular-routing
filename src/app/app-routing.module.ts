import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { 
        path: 'products', 
        canActivate: [AuthGuard],
        data: { preload: false },
        loadChildren: './products/product.module#ProductModule'
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], { enableTracing: false, preloadingStrategy: SelectiveStrategy }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

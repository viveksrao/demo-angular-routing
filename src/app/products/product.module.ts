import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ProductResolver } from './product-resolver.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        component: ProductDetailComponent, 
        resolve: { 
          resolvedData: ProductResolver
        } 
      },
      { 
        path: 'products/:id/edit', 
        component: ProductEditComponent,
        resolve: { 
          resolvedData: ProductResolver
        }
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }

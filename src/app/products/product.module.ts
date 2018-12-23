import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }

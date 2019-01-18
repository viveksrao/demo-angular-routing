import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ])
  ]
})
export class MessageModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { MessageEmptyComponent } from './components/message-empty/message-empty.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    MessageEmptyComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    MessageEmptyComponent,
    CategoryPipe
  ]
})
export class SharedModule { }

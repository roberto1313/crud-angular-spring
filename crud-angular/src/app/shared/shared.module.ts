import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { MessageEmptyComponent } from './components/message-empty/message-empty.component';
import { CategoryPipe } from './pipes/category.pipe';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    MessageEmptyComponent,
    CategoryPipe,
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AlertDialogComponent,
    MessageEmptyComponent,
    CategoryPipe
  ]
})
export class SharedModule { }

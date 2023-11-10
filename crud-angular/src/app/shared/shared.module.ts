import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { MessageEmptyComponent } from './components/message-empty/message-empty.component';
import { CategoryPipe } from './pipes/category.pipe';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    MessageEmptyComponent,
    CategoryPipe,
    AlertDialogComponent,
    HeaderComponent,
    TableComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AlertDialogComponent,
    HeaderComponent,
    FilterComponent,
    TableComponent,
    MessageEmptyComponent,
    CategoryPipe
  ]
})
export class SharedModule { }

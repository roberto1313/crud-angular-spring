import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageEmptyComponent } from './components/message-empty/message-empty.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
    MessageEmptyComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [MessageEmptyComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [GraphicComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [CommonModule, FormsModule, HttpClientModule, GraphicComponent]
})
export class SharedModule {}

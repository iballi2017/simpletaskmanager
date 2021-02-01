import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,MatListModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule
  ],
  exports: [
    MatToolbarModule,MatListModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule
  ]
})
export class MaterialModule { }

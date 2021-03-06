import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserComponent } from './edit-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: EditUserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ],
  declarations: [EditUserComponent]
})
export class EditUserModule { }

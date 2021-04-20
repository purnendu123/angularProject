import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ClickItemComponent } from './click-item/click-item.component';
import { TotalComponent } from './total/total.component';


const routes: Routes = [
  {path : '' , pathMatch : 'full' , redirectTo: '/total'},
  {path: 'total' , component: TotalComponent},
  {path : 'clickedItem', component : ClickItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

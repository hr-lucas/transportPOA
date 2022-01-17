import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ListLotacaoComponent } from './list-lotacao/list-lotacao.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ListComponent,
    ListLotacaoComponent
  ],
  exports:[
    SearchComponent,
    HeaderComponent,
    ListComponent,
    ListLotacaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { Component, OnInit } from '@angular/core';
import { PoaApiService } from 'src/app/services/poa-api.service';

@Component({
  selector: 'app-list-lotacao',
  templateUrl: './list-lotacao.component.html',
  styleUrls: ['./list-lotacao.component.scss']
})
export class ListLotacaoComponent implements OnInit {

  public getListLotacao: any

  constructor(private ApiPOA: PoaApiService ) { }

  ngOnInit(): void {

    this.ApiPOA.listLotacao.subscribe(
      res => {
        this.getListLotacao = res

      }

    );
  }

}

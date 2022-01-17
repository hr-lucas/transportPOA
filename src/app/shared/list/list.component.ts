import { Component, OnInit } from '@angular/core';
import { PoaApiService } from 'src/app/services/poa-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public getListOnibus : any



  constructor(private ApiPOA: PoaApiService ) { }

  ngOnInit(): void {

    this.ApiPOA.listLinha.subscribe(
      res => {
        this.getListOnibus = res
      console.log(this.getListOnibus)

      }

    );

  }

}

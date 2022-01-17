import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'TransportPOA';

  result:any;

  constructor(){}

  ngOnInit(): void{

  }

}

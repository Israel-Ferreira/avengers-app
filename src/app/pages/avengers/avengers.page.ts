import { Component, OnInit } from '@angular/core';
import { Avengers } from 'src/app/models/avengers';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.page.html',
  styleUrls: ['./avengers.page.scss'],
})
export class AvengersPage implements OnInit {

  avengers: Avengers[];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.obterVingadores();
  }

  obterVingadores() {
    this._apiService.getAvengers()
      .subscribe(response => {
        this.avengers = response;
      });
  }

  // deletarVingadores() {
  //   this._apiService.getAvengers()
  //     .subscribe(response => {
  //       setTimeout(time => {
  //         this.avengers = [];
  //       }, 1000)
  //     });
  // }


}

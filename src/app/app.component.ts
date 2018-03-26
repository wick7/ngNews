import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  objectKeys = Object.keys;
  articles: any;
  final: any;
  newSource: string;
  result: any;
  
  constructor(private _data: DataService) {
  
  }

  ngOnInit() {
    this._data.getNews()
      .subscribe(res => {
        this.final = res;
        console.log(res.articles);
      });
  }

}

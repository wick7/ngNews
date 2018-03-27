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
  newSource: any;
  newId: any;
  result: any;
  constructor(private _data: DataService) {
  
  }

  ngOnInit() {
   
  }

  onSourceChange(newSource: {id: string}, newId: string) {
    
    newId = newSource.id;
    console.log(newId);
    this._data.selectedSource(this.newId)
    .subscribe(res => {
      this.newId = res;
      console.log(res);
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

interface Sources {
  id: string;
  name: string;
  description: string;
  category: string;
  language: number;
  county: string;
  url: any;
  sources: any;
}

@Injectable()
export class SourcesService {

  
  result:any;

  constructor(private _http: HttpClient) {}

  getSources() {
    return this._http.get<Sources>("https://newsapi.org/v2/sources?apiKey=97c55d6f78ef4b89815173a70fd9b52a")
      .map(result => this.result = result);
  }

}

import { Component, OnInit, Input} from '@angular/core';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  articles: any;
  news: any;
  result:any;
  id: string;
  currentId: 'abc-news';
  private apiUrl = 'https://newsapi.org/v2/top-headlines?sources=' + this.currentId + '&apiKey=97c55d6f78ef4b89815173a70fd9b52a'
  constructor(private _data: DataService) {
  
  }

  ngOnInit() {
      this._data.selectedSource(this.currentId)
        .subscribe(res => {
          this.news = res.articles;
          console.log(res.articles);
        });
  }

  

  
}

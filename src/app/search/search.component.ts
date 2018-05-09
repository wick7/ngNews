import { Component, OnInit, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { SourcesService } from '../sources.service';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() sourceChange = new EventEmitter<string>();

  newSource: string;
  sources: any;
  finals: any;

  articles: any;
  news: any;
  result:any;
  public id: any;
  name: string;
  public selected: string= '';
  public selectedId: string= '';

  constructor(private source: SourcesService, private data: DataService, private el: ElementRef, private renderer: Renderer2) {
    
  }


  ngOnInit() {
    this.source.getSources()
      .subscribe(res => {
        this.finals = res.sources;
        console.log(res.sources);
        
      });
  }



  // idSource(selectedId) {
  //   this.id.target.value = selectedId;
  //   // console.log("im here in search " + this.id.target.value)
  //   console.log("I'm Selected Id" + this.selectedId)
  //   this.sourceChange.emit(this.id.target.value)
  // }

  // onSelected(selected: string) {
  //   this.sourceChange.emit({
  //     id: selected
  //   });
  //   console.log("in search " + selected);
  // }

  onSelected(selected) {
    console.log(selected)
    
    this.data.selectedSource(this.selected)
      .subscribe(res => {
        this.news = res.articles;
        console.log(res.articles);
      });
  }


  getSource(selected) {
    console.log(selected)
    
    this.data.selectedSource(this.selected)
      .subscribe(res => {
        this.news = res.articles;
        console.log(res.articles[2].source.id);
      });
  }



  selectedSource(newSource: string) {
    console.log("fromserach " + newSource);
    this.sourceChange.emit(newSource);
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SourcesService } from '../sources.service';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() sourceChange = new EventEmitter<{id: string}>();

  selected = ' ';
  sources: any;
  finals: any;

  

  constructor(private source: SourcesService, private data: DataService) {
    
  }

  ngOnInit() {
    this.source.getSources()
      .subscribe(res => {
        this.finals = res.sources;
        console.log(res.sources);
        
      });
  }

  onSelected(selected: string) {
    this.sourceChange.emit({
      id: selected
    });
    console.log("in search " + selected);
  }

}

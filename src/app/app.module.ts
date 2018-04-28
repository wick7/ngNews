import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SourcesService } from './sources.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SearchComponent } from './search/search.component';
import { ScrollerDirective } from './scroller.directive';
import { NewsOrgDirective } from './news-org.directive';


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    SearchComponent,
    ScrollerDirective,
    NewsOrgDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

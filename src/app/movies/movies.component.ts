import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }

  trendingMovies:any[]=[];
  term:any='';
  getTrendingItems(){
    this._TrendingService.getTrending("all").subscribe((response)=>{
      this.trendingMovies= response.results.filter((item:any)=>{
        return item.media_type=='movie'
      })
    })
  }
  ngOnInit(): void {
    this.getTrendingItems();
  }

}

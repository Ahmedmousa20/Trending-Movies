import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private _TrendingService:TrendingService , private spinner: NgxSpinnerService) { }

  trendingMovies:any[]=[];
  trendingTvshows:any[]=[];
  term:any='';

  getTrendingItems(){

    this._TrendingService.getTrending("all").subscribe((response)=>{
      this.trendingMovies= response.results.filter((item:any)=>{
        return item.media_type=='movie'
      })

      this.trendingTvshows= response.results.filter((item:any)=>{
        return item.media_type=='tv'
      })
      // console.log(this.trendingMovies);
      // console.log(this.trendingTvshows);
    })
  }
  ngOnInit(): void {
    this.getTrendingItems();
  }

}

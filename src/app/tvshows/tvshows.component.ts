import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }

  trendingTvshows:any[]=[];
  term:any='';
  getTrendingItems(){
    this._TrendingService.getTrending("all").subscribe((response)=>{
      this.trendingTvshows= response.results.filter((item:any)=>{
        return item.media_type=='tv';
      })
    })
  }
  ngOnInit(): void {
    this.getTrendingItems();
  }

}

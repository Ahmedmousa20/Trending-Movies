import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id : any ;
  type : any ;
  itemDetails : any;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _TrendingService : TrendingService ) { }

  ngOnInit(): void {
   this.type = this._ActivatedRoute.snapshot.paramMap.get('type');
   this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
   this._TrendingService.getTrendingDetails(this.type , this.id).subscribe((response)=>{
    this.itemDetails =response;

   })
  }

}

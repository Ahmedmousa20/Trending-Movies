import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingItems:any[] , searchTxt: any): any {
    return trendingItems.filter((item)=>{

      if(item.title){
        return item.title.toLowerCase().includes(searchTxt.toLowerCase());
      }else{
        return item.name.toLowerCase().includes(searchTxt.toLowerCase());
      }
    })
  }

}

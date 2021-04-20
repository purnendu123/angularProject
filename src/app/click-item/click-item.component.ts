import { Component, OnInit } from '@angular/core';
import { ApiModuleService } from '../api-module.service';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-click-item',
  templateUrl: './click-item.component.html',
  styleUrls: ['./click-item.component.css']
})
export class ClickItemComponent implements OnInit {

  constructor(public click: TotalComponent , public api: ApiModuleService) { }

  urlCreat : any;

  firstItem = true ;

 lastItem = true ;
 title = this.api.data.photos.photo[this.click.indexOfClickedImage].title;

  ngOnInit(): void {
  }
  imgSource(){
    return this.click.cl;
  }
  clickImg(){
    // console.log('console from clicked Item',this.click.cl);
    // console.log('console from clicked Item total array access',this.api.data);
    let clickedImageId = this.api.data.photos.photo[this.click.indexOfClickedImage];
    this.title = this.api.data.photos.photo[this.click.indexOfClickedImage].title;

    this.urlCreat = `http://farm${clickedImageId.farm}.staticflickr.com/${clickedImageId.server}/${clickedImageId.id}_${clickedImageId.secret}.jpg`;
    // console.log("urlcreat=",this.urlCreat);

    if(this.click.indexOfClickedImage <=0 ){
      this.firstItem = false
    }
    else{
      this.firstItem = true;
    }

    if(this.click.indexOfClickedImage >=99 ){
      this.lastItem = false
    }
    else{
      this.lastItem = true;
    }
    
    
    return this.urlCreat;
  }

  cross(){
    this.click.clickChecked = false;
  }
  next(){
    this.click.indexOfClickedImage++;
    this.click.selectedIndex = this.click.indexOfClickedImage;
    this.title = this.api.data.photos.photo[this.click.indexOfClickedImage].title;
    console.log(this.title);
    
    this.clickImg();

  }
  previous(){
    this.click.indexOfClickedImage--;
    this.click.selectedIndex = this.click.indexOfClickedImage;
    this.title = this.api.data.photos.photo[this.click.indexOfClickedImage].title;
    console.log(this.title);
    
    this.clickImg();

  }
}

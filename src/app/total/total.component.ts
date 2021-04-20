import { Component, OnInit } from '@angular/core';
import { ApiModuleService } from '../api-module.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  image:any=[];
  cl : any ;
  clickItem : any;
  indexOfClickedImage : any ;
  clickChecked = false ;

  selectedIndex = -1 ;
  load = false;

  constructor(public service: ApiModuleService) { }

  ngOnInit(): void {
  }

  async inputChange(val: any) {
    console.log('input changes',this.image);
    if(this.image){
      this.image=[];
    }
    this.load = true;
    this.clickChecked = false ;
    this.service.getData(val).then(async images => {
      this.image = await images;
      this.load = false;
      // console.log("in total comp==", this.image);
    })
    // console.log("image",this.image);
    
  }
  urlValue(id : any){
    // console.log("url===",id,this.image);

    let farm_id= this.image[id].farm;
    let server_id = this.image[id].server;
    let idd = this.image[id].id;
    let secret = this.image[id].secret;
    const url = `http://farm${farm_id}.staticflickr.com/${server_id}/${idd}_${secret}.jpg`;
    return url;
  }

  click(c : any,d:any){
    console.log("item is clicked",c,d);
    this.indexOfClickedImage = d;
    this.clickItem = c;
    const url1 = `http://farm${c.farm}.staticflickr.com/${c.server}/${c.id}_${c.secret}.jpg`;
    this.cl=url1;
    this.clickChecked = true ;
    this.selectedIndex = d;

    console.log(this.cl);
    
  }
  checkedIndex = (index:any) => {
    console.log('selected index',this.selectedIndex,'index', index);
  }
  
}

import { Injectable } from '@angular/core';
import { TotalComponent } from './total/total.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})




export class ApiModuleService {


   data: any;
  i = 1;



  constructor(public http: HttpClient) { }

  getData(val: string) {
    return new Promise((resolve, reject) => {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0c2c30ee7399e2a2ee42c5b96f1ef64b&text=+${val}+&format=json&nojsoncallback=1`

      this.http.get(url).subscribe((res: any) => {
         this.data = res;
        console.log("from api service total array of api=",this.data);
        console.log(res.photos.photo[0]);
        console.log(res.photos.photo[0].id);
        resolve(res.photos.photo);
      })
    })
  }
}

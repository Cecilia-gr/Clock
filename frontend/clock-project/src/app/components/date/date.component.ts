import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  date : any ;

  constructor( private http : HttpClient){
    setInterval(()=>{
      this.getDate();
    }, 1000)
    // console.log(this.test);
    
  }

  getDate() {
    this.http.get('http://localhost:3000')
    .subscribe((response : any) =>{
      this.date = response;
    })
  }
}

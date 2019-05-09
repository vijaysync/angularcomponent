import { Component, ViewChild, Input, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
mapping='';
isvalid : boolean=false;
  @ViewChild('validation1') inputE1:ElementRef;
  @ViewChild('validation2') inputE2:ElementRef;
  @ViewChild('validation3') inputE3:ElementRef;
  @ViewChild('validation4') inputE4:ElementRef;
  @ViewChild('validation5') inputE5:ElementRef;
  @ViewChild('validation6') inputE6:ElementRef;
  @ViewChild('validation7') inputE7:ElementRef;
  @ViewChild('validation8') inputE8:ElementRef;
  @ViewChild('validation9') inputE9:ElementRef;
  httpData:any;
  url='http://api.openweathermap.org/data/2.5/weather?appid=7ce20aa33fe00a3a6fd2aa375893b71d&q='
  constructor(public http: HttpClient, public renderer:Renderer2) { }
  chng(evt)
    {
      this.http.get(this.url+evt).subscribe(data => {
        console.log(JSON.stringify(data));
        this.mapping=JSON.stringify(data)
      },(error)=>{
      this.mapping = 'Please Enter Valid City Name' 
      })
    }
    edit1()
    {
      this.inputE1.nativeElement.value="";
      this.inputE1.nativeElement.focus();
    }
    edit2()
    {
      this.inputE2.nativeElement.value="";
      this.inputE2.nativeElement.focus();
    }
    edit3()
    {
      this.inputE3.nativeElement.value="";
      this.inputE3.nativeElement.focus();
    }
    edit4()
    {
      this.inputE4.nativeElement.value="";
      this.inputE4.nativeElement.focus();
    }
    edit5()
    {
      this.inputE5.nativeElement.value="";
      this.inputE5.nativeElement.focus();
    }
    edit6()
    {
      this.inputE6.nativeElement.value="";
      this.inputE6.nativeElement.focus();
    }
    edit7()
    {
      this.inputE7.nativeElement.value="";
      this.inputE7.nativeElement.focus();
    }
    edit8()
    {
      this.inputE8.nativeElement.value="";
      this.inputE8.nativeElement.focus();
    }
    edit9()
    {
      this.inputE9.nativeElement.value="";
      this.inputE9.nativeElement.focus();
    }
}

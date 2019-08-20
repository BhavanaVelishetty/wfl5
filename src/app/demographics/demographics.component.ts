import { Component, OnInit } from '@angular/core';
import{HttpErrorResponse,HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {
  labels =  ['QUES 1', 'QUES 2', 'QUES 3', 'QUES 4', 'QUES 5'];

  // OBJECT FOR datasets WITH EMPTY data.
  chartData = [
    {
      label: '1st Year',
      data: [], 
    },
    { 
      label: '2nd Year',
      data: []
    }
   ];

   // CHART COLOR.
   colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
   ]
  
    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
        data => {
            this.chartData = data as any [];   // FILL THE CHART ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
        );
    }

  onChartClick(event) {
    console.log(event);
  }

  constructor(private httpService:HttpClient ) { }

  

}

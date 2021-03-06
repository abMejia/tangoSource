import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  
  currency: any = [];
  posts: any = []
  table: any = []
  dataBTC: Array<number> = []; 
  // dataBTC: any = [];
  
  dataETH: Array<number>;
  // model: any = {}
  
  currencyNumber: number
  coinNumber: number

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    // Observable.interval(2000).subscribe(x => {
    //   this.getCurrency();
    //   this.reload()
    // });

    // this.getBTC()
  }

  getCurrency() {

    this.currencyService.getCurrency().subscribe(
      currency => {
        this.currency.push(currency)
        console.log(this.currency)
        this.dataBTC.push(currency.BTC)
        // console.log(this.dataBTC)
        // this.dataETH.push(currency)
      })
    
    if(this.currency.length >= 5 ){
      this.currency.splice(0,1)
    }
    
  }

  getBTC(){
    this.currencyService.getBTC().subscribe( btc => {
      console.log(btc)
    })
  }

  convert(currency, coin){
    this.currencyService.convert(currency, coin, this.currencyNumber, this.coinNumber).subscribe(data => {
     
      // console.log(JSON.stringify(data))
      console.log(data[0])
      let result = this.currencyNumber / data.USD
      this.coinNumber = result
    })
  }

  convertInverse(currency, coin){
    this.currencyService.convert(currency, coin, this.currencyNumber, this.coinNumber).subscribe(data => {
      let result = this.coinNumber * data.USD
      this.currencyNumber = result
    })
  }

  // lineChart
  public lineChartData: Array<any> = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'BTC' },
    
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'BTC' },    
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'ETH' }
    
  ];

  // public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public reload(): void {

    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    
    // for (let i = 0; i < this.lineChartData.length; i++) {
    //   _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
    //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //     _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //   }
    // }
    
    this.lineChartData = _lineChartData;
  }

  // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

}

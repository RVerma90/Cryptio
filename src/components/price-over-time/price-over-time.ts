import { Component } from '@angular/core';

/**
 * Generated class for the PriceOverTime component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'price-over-time',
    templateUrl: 'price-over-time.html'
})
export class PriceOverTime {

    // Input and outputs of child compoenent
    // @Input('price') price;
    // @Output() someEvent = new EventEmitter();

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40, 18, 48, 77, 9, 100, 27, 40, 65, 59, 80, 81, 56, 55, 40, 18, 48, 77, 9, 100, 27, 40], label: 'Series A' },
        {data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40, 8, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40, 28, 48, 40, 19, 86, 27, 90, 18, 48, 77, 9, 100, 27, 40, 28, 48, 40, 19, 86, 27, 90], label: 'Series C'}
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // green
            backgroundColor: 'rgba(63, 191, 191,0.2)',
            borderColor: 'rgba(63, 191, 191,1)',
            pointBackgroundColor: 'rgba(63,191,191,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(63,191,191,1)'
        },
        { // pink
            backgroundColor: 'rgba(191, 63, 191,0.2)',
            borderColor: 'rgba(191, 63, 191,1)',
            pointBackgroundColor: 'rgba(191, 63, 191,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(191, 63, 191,0.8)'
        },

        { // purple
            backgroundColor: 'rgba(63, 63, 191,0.2)',
            borderColor: 'rgba(63, 63, 191,1)',
            pointBackgroundColor: 'rgba(63, 63, 191,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(63, 63, 191,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }


    constructor() {
    }

}

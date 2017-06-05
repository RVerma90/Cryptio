import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
// Components
import { PriceOverTime } from '../../components/price-over-time/price-over-time';
// Providers
import { Currencies } from '../../providers/currencies'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    // Bar Graph setting for ng-chart
    chartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    chartLabels: string[] = [];
    chartType: string = 'bar';
    chartLegend: boolean = true;
    chartData: any[];

    // Currencies object
    currencies = [];

    @ViewChild(PriceOverTime) price: PriceOverTime;

    constructor(public navCtrl: NavController, private c: Currencies) {
        this.getCurrencies();
        this.updateChart();

    }

    ionViewDidLoad() {
        // this.test()
    }



    // Fetches and sets currencies using 'Currencies' provider. Runs straight from the constructor.
    getCurrencies() {
        this.c.getCurrencies().subscribe(data => this.currencies = data);
    }

    updateChart() {
        // ________________________________________________________________________________
        // Using labels as a placeholder for adding cryptocurrency symbols
        // then will equate to this.chartLabels
        let labels = [];

        // ________________________________________________________________________________
        // Gets the length of the subscribed obervable that returns an object
        // and adds key "symbol" to labels above
        this.c.getCurrencies().subscribe((c) => {
            for (let i = 0; i < c.length; i++) {
                let label = c[i]["symbol"];
                labels.push(label);
            };
        });

        this.chartLabels = labels;
        this.getHistoricalData(labels);

        // ________________________________________________________________________________
        // Using labels as a placeholder for adding cryptocurrency symbols
        // then will equate to this.chartLabels
        let labelData = [
            { data: [], label: '1h' },
            { data: [], label: '24h' },
            { data: [], label: '7d' }
        ];
        // ________________________________________________________________________________
        // Gets the length of the subscribed obervable that returns an object
        // and adds data for 1h, 24h & 7d to respective fields
        this.c.getCurrencies().subscribe((c) => {
            for (let i = 0; i < c.length; i++) {
                let oneHour = c[i]["percent_change_1h"];
                labelData[0].data.push(oneHour);
                let oneDay = c[i]["percent_change_24h"];
                labelData[1].data.push(oneDay);
                let oneWeek = c[i]["percent_change_7d"];
                labelData[2].data.push(oneWeek);
                // ________________________________________________________________________________
            };
        });
        this.chartData = labelData;

    }

    getHistoricalData(labels) {
        this.c.topCurrencies(labels);
    }

    test() {
        // console.log(this.currencies);
        // console.log(this.chartLabels);

        this.getHistoricalData(this.chartLabels);
        let d = this.chartLabels;

    }


}

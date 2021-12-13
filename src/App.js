import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import Barchart from './component/Barchart';
//import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  
  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
  //  let response;            // part 1
  //   console.log('MapEffect automatically called, calling axios.get()');

    
  //   response = axios.get('https://corona.lmao.ninja/v2/countries');
    

  //   const { data = [] } = response;   // part 1
  //   console.log(data);
    this.getChartData();
    
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['California', 'New York', 'Texas', 'Ohio', 'Arizona', 'New Mexico'],
        datasets:[
          {
            label:'Number of People Recovered',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        
        <Barchart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;

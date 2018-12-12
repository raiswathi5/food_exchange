import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './App.css';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

//Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'bar2d', // Type
    width: '700', // Width
    height: '400', // Height
    dataFormat: 'json', // DataType
    dataSource: { 
        // Chart Configuration 
        "chart": {
            "caption": "Food Exchange Data[2017-18]",
            "subCaption": "In K (Thousands)",
            "xAxisName": "Metrics",
            "yAxisName": "Numbers (K)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Orders",
            "value": "390"
        }, {
            "label": "New Customers",
            "value": "160"
        }, {
            "label": "Existing Customers",
            "value": "280"
        }, {
            "label": "Orders Delivered",
            "value": "140"
        }, {
            "label": "Order Not delivered",
            "value": "5"
        }, {
            "label": "Cancelled Orders",
            "value": "20"
        }]
    }
};

// Creating the DOM element to pass the react-fusioncharts component 
class App extends Component {
  render() {
     return (
      <div className="App">
        <ReactFC {...chartConfigs}/>
      </div>
     );
  }
}

export default App


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

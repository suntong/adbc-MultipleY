import React, { Component } from "react";
import { Chart, Tooltip, Geom, Legend, Axis, Coord } from "bizcharts";

export default class MyChart extends Component {
  state = {
    temp: 100
  };

  plus = () => {
    this.setState({
      temp: this.state.temp + 10
    });
  };

  minus = () => {
    this.setState({
      temp: this.state.temp - 10
    });
  };

  handClick = ev => {
    const item = ev.item;
    const { key } = item;
    const checked = ev.checked;
    const geoms = this.chart.getAllGeoms();
    for (let i = 0; i < geoms.length; i++) {
      const geom = geoms[i];
      if (geom.getYScale().field === key) {
        if (checked) {
          geom.show();
        } else {
          geom.hide();
          this.chart.axis(key, false);
        }
      }
    }
  };

  render() {
    const dataNew = [
      {
        time: "2017-07",
        value1: -1,
        value2: 333,
        value3: 44,
        value4: 234,
        value5: 54
      },
      {
        time: "2017-08",
        value1: 53,
        value2: 3220000,
        value3: 48,
        value4: 268,
        value5: 45
      },
      {
        time: "2017-09",
        value1: 7,
        value2: 145,
        value3: 145,
        value4: 254,
        value5: 92
      },
      {
        time: "2017-10",
        value1: 88,
        value2: 139,
        value3: 77,
        value4: 256,
        value5: 18
      },
      {
        time: "2017-11",
        value1: 38,
        value2: 120,
        value3: 56,
        value4: 213,
        value5: 77
      },
      {
        time: "2017-12",
        value1: 24,
        value2: 220,
        value3: 75,
        value4: 325,
        value5: 54
      },
      {
        time: "2018-01",
        value1: 76,
        value2: 632,
        value3: 92,
        value4: 197,
        value5: 63
      }
    ];

    const scale1 = {
      value1: {
        alias: "a1"
      },
      value2: {
        alias: "a2"
      },
      value3: {
        alias: "a3"
      },
      value4: {
        alias: "a4"
      },
      value5: {
        alias: "a5"
      }
    };

    const { temp } = this.state;

    return (
      <div>
        <h1>{temp}</h1>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
        <button
          onClick={() => {
            this.setState({ temp: 0 });
          }}
        >
          reset
        </button>
        <Chart
          data={dataNew}
          height={300}
          forceFit
          padding={[20, 20, 80, 200]}
          scale={scale1}
          onGetG2Instance={chart => {
            this.chart = chart;
          }}
        >
          <Legend
            custom
            items={[
              {
                value: "a1",
                key: "value1",
                marker: { symbol: "circle", fill: "#fbe075" }
              },
              {
                value: "a2",
                key: "value2",
                marker: { symbol: "circle", fill: "#f2a138" }
              },
              {
                value: "a3",
                key: "value3",
                marker: { symbol: "circle", fill: "blue" }
              },
              {
                value: "a4",
                key: "value4",
                marker: { symbol: "circle", fill: "yellow" }
              },
              {
                value: "a5",
                key: "value5",
                marker: { symbol: "circle", fill: "pink" }
              }
            ]}
            onClick={ev => this.handClick(ev)}
          />
          <Axis
            name="value1"
            position="left"
            label={{ offset: 10, textStyle: { fill: "#fbe075" } }}
          />
          <Axis
            name="value2"
            position="left"
            label={{ offset: 40, textStyle: { fill: "#f2a138" } }}
          />
          <Axis
            name="value3"
            position="left"
            label={{ offset: 80, textStyle: { fill: "blue" } }}
          />
          <Axis
            name="value4"
            position="left"
            label={{ offset: 120, textStyle: { fill: "yellow" } }}
          />
          <Axis
            name="value5"
            position="left"
            label={{ offset: 160, textStyle: { fill: "pink" } }}
          />
          <Tooltip />
          <Geom type="line" position="time*value1" color="#fbe075" />
          <Geom type="line" position="time*value2" size={2} color="#f2a138" />
          <Geom type="line" position="time*value3" size={2} color="blue" />
          <Geom type="line" position="time*value4" size={2} color="yellow" />
          <Geom type="line" position="time*value5" size={2} color="pink" />
        </Chart>
      </div>
    );
  }
}

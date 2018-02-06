import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default class WeatherPlot extends Component {
    render(){
        return (
            <div>
                <Sparklines data={this.props.data.map(elem => elem)}>
                    {/* The thing below works*/}

                    {/*<Sparklines data={this.props.data}>*/}
                    <SparklinesLine color={this.props.color}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                {/*{this.props.data.reduce((a,b)=>a+b) / this.props.data.length}*/}
                {_.round(_.sum(this.props.data)/this.props.data.length)} {this.props.units}
            </div>
        )
    }
}
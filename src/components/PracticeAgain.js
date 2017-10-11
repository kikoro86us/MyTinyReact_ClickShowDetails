import React, { Component } from 'react';

class PractiveAgain extends Component {
    
    constructor(){
        super();
        this.state={

            selected: '',

            countryData:[{
                name:'USA',
                capitalCity: 'Washington DC'
            },{
                name:'South Korea',
                capitalCity: 'Seoul'
            },{
                name:'Japan',
                capitalCity: 'Tokyo'
            },{
                name:'Canada',
                capitalCity: 'Ottawa'
            },{
                name:'Austria',
                capitalCity: 'Vienna'
            },{
                name:'Belgium',
                capitalCity: 'Brussels'
            },{
                name:'Switzerland',
                capitalCity: 'Bern'
            },{
                name:'Norway',
                capitalCity: 'Oslo'
            },{
                name:'Germany',
                capitalCity: 'Berlin'
            }]
      }
    }


    render() {

        let mappedData = this.state.countryData.map((country, i)=>{
            <li>
                <div>{country.name}</div>
            </li>
        })



        return (
            <div>
                
            </div>
        );
    }
}

export default PractiveAgain;
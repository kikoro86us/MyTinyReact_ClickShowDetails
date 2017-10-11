import React, { Component } from 'react';
import USA from './../img/USA.png'

class Country extends Component {

    constructor(){
        super();
        this.state={


            selected: '',
            
            countryData:[{
                name:'USA',
                capitalCity: 'Washington DC Washington DC Washington DC Washington DC Washington DC Washington DC',
                flag: USA
            },{
                name:'South Korea',
                capitalCity: 'Seoul Seoul Seoul Seoul Seoul Seoul Seoul Seoul Seoul Seoul Seoul'
            },{
                name:'Japan',
                capitalCity: 'Tokyo Tokyo Tokyo Tokyo Tokyo Tokyo Tokyo Tokyo Tokyo'
            },{
                name:'Canada',
                capitalCity: 'Ottawa Ottawa Ottawa Ottawa Ottawa Ottawa Ottawa Ottawa Ottawa'
            },{
                name:'Austria',
                capitalCity: 'Vienna Vienna Vienna Vienna Vienna Vienna Vienna Vienna Vienna'
            },{
                name:'Belgium',
                capitalCity: 'Brussels Brussels Brussels Brussels Brussels Brussels Brussels'
            },{
                name:'Switzerland',
                capitalCity: 'Bern Bern Bern Bern Bern Bern Bern Bern'
            },{
                name:'Norway',
                capitalCity: 'Oslo Oslo Oslo Oslo Oslo Oslo Oslo Oslo'
            },{
                name:'Germany',
                capitalCity: 'Berlin Berlin Berlin Berlin Berlin Berlin Berlin'
            }]
      }
      this.handleClick=this.handleClick.bind(this)
    }

    handleClick(event){
        this.state.selected===event.target.className ?
            (this.setState({
                selected: ''
            })):
            this.setState({
                selected: event.target.className
            })
            
    }

    // this.state.selected!==event.target.className ?
    // (this.setState({
    //     selected: event.target.className
    // })):
    // this.setState({
    //     selected: ''
    // })

    render() {

        //map city name
            let countries = this.state.countryData.map((country, i)=>(
                <li key={i}>
                    <div className={country.name} onClick={this.handleClick}>
                        {country.name}
                    </div>

                    {this.state.selected === country.name &&
                    <span>
                        {country.capitalCity}
                        <img src={country.flag}/>
                    </span>}
                </li>
                )
            )


        return (
            <div>
                <ul>
                    {countries}
                </ul>
            </div>
        );
    }
}

export default Country;
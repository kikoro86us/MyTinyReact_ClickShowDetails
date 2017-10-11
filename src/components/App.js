import React, { Component } from 'react'
import Country from './Country';

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<p>Click! Show me Details</p>
				<Country />
			</div>
		)
	}
}
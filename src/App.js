import React, { Component } from 'react'
import './App.css'

// https://api.chucknorris.io/jokes/random

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			joke: null
		}
	}


	getJoke = () => {
	      fetch('https://api.chucknorris.io/jokes/random')
	        .then((response) => {
	          return response.json()
	        })
	        .then((payload) => {
	          this.setState({ joke: payload.value })
	        })
	        .catch((error) => {
	          console.log(error)
	        })
	    }


	render() {
		return (
			<div className='App'>
				<h1>Chuck Norris Jokes</h1>
				<h4>See Random Chuck Norris Jokes</h4>
				<button onClick={ this.getJoke }>Test Button</button>
				<br/>
				{this.state.joke}
			</div>
		)
	}
}

export default App

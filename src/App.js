import React, { Component, Fragment } from 'react'
import './App.css'

// https://api.chucknorris.io/jokes/random

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			joke: null,
			unsplash: null,
			img: null

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
		
		getPic = () => {
			fetch(
			  'https://api.unsplash.com/photos/random/?client_id=T3G5x5RAcJCHMFD3sToyajQ0ZbklkrWsVvTMZM_incY'
			)
			  .then((response) => {
				  console.log(this.state.unsplash)
				return response.json()
			  })
			  .then((payload) => {
				// console.log(payload[0].urls.small)
				this.setState({ img: payload.urls.small })
			  })
			  .catch((error) => {
				console.log(error)
			  })
		  }

		
	render() {
		return (
			<Fragment>
			<div className='App'>
				<h1>Chuck Norris Jokes</h1>
				<h4>See Random Chuck Norris Jokes</h4>
				<button onClick={ this.getJoke }>Test Button</button>
				<br/>
				{this.state.joke}
			</div>

			<div className='App'>
               <h1>Unsplash Photos</h1>
               <button onClick={this.getPic}>Click Me!</button>
               <br />
               {this.state.img && (
               <img
              src={this.state.img}
              alt='Random Imagine'
            />
            )}
           </div>
			</Fragment>


		)
	}
}

export default App

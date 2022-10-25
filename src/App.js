import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onClickChange = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {showClock: !showClock}
    })
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickChange}
        >
          {showClock ? 'showClock' : 'hideClock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App

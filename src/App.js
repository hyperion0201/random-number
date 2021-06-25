import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialBoard()
  }

  getInitialBoard = () => {
    return {
      min: 0,
      max: 100,
      unique: false,
      history: [],
      current: null
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const {max, min, history} = this.state
    if (min < 0 || max < 0) {
      alert('Min hoặc max phải lớn hơn 0.')
      return
    }
    if (max <= min) {
      alert('Max phải lớn hơn min chứ ?')
      return
    }

    const rand = this.getRandom()
    if (rand === null) {
      alert('Hết số để random cho nó khỏi bị trùng rồi...')
      return
    }
    this.setState({
      current: rand,
      history: [...history, rand]
    })
  }

  handleFormChange = (e) => {
    const target = e.target

    switch (target.id) {
      case 'minNumber': {
        this.setState({
          min: e.target.value
        })
        break
      }
      case 'maxNumber': {
        this.setState({
          max: e.target.value
        })
        break
      }
      case 'useUnique': {
        this.setState({
          unique: target.checked,
          history: [],
          current: null
        })
        break
      }
      default: break
    }
  }

  renderHistory = (history = []) => {
    return history.map((item, index) => {
      return (
        <div className='history-item' key={item}>{item}</div>
      )
    })
  }
  
  getRandom = () => {
    const { history, unique, min, max} = this.state

    if (!unique) {
      return Math.floor(Math.random() * (max - min + 1) ) + min
    }
    else {
      if (history.length === (max - min + 1)) {
        // no available number to gen unique
        return null
      }
      // loop rand until found a new diff number
      while (true) {
        let rand = Math.floor(Math.random() * (max - min + 1) ) + min
        if (!history.includes(rand)) {
          return rand
        }
      }
    }
  }

  resetBoard = () => {
    this.setState(this.getInitialBoard())
  }

  render() {
    const { min, max, unique, history, current } = this.state

    return (
      <div className="App">
        <h1 style={{ padding: '10px', textAlign: "center" }}>Random Number Generator</h1>
        <div className="main-container">
          <div className="history-tab">
            <h5 style={{borderBottom: '1px solid #f2f2f2'}}>HISTORY</h5>
            <div className='history-board'>
            {this.renderHistory(history)}
            </div>
          </div>
          <div className="playground">
            <h5>PLAYGROUND</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="num-form">
                <label for="minNumber">Minimum</label>
                <input
                  type="number"
                  class="form-control mb-2"
                  id="minNumber"
                  value={min}
                  onChange={this.handleFormChange}
                />
              </div>
              <div className="num-form">
                <label for="maxNumber">Maximum</label>
                <input
                  type="number"
                  class="form-control mb-2"
                  id="maxNumber"
                  value={max}
                  onChange={this.handleFormChange}
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="useUnique"
                  checked={unique}
                  onChange={this.handleFormChange}
                />
                <label class="form-check-label" for="useUnique">
                  Unique?
                </label>
              </div>
              <br/>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button type='button' onClick={this.resetBoard} class="btn btn-secondary">Reset</button>
            </form>
            <h1 className='result'>{current}</h1>
          </div>
        </div>
        <footer>
          <span className='footer'>Viết bởi Hiếu loli trong lúc rảnh rỗi.
          <a href="https://kobitoninc.slack.com/archives/CQWLH1SBH/p1624635544498400" target='_blank' rel='noreferrer'> Tại sao lại có cái này?</a></span>
        </footer>
      </div>
    )
  }
}

export default App

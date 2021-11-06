import React from 'react'

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'React'
      }
      setTimeout(() => {
        this.setState({
          name: 'React真不错'
        })
      }, 2000)
    }
  
    render() {
      return (<div>
          <button>{ this.state.name }</button>
        </div>)
    }
  }
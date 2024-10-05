import React, { Component } from 'react'

export default class App extends Component 
{
  state = 
  {
    subject: "Full Stack Development",
    section: "Section C"
  }
  render() {
    return (
      <div>{this.state.subject} class in {this.state.section} </div>
    )
  }
}

import React, { components } from 'react'

export default class App extends components 
{
  state = 
  {
    subject: "Full Stact Development",
    section: "Section C"
  }
  render() {
    return (
      <div>{this.state.subject} class in {this.state.section} </div>
    )
  }
}
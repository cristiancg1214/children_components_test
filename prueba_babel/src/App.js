
import './App.css';
import React from 'react'
import Tooltip from './Tooltip';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  onDocumentClick = (event) => {
   
    if (event.target.tagName === 'BUTTON') {
      this.setState({ text: event.target.textContent })
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
  }
  render() {
    return (
      <div>
        {this.props.children}
      
        <Tooltip text={this.state.text} />
      </div>

    )
  }
}



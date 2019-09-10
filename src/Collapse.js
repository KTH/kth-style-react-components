import React from 'react'
import { Collapse as BootstrapCollapse } from 'reactstrap'
import classNames from 'classnames'

class Collapse extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      firstLoad: 'true'
    }

    this.toggleHeader = this.toggleHeader.bind(this)
  }

  toggleHeader () {
    this.setState(state => ({
      isOpen: !state.isOpen,
      firstLoad: 'false'
    }))
  }

  render() {
    const classes = classNames(
      'card',
      'collapsible',
      {'white': this.props.color === 'white'},
      {'blue': (this.props.color === 'blue' || !this.props.color)}, // Default color is blue
    )

    return <div className={classes}>
      <div class="card-header" role="tab" >
        <a onClick={this.toggleHeader} aria-expanded={this.state.isOpen} load={this.state.firstLoad}>{this.props.buttonText}</a>
      </div>
      <BootstrapCollapse isOpen={this.state.isOpen}>
        <div class='card-body'>
          {this.props.children}            
        </div>
      </BootstrapCollapse>
    </div>        
  }
}

export default Collapse
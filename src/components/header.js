import React, { Component } from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Header extends Component {


  constructor(props) {
    super(props)
    this.toggleUser = this.toggleUser.bind(this)
    this.state = {signInText : 'Sign In'}
  }

  toggleUser() {

    if(this.state.signInText == 'Sign In')
    {
      this.props.authenticate(true)

    }
    else
    {
      this.props.authenticate(false)

    }



  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps.authenticated, this.props.authenticated)
    if(nextProps.authenticated) {
      return this.setState({signInText: 'Sign Out'})
    }
    else {
      return this.setState({signInText: 'Sign In'})
    }
  }

  render() {
    return (
      <div>
        <ul>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/resources'>Resources</Link></button>
          <button onClick={this.toggleUser}>{this.state.signInText}</button>
        </ul>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return { authenticated: state.authenticated}
}

export default connect(mapStateToProps, actions)(Header)

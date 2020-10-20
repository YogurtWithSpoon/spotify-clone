import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Login from '../components/login/login'

export const App = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

App.propTypes = {
  prop: PropTypes
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

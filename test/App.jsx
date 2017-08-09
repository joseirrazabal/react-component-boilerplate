import React, { Component } from 'react'

import Prueba from '../src'
import style from '../src/css/index.scss'

class App extends Component {
  render() {
    return (
      <Prueba
        style={ style }
      />
    )
  }
}

export default App

import React, { Component } from 'react'
import { fromJS } from 'immutable'

import Breadcrumb from '../lib'
import style from '../src/css/index.scss'
import './design/scss/main.scss'

const formValues = fromJS({
  prueba: ''
})

const origins = fromJS({
  prueba: ''
})

const destinations = fromJS({
  prueba: ''
})

const params = {
  rooms: '2-3' 
}

class App extends Component {
  render() {
    return (
      <Breadcrumb 
        packageFilterFormState={formValues} 
        origins={origins} 
        destinations={destinations} 
        queryValues={params}
        style={ style }
      />
    )
  }
}

export default App

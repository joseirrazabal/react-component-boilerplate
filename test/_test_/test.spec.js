import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import TestUtils from 'react-dom/test-utils'

import App from '../App.jsx'

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore)

const store = finalCreateStore(function () { })

describe("render", () => {
  it("render sin error", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(
      <Provider store={store} key="provider">
        <App />
      </Provider>,
      div
    )
  })
})

describe("Validar html", () => {
  it("Cantidad de <div> == 1", function () {
    var component = TestUtils.renderIntoDocument(<App />)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithTag(
      component, 'div'
    )
    expect(contenedor.length).toEqual(1)
  })
})

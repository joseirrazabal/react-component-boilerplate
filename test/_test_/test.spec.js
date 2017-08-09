import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import App from '../App.jsx'

describe("render", () => {
  it("render sin error", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<App />, div)
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

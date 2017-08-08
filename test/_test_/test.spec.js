import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import App from '../App.jsx'

describe("render", () => {
  it("render sin error", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<App />, div)
  })
})

describe("Validar html", () => {
  it("Cantidad de <ul> == 1", function () {
    var component = TestUtils.renderIntoDocument(<App />)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithTag(
      component, 'ul'
    )
    expect(contenedor.length).toEqual(1)
  })

  it("Cantidad de <li> == 4", function () {
    var component = TestUtils.renderIntoDocument(<App />)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithTag(
      component, 'li'
    )
    expect(contenedor.length).toEqual(4)
  })

  it("Texto de primer <li> == Paquetes", function () {
    var component = TestUtils.renderIntoDocument(<App />)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithTag(
      component, 'li'
    )
    expect(contenedor[0].textContent).toEqual("Paquetes")
  })

  it("Tiene 1 class == breadcrum-result", function () {
    var component = TestUtils.renderIntoDocument(<App />)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithClass(
      component, 'breadcrum-result'
    )
    expect(contenedor.length).toEqual(1)
  })

  it("Tiene 4 class == breadcrum-result-item", function () {
    var component = TestUtils.renderIntoDocument(<App />)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithClass(
      component, 'breadcrum-result-item'
    )
    expect(contenedor.length).toEqual(4)
  })

})


describe("Validar respuesta", () => {
  it("Cantidad de pasajeros == 3 personas, en tercer <li>", function () {
    var component = TestUtils.renderIntoDocument(<App queryValues={{ rooms: '2-2' }}/>)

    var contenedor = TestUtils.scryRenderedDOMComponentsWithTag(
      component, 'li'
    )
    expect(contenedor[2].textContent).toEqual("3 personas")
  })

})

import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'

class Prueba extends Component {
  render() {
    const { style } = this.props

    return (
      <div className={style.texto}>
        Texto prueba
      </div>
    )
  }
}

Prueba.propTypes = {
  style: PropTypes.object,
}

export default Prueba

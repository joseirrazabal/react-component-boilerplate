import React, { Component }             from 'react'
import PropTypes                        from 'prop-types'
import moment                           from 'moment'
import Helmet                           from 'react-helmet'
import Immutable, { fromJS }            from 'immutable'
import { passengerCount }               from '../../utils/utils.js'
import styleGlobal from '../../css/index.scss'

class Breadcrumb extends Component {

  render() {
    const {dateFrom, dateTo, origin, destination} = this.props.packageFilterFormState
    const {origins, destinations} = this.props

    let people = passengerCount(this.props.queryValues.rooms || 2)
    let label = people == 1 ? "persona" : "personas"

    let dates = "Selecciona las fechas "
    let title = "Selecciona tu destino y origen"

    let css = this.props.style || styleGlobal

    if (dateFrom && dateTo) {
      dates = <span> {dateFrom}  - {dateTo}</span>
    } else if (this.props.queryValues.dateFrom && this.props.queryValues.dateTo) {
      dates = <span> {moment(this.props.queryValues.dateFrom, 'DDMMYYYY').format('DD/MM/YYYY')}  - {moment(this.props.queryValues.dateTo, 'DDMMYYYY').format('DD/MM/YYYY')}</span>
    }

    let tempDestination = destination || this.props.queryValues.destination
    if (tempDestination && destinations.size > 0) {
      const dd = destinations.toJS()
      const plain = dd.reduce((acc, o) => {
        o.countries.forEach(c => {
          const country = {value: c.value, label: c.label}
          acc = acc.concat(country)
          const cities = c.cities.map(city => {
            return {value: city.value, label: city.label}
          })
          acc = acc.concat(cities)
        })
        return acc
      }, [])
      var dest = plain.find(f => f.value == tempDestination)
      if (dest)
        title = plain.find(f => f.value == tempDestination).label
    }

    let tempOrigin = origin || this.props.queryValues.origin
    if (tempOrigin && origins.size > 0) {
      const originCity = origins.find(o => (o.get('value') == tempOrigin))
      if (originCity)
        title += " desde " + origins.find(o => (o.get('value') == tempOrigin)).get('label')
    }

    return (
      <div className="breadcrum-result mod-1col-xl">
        <Helmet title={title + " para " + people + " " + label + " en las fechas " + moment(this.props.queryValues.dateFrom, 'DDMMYYYY').format('DD/MM/YYYY') + ' - ' + moment(this.props.queryValues.dateTo, 'DDMMYYYY').format('DD/MM/YYYY') + ' en Aleanitravel.com'} />
        <ul className="breadcrum-result-list">
          <li className="breadcrum-result-item">
            <div className="breadcrum-result-link">
              Paquetes
            </div>
          </li>

          <li className="breadcrum-result-item">
            <div className="breadcrum-result-link">
              {title}
            </div>
          </li>

          <li className="breadcrum-result-item">
            <div className="breadcrum-result-link">
              {people} {label}
            </div>
          </li>

          <li className="breadcrum-result-item">
            <div className="breadcrum-result-link">
              {dates}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

Breadcrumb.defaultProps = {
  origins: fromJS({}),
  destinations: fromJS({}),
  packageFilterFormState: fromJS({}),
  queryValues: { 
    rooms: '2', 
  },
}

Breadcrumb.propTypes = {
  origins: PropTypes.instanceOf(Immutable.Iterable).isRequired,
  destinations: PropTypes.instanceOf(Immutable.Iterable).isRequired,
  packageFilterFormState: PropTypes.instanceOf(Immutable.Iterable).isRequired,
  queryValues: PropTypes.shape({
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
    origin: PropTypes.string,
    destination: PropTypes.string,
    rooms: PropTypes.string
  }).isRequired
}

export default Breadcrumb

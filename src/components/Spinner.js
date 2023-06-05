// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from './loading.gif'

// export class Spinner extends Component {///this line is for class based
  // static propTypes = {}

  const Spinner = ()=>{///this line is for function based
  // render() {///this line is for class based
    return (
      <div className='text-center'>
        <img  className='my-3' src={loading} alt="loading" />
      </div>
    )
  }
  // }///this line is for class based
// }///this line is for class based

export default Spinner
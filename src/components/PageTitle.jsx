import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = ({ title }) => <h1>{title}</h1>

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle

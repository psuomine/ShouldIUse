import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from 'components/styles/Heading'

const PageTitle = ({ title }) => <H1>{title}</H1>

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2 } from 'components/styles/Heading'
import { BodyText } from 'components/styles/Typography'

const Link = styled.a`
  color: #141033;
`

const RepositoryHeader = ({ homepageUrl, name, description }) => (
  <>
    <H2>
      <Link href={homepageUrl} target="_blank">
        {name}
      </Link>
    </H2>
    <BodyText>{description}</BodyText>
  </>
)

RepositoryHeader.propTypes = {
  homepageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default RepositoryHeader

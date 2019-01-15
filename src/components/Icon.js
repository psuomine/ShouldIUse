import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 100px;
`

export default class Icon extends Component {
  render() {
    return (
      <Container type={this.props.backgroundColor}>
        <div />
      </Container>
    )
  }
}

Icon.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}

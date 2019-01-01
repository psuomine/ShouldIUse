import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import SearchCardField from 'components/SearchCardField'
import CardActionButton from 'components/CardActionButton'

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 48px 0 48px;
`

class SearchCardForm extends Component {
  handleSubmit = values => {
    const { handleSearch } = this.props
    handleSearch(values.name, values.owner)
  }

  render() {
    return (
      <Formik initialValues={{ name: '', owner: '' }} onSubmit={this.handleSubmit}>
        {() => (
          <Form data-testid="form">
            <Fields>
              <SearchCardField type="text" name="name" placeholder="Package name" />
              <SearchCardField type="text" name="owner" placeholder="Package owner" />
            </Fields>
            <CardActionButton title="SEARCH PACKAGE" />
          </Form>
        )}
      </Formik>
    )
  }
}

SearchCardForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default SearchCardForm

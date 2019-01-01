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

const validate = values => {
  const errors = {}

  if (!values.owner) errors.owner = 'Required'
  if (!values.name) errors.name = 'Required'

  return errors
}

class SearchCardForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    const { handleSearch } = this.props
    handleSearch(values.name, values.owner)
    resetForm()
  }

  render() {
    return (
      <Formik initialValues={{ name: '', owner: '' }} validate={validate} onSubmit={this.handleSubmit}>
        {formProps => (
          <Form data-testid="form">
            <Fields>
              <SearchCardField name="name" placeholder="Package name" />
              <SearchCardField name="owner" placeholder="Package owner" />
            </Fields>
            <CardActionButton title="SEARCH PACKAGE" isDisabled={!formProps.isValid} />
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

import React, { Component } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import SearchCardField from 'components/SearchCardField'
import CardActionButton from 'components/CardActionButton'

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 48px 0 48px;
`

class SearchCardForm extends Component {
  handleSubmit = (values, actions) => {
    // Handle submit
  }

  render() {
    return (
      <Formik initialValues={{ name: '', owner: '' }} onSubmit={this.handleSubmit}>
        {props => (
          <Form>
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

export default SearchCardForm

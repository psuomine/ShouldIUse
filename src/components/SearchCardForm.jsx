import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import CardActionButton from 'components/CardActionButton'

class SearchCardForm extends Component {
  handleSubmit = (values, actions) => {
    console.log('values', values)
    console.log('actions', actions)
  }

  render() {
    return (
      <Formik initialValues={{ name: '', owner: '' }} onSubmit={this.handleSubmit}>
        {props => (
          <Form>
            <Field type="text" name="name" placeholder="Package name" />
            <Field type="text" name="owner" placeholder="Package owner" />
            <CardActionButton title="SEARCH PACKAGE" />
          </Form>
        )}
      </Formik>
    )
  }
}

export default SearchCardForm

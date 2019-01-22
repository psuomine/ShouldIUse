import React, { Component } from 'react'
import styled from 'styled-components'
import PageTitle from 'components/PageTitle'
import SearchCard from 'components/SearchCard'
import Repository from 'components/repository/Repository'
import ErrorMessage from 'components/ErrorMessage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
  width: 1400px;
  padding: 0 24px;
`

const SearchCardLayout = styled.div`
  max-width: 600px;
  width: 100%;
`

class Content extends Component {
  state = {
    name: '',
    owner: '',
  }

  handlePostForm = (name, owner) => this.setState({ name, owner })

  render() {
    const { name, owner, errors } = this.state
    return (
      <Container>
        <PageTitle title="Should i use the NPM library?" />
        <SearchCardLayout>
          <SearchCard handlePostForm={this.handlePostForm} />
        </SearchCardLayout>

        {name && <Repository name={name} owner={owner} />}
        {errors &&
          errors.graphQLErrors &&
          errors.graphQLErrors.map(err => (
            <ErrorMessage message={err.message} />
          ))}
      </Container>
    )
  }
}

export default Content

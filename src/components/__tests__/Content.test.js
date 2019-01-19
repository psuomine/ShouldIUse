import React from 'react'
import { render, fireEvent, waitForElement } from 'testUtils'
import gql from 'graphql-tag'
import { MockedProvider } from 'react-apollo/test-utils'
import { getRepository } from 'graphql/queries'
import Content from '../Content'

const mocks = [
  {
    request: {
      query: gql(getRepository),
      variables: {
        name: 'lodash',
        owner: 'lodash',
      },
    },
    result: {
      data: {
        repository: {
          createdAt: '2012-04-07T04:11:46Z',
          isArchived: false,
          hasIssuesEnabled: true,
          description: 'A modern JavaScript utility library delivering modularity, performance, & extras.',
          openIssues: {
            totalCount: 1,
          },
          homepageUrl: 'https://lodash.com/',
          name: 'lodash',
          nameWithOwner: 'lodash/lodash',
          watchers: {
            totalCount: 862,
          },
          stargazers: {
            totalCount: 36478,
          },
          forkCount: 3780,
        },
      },
    },
  },
]

describe('<Content />', () => {
  it('Makes query call and shows data', async () => {
    const { getByTestId, getByPlaceholderText, container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Content />
      </MockedProvider>
    )

    const nameInput = getByPlaceholderText('Package name')
    const ownerInput = getByPlaceholderText('Package owner')
    fireEvent.change(nameInput, { target: { value: 'lodash' } })
    fireEvent.change(ownerInput, { target: { value: 'lodash' } })
    fireEvent.click(getByTestId('action-button'))

    // wait Apollo query to be ready
    const openIssuesTitle = await waitForElement(() => getByTestId('stat-container'))

    expect(openIssuesTitle).toHaveTextContent('Open issues')
    expect(openIssuesTitle).toHaveTextContent('Forks')
    expect(openIssuesTitle).toHaveTextContent('Starred')
    expect(openIssuesTitle).toHaveTextContent('Watchers')
    expect(getByTestId('action-button')).toHaveAttribute('disabled')
    expect(container.firstChild).toMatchSnapshot()
  })
})

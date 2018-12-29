import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2 } from 'components/styles/Heading'
import { BodyText } from 'components/styles/Typography'

const Repository = ({
  repository: { homepageUrl, name, description, isArchived, forkCount, openIssues, stargazers, watchers },
}) => (
  <>
    <H2>
      <a href={homepageUrl}>{name}</a>
    </H2>
    <BodyText>{description}</BodyText>
    {isArchived ? (
      <BodyText>This repository is archived!</BodyText>
    ) : (
      <div>
        <BodyText>Open issues</BodyText>
        <BodyText>{openIssues.totalCount}</BodyText>
        <BodyText>Fork count</BodyText>
        <BodyText>{forkCount}</BodyText>
        <BodyText>starred</BodyText>
        <BodyText>{stargazers.totalCount}</BodyText>
        <BodyText>watchers</BodyText>
        <BodyText>{watchers.totalCount}</BodyText>
      </div>
    )}
  </>
)

const totalCountPropType = PropTypes.shape({
  totalCount: PropTypes.number.isRequired,
})

Repository.propTypes = {
  repository: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    hasIssuesEnabled: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    forkCount: PropTypes.number.isRequired,
    openIssues: totalCountPropType,
    stargazers: totalCountPropType,
    watchers: totalCountPropType,
  }),
}

export default Repository

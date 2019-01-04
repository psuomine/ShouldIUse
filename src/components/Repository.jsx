import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2 } from 'components/styles/Heading'
import { BodyText } from 'components/styles/Typography'
import RepositoryStat from 'components/RepositoryStat'

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`

const RepositoryStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
`

const Repository = ({
  repository: { homepageUrl, name, description, isArchived, forkCount, openIssues, stargazers, watchers },
}) => (
  <RepositoryContainer>
    <H2>
      <a href={homepageUrl}>{name}</a>
    </H2>
    <BodyText>{description}</BodyText>
    {isArchived ? (
      <BodyText>This repository is archived!</BodyText>
    ) : (
      <RepositoryStats>
        <RepositoryStat title="Open issues" value={openIssues.totalCount} unit={'pcs'} />
        <RepositoryStat title="Forks" value={forkCount} unit={'pcs'} />
        <RepositoryStat title="Starred" value={stargazers.totalCount} unit={'pcs'} />
        <RepositoryStat title="Watchers" value={watchers.totalCount} unit={'pcs'} />
      </RepositoryStats>
    )}
  </RepositoryContainer>
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

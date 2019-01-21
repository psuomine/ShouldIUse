import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RepositoryStat from 'components/repository/RepositoryStat'
import { STAT_LIMIT_MAP } from 'constants/index'
import { formatAbbreviateNumber } from 'utils/format'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 24px;
  margin-top: 32px;
  justify-content: center;
`

const RepositoryStats = ({ repository }) => {
  const isStatValid = (key, value) => {
    const mapItem = STAT_LIMIT_MAP[key]
    return mapItem.isHigherBad ? value < mapItem.limit : value > mapItem.limit
  }

  return (
    <Container data-testid="stat-container">
      <RepositoryStat
        title="Open issues"
        value={formatAbbreviateNumber(repository.openIssues.totalCount)}
        isValid={isStatValid('openIssues', repository.openIssues.totalCount)}
      />
      <RepositoryStat
        title="Forks"
        value={formatAbbreviateNumber(repository.forkCount)}
        isValid={isStatValid('forks', repository.forkCount)}
      />
      <RepositoryStat
        title="Starred"
        value={formatAbbreviateNumber(repository.stargazers.totalCount)}
        isValid={isStatValid('starred', repository.stargazers.totalCount)}
      />
      <RepositoryStat
        title="Watchers"
        value={formatAbbreviateNumber(repository.watchers.totalCount)}
        isValid={isStatValid('watchers', repository.watchers.totalCount)}
      />
    </Container>
  )
}

const totalCountPropType = PropTypes.shape({
  totalCount: PropTypes.number.isRequired,
})

RepositoryStats.propTypes = {
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
  }).isRequired,
}

export default RepositoryStats

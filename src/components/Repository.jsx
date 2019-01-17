import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2 } from 'components/styles/Heading'
import { BodyText } from 'components/styles/Typography'
import RepositoryStat from 'components/RepositoryStat'
import { formatAbbreviateNumber } from 'utils/format'
import { STAT_LIMIT_MAP } from 'constants/index'

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  width: 100%;
`

const RepositoryStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 24px;
  margin-top: 32px;
  justify-content: center;
`

const Link = styled.a`
  color: #141033;
`

const Repository = ({
  repository: { homepageUrl, name, description, isArchived, forkCount, openIssues, stargazers, watchers },
}) => {
  const isStatValid = (key, value) => {
    const mapItem = STAT_LIMIT_MAP[key]
    return mapItem.isHigherBad ? value < mapItem.limit : value > mapItem.limit
  }

  return (
    <RepositoryContainer>
      <H2>
        <Link href={homepageUrl} target="_blank">
          {name}
        </Link>
      </H2>
      <BodyText>{description}</BodyText>
      {isArchived ? (
        <BodyText>This repository is archived!</BodyText>
      ) : (
        <RepositoryStats data-testid="stat-container">
          <RepositoryStat
            title="Open issues"
            value={formatAbbreviateNumber(openIssues.totalCount)}
            isValid={isStatValid('openIssues', openIssues.totalCount)}
          />
          <RepositoryStat
            title="Forks"
            value={formatAbbreviateNumber(forkCount)}
            isValid={isStatValid('forks', forkCount)}
          />
          <RepositoryStat
            title="Starred"
            value={formatAbbreviateNumber(stargazers.totalCount)}
            isValid={isStatValid('starred', stargazers.totalCount)}
          />
          <RepositoryStat
            title="Watchers"
            value={formatAbbreviateNumber(watchers.totalCount)}
            isValid={isStatValid('watchers', watchers.totalCount)}
          />
        </RepositoryStats>
      )}
    </RepositoryContainer>
  )
}

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

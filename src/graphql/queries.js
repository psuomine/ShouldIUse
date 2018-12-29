export const getRepository = `
	query Repository($name: String!, $owner: String!) {
		repository(name: $name, owner: $owner) {
			createdAt,
			isArchived,
			hasIssuesEnabled,
			description,
			openIssues: issues(states: [OPEN]) {totalCount},
			homepageUrl,
			name,
			watchers {totalCount},
			stargazers {totalCount},
			forkCount
		}
	}
`

export const getRepository = `
	query Repository($name: String!, $owner: String!) {
		repository(name: $name, owner: $owner) {
			createdAt
		}
	}
`

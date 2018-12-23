import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	*::before,
	*::after,
	*{
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: "Montserrat"
	}

	#root {
		min-height: 100vh;
	}
`

export default GlobalStyle

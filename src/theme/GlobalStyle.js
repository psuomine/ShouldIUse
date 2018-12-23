import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');

	*::before,
	*::after,
	*{
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
		background-color: #F8F7F9;
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

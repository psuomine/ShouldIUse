import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');

	*::before,
	*::after,
	*{
		box-sizing: border-box;
	}

	html{
		min-height: 100vh;
		background-color: #F8F7F9;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: "Montserrat";
		background-color: #F8F7F9;
	}

	#root {
		display: flex;
    justify-content: center;
	}
`

export default GlobalStyle

import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import Theme from 'theme/Theme'

const customRender = (node, options) => render(<ThemeProvider theme={Theme}>{node}</ThemeProvider>, options)

// re-export everything
export * from 'react-testing-library'

// override render method
export { customRender as render }

# Installation
1. `npm create vite@4.1.0`
2. `cd [project]`
3. `npm i`


# Start the dev server
1. `npm run dev`


# Installing Chakra UI
[Chakra UI](https://chakra-ui.com/getting-started/vite-guide)
1. ## Installation
In your Vite React project, install Chakra UI by running either of the following:
`npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

2. ## Provider Setup
After installing Chakra UI, you need to set up the ChakraProvider at the root of your application.

Go to the src directory and inside main.jsx or main.tsx, wrap ChakraProvider around App:
the below code is from tutorial video

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
```

*Delete everything from index.css to avoid the defaul ugly styling from vite*


## Creating a responsive layout using Chakra Grid
the below code will create a responsive layout with a *nav, aside, and main* section

```
import {Grid, GridItem, Show} from "@chakra-ui/react";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}>
			<GridItem area="nav" bg="coral">
				Nav
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" bg="gold">
					Aside
				</GridItem>
			</Show>
			<GridItem area="main" bg="dodgerblue">
				Main
			</GridItem>
		</Grid>
	);
}

export default App;
```
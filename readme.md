# Installation

1. `npm create vite@4.1.0`
2. `cd [project]`
3. `npm i`

# Start the dev server

1. `npm run dev`

# Installing Chakra UI

[Chakra UI](https://chakra-ui.com/getting-started/vite-guide)

1. ## Installation

   In your Vite React project, install Chakra UI by running either of the following: `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

2. ## Provider Setup
   After installing Chakra UI, you need to set up the ChakraProvider at the root of your application.

Go to the src directory and inside main.jsx or main.tsx, wrap ChakraProvider around App: the below code is from tutorial video

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

_Delete everything from index.css to avoid the defaul ugly styling from vite_

## Creating a responsive layout using Chakra Grid

the below code will create a responsive layout with a _nav, aside, and main_ section

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

# Building the navigation bar

```
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
   );
}

export default NavBar;
```

# Implementing the dark mode

create a _theme.ts_ file in the _src_ folder and add following code to it

```
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({ config });

export default theme;
```

then goto the _main.tsx_ file and import the theme and in the <ChakraProvider> component, add the this attribute `theme={theme}` and add the following code before the <App /> component.

`<ColorModeScript initialColorMode={theme.config.initialColorMode} />`

# Building the color mode switch

see the git changes for understandings, it's very simple...

# Fetching the games

goto [RAWG](rawg.io) to get an api key.

1. ## Install axios for sending request to api

   `npm i axios`

2. create a new folder called _services_ in the _src_ folder
3. create a file called _api-client.ts_ in this folder and add following code to it.

```
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b8df32f01d941f7b8ec17da8a6efc7f"
  }
});
```

with above code, axios will use the above api and baseURL for requests we send.

# Install react icon library

`npm i react-icons@4.7.1`

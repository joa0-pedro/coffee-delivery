import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/theme/default";
import { Info } from "./components/Info";
import { GlobalStyle } from "./styles/global";


export function App() {
return (
<ThemeProvider theme={defaultTheme}>
	<Header />
	<Info />
	<GlobalStyle />
</ThemeProvider>
)
}


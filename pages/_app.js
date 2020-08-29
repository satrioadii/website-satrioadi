import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../src/assets/css/scrollbarSet.css";
import IndexGlobalProvider from "../src/providers";
import GlobalSnackbar from "../src/components/global/snackbar";
import {
	GoogleTagComponent,
	GoogleTagComponentNoScript,
} from "../src/components/global/tracking/GoogleTag";

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Satrio Adi - A Professional Full Stack Developer</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta
					name="description"
					content="Make your business online and get more customers with me, A professional full stack developer who love his works and likes to give solutions with technology."
				/>
				<link rel="canonical" href="https://satrioadi.com" />
				<GoogleTagComponent />
			</Head>
			<GoogleTagComponentNoScript />
			<IndexGlobalProvider>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<GlobalSnackbar />
					<Component {...pageProps} />
				</ThemeProvider>
			</IndexGlobalProvider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

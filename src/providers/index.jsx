import React, { Fragment } from "react";
import DialogContextProvider from "./dialog";
import SnackbarContextProvider from "./snackbar";
import LandingPageContextProvider from "./landingpage";

const PageProvider = ({ children }) => {
	return <LandingPageContextProvider>{children}</LandingPageContextProvider>;
};

const IndexGlobalProvider = ({ children }) => {
	return (
		<Fragment>
			<SnackbarContextProvider>
				<DialogContextProvider>
					<PageProvider>{children}</PageProvider>
				</DialogContextProvider>
			</SnackbarContextProvider>
		</Fragment>
	);
};

export default IndexGlobalProvider;

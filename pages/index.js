import { Box, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { Fragment, useContext, useEffect } from "react";
import AppbarComponent from "../src/components/global/appbar";
import CustomFooter from "../src/components/global/footer";
import HomeContentCard from "../src/components/page/home/content-card";
import HomeContentCardEmpty from "../src/components/page/home/content-card/empty-index";
import HomeHeader from "../src/components/page/home/header";
import HomeNavigation from "../src/components/page/home/navigation";
import GlobalDialog from "../src/components/global/dialog";
import { FetchAllProject } from "../src/actions/home";
import {
	LandingPageContextDispatch,
	LandingPageContextState,
} from "../src/providers/landingpage";
import { SnackbarContextDispatch } from "../src/providers/snackbar";
import { DialogContextDispatch } from "../src/providers/dialog";

export default function Index(props) {
	const dispatch = {
		landingPage: useContext(LandingPageContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
		dialog: useContext(DialogContextDispatch),
	};
	const state = { landingpage: useContext(LandingPageContextState) };
	const { pagination, data, isLoading, count } = state.landingpage;

	useEffect(() => {
		FetchAllProject(dispatch);
	}, []);
	return (
		<Fragment>
			<GlobalDialog />
			<AppbarComponent />
			<Container maxWidth="lg">
				{/* HOME */}
				<Box paddingTop="120px" paddingX="20px">
					<HomeHeader />
				</Box>
				{/* NAVIGATION BAR */}
				<Box marginTop="48px" paddingX="20px">
					<HomeNavigation />
				</Box>
				{/* CONTENT BAR */}
				<Box marginTop="36px" paddingX="20px">
					<Grid container spacing={2}>
						{/* PROJECT CARD */}
						{data.length > 0 ? (
							data.map((data, index) => {
								console.log(data);
								return (
									<HomeContentCard
										key={`ProjectCard${index}`}
										Title={data.title}
										Subtitle={data.description}
										ProjectImage={data.image}
										Id={data._id}
									/>
								);
							})
						) : isLoading ? (
							<Fragment>
								<HomeContentCardEmpty />
								<HomeContentCardEmpty />
								<HomeContentCardEmpty />
							</Fragment>
						) : null}
					</Grid>
				</Box>
			</Container>
			<CustomFooter />
		</Fragment>
	);
}

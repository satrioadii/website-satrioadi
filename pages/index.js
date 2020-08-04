import { Box, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { Fragment } from "react";
import AppbarComponent from "../src/components/Appbar";
import DialogComponent from "../src/components/Dialog";
import CustomFooter from "../src/components/Footer";
import HomeContentCard from "../src/components/page/home/content-card";
import HomeHeader from "../src/components/page/home/header";
import HomeNavigation from "../src/components/page/home/navigation";
import { ProjectContents } from "../src/contents/projects";

export default function Index(props) {
	return (
		<Fragment>
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
						{ProjectContents.map((data, index) => {
							return (
								<HomeContentCard
									key={`ProjectContent${index}`}
									Title={data.title}
									Subtitle={data.subtitle}
									ProjectImage={data.imageProject}
								/>
							);
						})}
					</Grid>
					<DialogComponent type="project" />
				</Box>
			</Container>
			<CustomFooter />
		</Fragment>
	);
}

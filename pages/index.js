import { Box, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { Fragment } from "react";
import AppbarComponent from "../src/components/Appbar";
import HomeHeader from "../src/components/page/home/header";
import HomeNavigation from "../src/components/page/home/navigation";
import HomeContentCard from "../src/components/page/home/content-card";
import DialogComponent from "../src/components/Dialog";

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
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here2"
							Subtitle="Project subtitle is here, make sure you see this yeeees2"
						/>
						<HomeContentCard
							Title="Project Title Here3"
							Subtitle="Project subtitle is here, make sure you see this yeeees3"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
						<HomeContentCard
							Title="Project Title Here"
							Subtitle="Project subtitle is here, make sure you see this yeeees"
						/>
					</Grid>
					<DialogComponent />
				</Box>
			</Container>
		</Fragment>
	);
}

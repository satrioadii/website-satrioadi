import {
	Box,
	Button,
	Grid,
	makeStyles,
	Typography,
	useTheme,
} from "@material-ui/core";
import React, { Fragment } from "react";
import HighLightComponent from "./highlight";

const styles = makeStyles((theme) => {
	return {};
});

const HomeHeader = () => {
	const classes = styles();
	const theme = useTheme();
	return (
		<Fragment>
			<Grid container spacing={3} alignItems="center">
				<Grid item xs={12} md={6}>
					{/* IMAGE */}
					<div
						style={{
							width: "80px",
							height: "80px",
							borderRadius: "40px",
							backgroundImage: "url('./img-home/ava-satrio.png')",
							backgroundPosition: "center",
							backgroundSize: "contain",
							backgroundColor: "#ffffff00",
							border: "2px solid #354f6b",
						}}
					></div>
					{/* INTRODUCE */}
					<Box marginTop="36px">
						<Typography variant="h4" component="h1">
							<strong>
								Hi! I'm{" "}
								<strong
									style={{
										fontWeight: "500",
										color: theme.palette.primary.main,
									}}
								>
									Satrio
								</strong>
								,
							</strong>
						</Typography>
						<Box marginTop="12px">
							<Typography variant="h3" component="h1">
								<strong style={{ fontWeight: "500" }}>
									Fullstack Developer
								</strong>
							</Typography>
						</Box>
						<Box marginTop="12px">
							<Typography variant="h6" color="textSecondary" component="h2">
								<strong style={{ fontWeight: "400" }}>
									A super passionate professional developer which really love
									his works and likes to solve problems through technology.
								</strong>
							</Typography>
						</Box>
						<Box marginTop="8px">
							<Typography variant="h6" component="p">
								What about some discussion?
								<br />
								It is{" "}
								<span style={{ color: theme.palette.primary.main }}>
									Free
								</span>{" "}
								anyway.
							</Typography>
						</Box>
						<Box marginTop="20px">
							<a href="#" style={{ textDecoration: "none" }}>
								<Button
									color="primary"
									variant="contained"
									style={{ boxShadow: "none" }}
								>
									Let's Talk
								</Button>
							</a>
						</Box>
					</Box>
					{/* DESCRIPTION */}
				</Grid>
				<Grid item xs={12} md={6}>
					<Box marginX="auto">
						<HighLightComponent />
					</Box>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default HomeHeader;

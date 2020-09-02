import { useContext, useState } from "react";
import { LandingPageContextState } from "../../../../providers/landingpage";

const { Fragment } = require("react");
const { useTheme, Box, Typography, Link } = require("@material-ui/core");

const Navigator = ({ selected, command, total, title, condition }) => {
	const selectCondition = condition;
	const theme = useTheme();
	return (
		<Box paddingX="16px" textAlign="center" paddingY="4px">
			<Typography
				variant="h6"
				component="p"
				style={{ cursor: "pointer" }}
				onClick={() => command(condition)}
			>
				<span
					style={{
						fontWeight: "500",
						color:
							selectCondition === selected
								? theme.palette.primary.main
								: theme.palette.text.secondary,
					}}
				>
					{total}
				</span>{" "}
				<span
					style={{
						fontWeight: "500",
						color:
							selectCondition === selected
								? theme.palette.text.main
								: theme.palette.text.secondary,
					}}
				>
					{title}
				</span>
			</Typography>
		</Box>
	);
};

const HomeNavigation = () => {
	const theme = useTheme();
	const state = {
		landingPage: useContext(LandingPageContextState),
	};
	const { count } = state.landingPage;
	const [navigation, setNavigation] = useState(1);
	const NavigationHandler = (value) => {
		setNavigation(value);
	};

	return (
		<Fragment>
			<div
				style={{
					borderRadius: "8px",
					border: `1px solid ${theme.palette.owngray1.main}`,
					padding: "12px 0",
					display: "inline-block",
				}}
			>
				<Box
					display="inline-flex"
					flexWrap="wrap"
					justifyContent="start"
					alignContent="flex-start"
					style={{}}
				>
					<Navigator
						selected={navigation}
						command={(number) => NavigationHandler(number)}
						total={count}
						title="projects"
						condition={1}
					/>
					{/* <Navigator
						selected={navigation}
						command={(number) => setNavigation(number)}
						total={8}
						title="collaborations"
						condition={2}
					/>
					<Navigator
						selected={navigation}
						command={(number) => setNavigation(number)}
						total={3}
						title="organizations"
						condition={3}
					/> */}
				</Box>
			</div>
		</Fragment>
	);
};

export default HomeNavigation;

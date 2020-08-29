import { Fragment } from "react";
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Link,
	makeStyles,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => {
	return {
		textTitle: {
			color: theme.palette.owndark1.main,
			fontWeight: "500",
			"&:hover": {
				border: "none",
			},
		},
		ctaButton: { boxShadow: "none" },
		appStyle: { backgroundColor: "#fff", padding: "8px 0" },
	};
});

const AppbarComponent = () => {
	const classes = useStyles();
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 16 });

	return (
		<Fragment>
			<AppBar elevation={trigger ? 4 : 0} className={classes.appStyle}>
				<Container maxWidth="lg">
					<Toolbar disableGutters={true}>
						<IconButton edge="start" aria-label="menu" href="/">
							<div
								style={{
									width: "40px",
									height: "40px",
									borderRadius: "8px",
									backgroundColor: "#B6BBCC",
									backgroundImage: "url('./img-head/apple-touch-icon.png')",
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
							></div>
						</IconButton>

						<a href="/">
							<Link underline="none" component="button">
								<Typography className={classes.textTitle} variant="h6">
									satrioadi
								</Typography>
							</Link>
						</a>
						<Box marginLeft="auto">
							<a href="#" style={{ textDecoration: "none" }}>
								<Button
									color="primary"
									variant="contained"
									size="medium"
									style={{ boxShadow: "none" }}
								>
									Let's Talk
								</Button>
							</a>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Fragment>
	);
};

export default AppbarComponent;

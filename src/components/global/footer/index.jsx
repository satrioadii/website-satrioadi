import { Fragment } from "react";

import { Container, makeStyles, Typography, Box } from "@material-ui/core";

const styles = makeStyles((theme) => {
	return {
		footerContainer: {
			backgroundColor: theme.palette.ownlight2.main,
			padding: "18px 0",
			marginTop: "36px",
		},
	};
});

const CustomFooter = () => {
	const classes = styles();
	return (
		<Fragment>
			<div className={classes.footerContainer}>
				<Container maxWidth="lg">
					<Box display="flex">
						<Box paddingX="20px">
							<Typography
								component="p"
								variant="h5"
								style={{ fontWeight: "400" }}
								color="textPrimary"
							>
								satrioadi.com
							</Typography>
						</Box>
						<Box paddingX="20px" marginLeft="auto">
							<Typography
								component="p"
								variant="h5"
								style={{ fontWeight: "400" }}
								color="textSecondary"
							>
								@2020
							</Typography>
						</Box>
					</Box>
				</Container>
			</div>
		</Fragment>
	);
};

export default CustomFooter;

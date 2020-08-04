import { useContext } from "react";
import {
	GetDetailData,
	GetListData,
	ShowDialogAction,
} from "../../../../actions/modal/index";
import { ModalContextDispatch } from "../../../../provider/modal";

const { Grid, Typography, Box, makeStyles } = require("@material-ui/core");

const styles = makeStyles((theme) => {
	return {
		contentTitle: {
			fontWeight: "500 !important",
			cursor: "pointer",
			lineHeight: "1.3",
		},
		contentSubtitle: {
			fontWeight: "400 !important",
			cursor: "pointer",
		},
	};
});

const HomeContentCard = ({ Title, Subtitle, ProjectImage }) => {
	const classes = styles();
	const dispatch = useContext(ModalContextDispatch);
	const showModal = () => {
		GetListData(dispatch, Title, Subtitle);
		ShowDialogAction(dispatch);
		GetDetailData(dispatch);
	};

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<div
				onClick={() => showModal()}
				style={{
					width: "100%",
					paddingTop: "133%",
					backgroundColor: " #C3C8D8",
					borderRadius: "16px",
					cursor: "pointer",
					backgroundImage: ProjectImage,
					backgroundSize: "cover",
				}}
			></div>
			<Box paddingX="4px">
				<Box marginTop="8px" marginBottom="4px">
					<Typography
						onClick={() => showModal()}
						variant="h6"
						component="p"
						className={classes.contentTitle}
					>
						{Title}
					</Typography>
				</Box>
				<Typography
					onClick={() => showModal()}
					component="p"
					color="textSecondary"
					className={classes.contentSubtitle}
				>
					{Subtitle}
				</Typography>
			</Box>
		</Grid>
	);
};

export default HomeContentCard;

import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	makeStyles,
	Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Fragment, useContext } from "react";
import { ModalContext } from "../../provider/modal";
import ProjectDialogComponent from "./ProjectDialog";

const styles = makeStyles((theme) => {
	return {
		customShadow: {
			boxShadow: "0px 0px 30px 0px rgba(210,210,210,0.8)",
			border: `2px solid ${theme.palette.owngray1.main}`,
		},
	};
});

const DialogComponent = () => {
	const classes = styles();
	const { modalShow, data, toggleModalShow } = useContext(ModalContext);
	let DetailComponent = undefined;

	if (data.detail) {
		if (data.detail.type === "project") {
			DetailComponent = ProjectDialogComponent;
		}
	}

	return (
		<Fragment>
			<Dialog
				BackdropProps={{ style: { backgroundColor: "rgba(250,250,250,0.6)" } }}
				PaperProps={{ className: classes.customShadow }}
				open={modalShow}
				onClose={() => toggleModalShow()}
				scroll="body"
				maxWidth="sm"
			>
				<DialogTitle>
					<Box display="flex">
						<Box flexGrow={1}>
							{/* Title */}
							<Typography variant="h6" component="h3" color="primary">
								{" "}
								{data.title}
							</Typography>
						</Box>{" "}
						<Box>
							<CloseIcon
								style={{ cursor: "pointer", fontSize: "28px" }}
								onClick={() => toggleModalShow()}
							/>
						</Box>
					</Box>
				</DialogTitle>
				<DialogContent>
					{data.detail ? <DetailComponent /> : null}
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default DialogComponent;

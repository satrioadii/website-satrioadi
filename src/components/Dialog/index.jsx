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
import { ModalContextDispatch, ModalContextState } from "../../provider/modal";
import { HideDialogAction } from "../../actions/modal/index";
import ProjectDialogComponent from "./ProjectDialog";

const styles = makeStyles((theme) => {
	return {
		customShadow: {
			boxShadow: "0px 0px 30px 0px rgba(210,210,210,0.8)",
			border: `2px solid ${theme.palette.owngray1.main}`,
		},
	};
});

const DialogComponent = ({ type }) => {
	const classes = styles();
	const dispatch = useContext(ModalContextDispatch);
	const state = useContext(ModalContextState);
	const { modalShow, dataList } = state;
	let DetailComponent = undefined;
	if (type === "project") {
		DetailComponent = ProjectDialogComponent;
	}
	return (
		<Fragment>
			<Dialog
				BackdropProps={{ style: { backgroundColor: "rgba(250,250,250,0.6)" } }}
				PaperProps={{ className: classes.customShadow }}
				open={modalShow}
				onClose={() => HideDialogAction(dispatch)}
				scroll="body"
				maxWidth="sm"
			>
				<DialogTitle>
					<Box display="flex">
						<Box flexGrow={1}>
							{/* Title */}
							<Typography variant="h6" component="h3" color="primary">
								{" "}
								{dataList[0].title}
							</Typography>
						</Box>{" "}
						<Box>
							<CloseIcon
								style={{ cursor: "pointer", fontSize: "28px" }}
								onClick={() => HideDialogAction(dispatch)}
							/>
						</Box>
					</Box>
				</DialogTitle>
				<DialogContent>
					<DetailComponent />
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default DialogComponent;

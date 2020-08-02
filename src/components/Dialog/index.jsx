import { useContext } from "react";
import { ModalContext } from "../../provider/modal";
import {} from "@material-ui/core/Icon/Icon";
import {
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	DialogContent,
	makeStyles,
	Box,
	Link,
	Typography,
} from "@material-ui/core";

const { Fragment } = require("react");

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
	return (
		<Fragment>
			<Dialog
				BackdropProps={{ style: { backgroundColor: "rgba(250,250,250,0.6)" } }}
				PaperProps={{ className: classes.customShadow }}
				open={modalShow}
				onClose={() => toggleModalShow()}
				scroll="body"
				maxWidth="xl"
			>
				<DialogTitle>
					<Box display="flex">
						<Box flexGrow={1}>{data.title}</Box>{" "}
						<Box>
							<Typography
								color="secondary"
								variant="text"
								style={{ cursor: "pointer" }}
								onClick={() => toggleModalShow()}
							>
								{/* <CloseIcon />
                                X */}X
							</Typography>
						</Box>
					</Box>
				</DialogTitle>
				<DialogContent>{data.subtitle}</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default DialogComponent;

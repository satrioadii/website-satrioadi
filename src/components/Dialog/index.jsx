import { useContext } from "react";
import { ModalContext } from "../../provider/modal";
import CloseIcon from "@material-ui/icons/Close";
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
	Chip,
	Grid,
} from "@material-ui/core";
import { ChipsContainer, CustomChip } from "../Chips";

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
					<div
						style={{
							width: "100%",
							paddingTop: "75%",
							backgroundColor: " #C3C8D8",
							borderRadius: "4px",
							marginBottom: "16px",
						}}
					></div>
					<Box paddingX="8px">
						{/* Category */}
						<Box marginBottom="16px">
							<Chip
								label="Web Development"
								variant="outlined"
								color="primary"
							/>
						</Box>
						{/* Description */}
						<Box marginBottom="16px">
							<Typography component="p" variant="p">
								{data.subtitle}
								He knew what he was supposed to do. That had been apparent from
								the beginning. That was what made the choice so difficult. What
								he was supposed to do and what he would do were not the same.
								This would have been fine if he were willing to face the
								inevitable consequences, but he wasn't.
							</Typography>
						</Box>
						<Grid container spacing={3}>
							{/* Project FOR */}
							<Grid item xs={12} md={4}>
								<Box textAlign="left">
									<Typography variant="h6" style={{ fontWeight: "400" }}>
										Project For
									</Typography>
									{/* Project Image */}
									<div
										style={{
											width: "100%",
											marginTop: "8px",
											paddingBottom: "75%",
											backgroundImage: "url('./img-project/logo-dribbble.jpg')",
											backgroundSize: "cover",
											backgroundRepeat: "none",
											backgroundPosition: "center",
											borderRadius: "8px",
										}}
									/>
								</Box>
							</Grid>
							{/* Tools */}
							<Grid item xs={12} md={8}>
								<Box textAlign="Left">
									<Box marginBottom="8px">
										<Typography variant="h6" style={{ fontWeight: "400" }}>
											Tools
										</Typography>
									</Box>
									<ChipsContainer>
										<CustomChip
											label="Next JS"
											color="primary"
											variant="outlined"
											links="https://nextjs.org"
										/>
										<CustomChip
											label="Material UI"
											color="primary"
											variant="outlined"
											links="https://material-ui.com/"
										/>
										<CustomChip
											label="Context API"
											color="secondary"
											variant="outlined"
											links="https://reactjs.org/docs/context.html"
										/>
										<CustomChip
											label="Nginx"
											color="secondary"
											variant="outlined"
											links="https://www.nginx.com/"
										/>
										<CustomChip
											label="Google Cloud"
											color="secondary"
											variant="outlined"
											links="https://cloud.google.com/"
										/>
										<CustomChip
											label="HTML"
											color="secondary"
											variant="outlined"
										/>
										<CustomChip
											label="CSS"
											color="secondary"
											variant="outlined"
										/>
									</ChipsContainer>
								</Box>
							</Grid>
						</Grid>
						{/* Links */}
						<div>
							<Box marginTop="16px" marginBottom="8px">
								<Typography
									variant="h6"
									component="p"
									style={{ fontWeight: "400" }}
								>
									Links
								</Typography>
							</Box>
							<ChipsContainer>
								<CustomChip
									label="github"
									color="secondary"
									links="https://github.com"
								/>
							</ChipsContainer>
						</div>
					</Box>
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default DialogComponent;

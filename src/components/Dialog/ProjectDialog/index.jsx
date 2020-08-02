import {
	Box,
	Chip,
	CircularProgress,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { Fragment, useContext } from "react";
import { ModalContext } from "../../../provider/modal";
import { ChipsContainer, CustomChip } from "../../Chips";

const styles = makeStyles((theme) => {
	return {
		customShadow: {
			boxShadow: "0px 0px 30px 0px rgba(210,210,210,0.8)",
			border: `2px solid ${theme.palette.owngray1.main}`,
		},
	};
});

const ProjectDialogComponent = () => {
	const classes = styles();
	const { modalShow, data, toggleModalShow } = useContext(ModalContext);
	return (
		<Fragment>
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
					{data.detail ? (
						<Chip
							label={data.detail.category}
							variant="outlined"
							color="primary"
						/>
					) : (
						<CircularProgress />
					)}
				</Box>
				{/* Description */}
				<Box marginBottom="16px">
					<Typography component="p">
						{data.detail ? data.detail.description : <CircularProgress />}
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
									backgroundImage: data.detail ? data.detail.projectImg : null,
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
								{data.detail ? (
									data.detail.tools.map((dataTool, index) => {
										return (
											<CustomChip
												key={`toolsProject${data.title}-${index}`}
												{...dataTool}
											/>
										);
									})
								) : (
									<CircularProgress />
								)}
							</ChipsContainer>
						</Box>
					</Grid>
				</Grid>
				{/* Links */}
				<div>
					<Box marginTop="16px" marginBottom="8px">
						<Typography variant="h6" style={{ fontWeight: "400" }}>
							Links
						</Typography>
					</Box>
					<ChipsContainer>
						{data.detail ? (
							data.detail.links.map((dataLink, index) => {
								return (
									<CustomChip
										key={`linkProject${data.title}-${index}`}
										{...dataLink}
									/>
								);
							})
						) : (
							<CircularProgress />
						)}
					</ChipsContainer>
				</div>
			</Box>
		</Fragment>
	);
};

export default ProjectDialogComponent;

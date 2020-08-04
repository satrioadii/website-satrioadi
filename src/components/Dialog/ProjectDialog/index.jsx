import {
	Box,
	Chip,
	CircularProgress,
	Grid,
	Typography,
} from "@material-ui/core";
import { Fragment, useContext } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { ModalContextState } from "../../../provider/modal";
import { ChipsContainer, CustomChip } from "../../Chips";

const ProjectDialogComponent = () => {
	const state = useContext(ModalContextState);
	const { dataDetail, isLoading, dataList } = state;
	return (
		<Fragment>
			{isLoading ? (
				<Skeleton
					variant="rect"
					width="100%"
					style={{
						borderRadius: "4px",
						paddingTop: "75%",
						marginBottom: "16px",
					}}
				/>
			) : (
				<div
					style={{
						width: "100%",
						paddingTop: "75%",
						backgroundColor: " #C3C8D8",
						backgroundImage: dataDetail ? dataDetail.imgProjectModal : null,
						borderRadius: "4px",
						marginBottom: "16px",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			)}

			<Box paddingX="8px">
				{/* Category */}
				<Box marginBottom="16px">
					{isLoading ? (
						<Skeleton
							variant="rect"
							width="120px"
							height="32px"
							style={{ borderRadius: "20px" }}
						/>
					) : (
						<Chip
							label={dataDetail.category}
							variant="outlined"
							color="primary"
						/>
					)}
				</Box>
				{/* Description */}
				<Box marginBottom="16px">
					<Typography component="p">
						{isLoading ? (
							<Fragment>
								<Skeleton variant="text" />
								<Skeleton variant="text" />
								<Skeleton variant="text" />
							</Fragment>
						) : (
							dataDetail.description
						)}
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
							{isLoading ? (
								<Skeleton
									variant="rect"
									width="100%"
									style={{
										paddingBottom: "75%",
										marginTop: "8px",
										borderRadius: "8px",
									}}
								/>
							) : (
								<div
									style={{
										width: "100%",
										marginTop: "8px",
										paddingBottom: "75%",
										backgroundImage: dataDetail
											? dataDetail.imgOrganization
											: null,
										backgroundSize: "cover",
										backgroundRepeat: "none",
										backgroundPosition: "center",
										borderRadius: "8px",
									}}
								/>
							)}
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
								{isLoading
									? [0, 1, 2, 3, 4].map((data, index) => {
											return (
												<Grid item key={`SkeletonTools${index}`}>
													<Skeleton
														variant="rect"
														width="90px"
														height="32px"
														style={{ borderRadius: "20px" }}
													/>
												</Grid>
											);
									  })
									: dataDetail.tools.map((dataTool, index) => {
											return (
												<CustomChip
													key={`toolsProject${dataList[0].title}-${index}`}
													{...dataTool}
												/>
											);
									  })}
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
						{isLoading ? (
							<Skeleton
								variant="rect"
								width="90px"
								height="32px"
								style={{ borderRadius: "20px" }}
							/>
						) : (
							dataDetail.links.map((dataLink, index) => {
								return (
									<CustomChip
										key={`linkProject${dataList[0].title}-${index}`}
										{...dataLink}
									/>
								);
							})
						)}
					</ChipsContainer>
				</div>
			</Box>
		</Fragment>
	);
};

export default ProjectDialogComponent;

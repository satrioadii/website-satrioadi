const { Fragment } = require("react");
const { Chip, Grid } = require("@material-ui/core");

export const ChipsContainer = ({ children }) => {
	return (
		<Fragment>
			<Grid container spacing={1}>
				{children}
			</Grid>
		</Fragment>
	);
};

export const CustomChip = ({
	size,
	label,
	color,
	variant,
	links,
	commands,
	newTab,
}) => {
	return (
		<Grid item>
			{links ? (
				<a
					href={links}
					target={newTab ? "_blank" : undefined}
					style={{ textDecoration: "none" }}
				>
					<Chip
						label={label}
						size={size ? size : "medium"}
						color={color ? color : undefined}
						variant={variant ? variant : "default"}
						onClick={() => commands}
					/>
				</a>
			) : (
				<Chip
					label={label}
					size={size ? size : "medium"}
					color={color ? color : undefined}
					variant={variant ? variant : "default"}
				/>
			)}
		</Grid>
	);
};

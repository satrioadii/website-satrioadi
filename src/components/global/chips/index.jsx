import React, { Fragment } from "react";
import { Chip, Grid } from "@material-ui/core";

export const ChipsContainer = ({ children }) => {
	return (
		<Fragment>
			<Grid container spacing={1}>
				{children}
			</Grid>
		</Fragment>
	);
};

export const CustomChip = ({ size, label, color, variant, link, commands }) => {
	return (
		<Grid item>
			{link ? (
				<Chip
					label={label}
					size={size ? size : "medium"}
					color={color ? color : undefined}
					variant={variant ? variant : "default"}
					onClick={() => window.open(link)}
				/>
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

import { CLOSE_DIALOG, OPEN_DIALOG } from "../../providers/dialog/index.type";

export const OpenDialogAction = (dispatch, title, bodyComponent) => {
	dispatch.dialog({
		type: OPEN_DIALOG,
		title: title,
		component: bodyComponent,
	});
};

export const CloseDialogAction = (dispatch) => {
	dispatch.dialog({ type: CLOSE_DIALOG });
};

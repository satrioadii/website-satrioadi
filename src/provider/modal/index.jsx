import {
	useState,
	createContext,
	useEffect,
	useContext,
	useReducer,
} from "react";
import ModalReducer from "./index.reducer";

const INITIAL_STATE = {
	modalShow: false,
	dataList: [{ title: null, subtitle: null }],
	dataDetail: {
		category: null,
		tools: [],
		links: [],
		description: null,
		projectImg: null,
	},
	isLoading: true,
};

export const ModalContextState = createContext();
export const ModalContextDispatch = createContext();

const ModalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ModalReducer, INITIAL_STATE);

	return (
		<ModalContextDispatch.Provider value={dispatch}>
			<ModalContextState.Provider value={state}>
				{children}
			</ModalContextState.Provider>
		</ModalContextDispatch.Provider>
	);
};

export const ModalContext = () => {
	const ModalDispatch = useContext(ModalDispatch);
	const ModalState = useContext(ModalContextState);

	return [ModalState, ModalDispatch];
};

export default ModalContextProvider;

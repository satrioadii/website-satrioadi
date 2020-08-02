import { useState, createContext, useEffect } from "react";

const INITIAL_STATE = {
	modalShow: false,
	data: {
		title: null,
		subtitle: null,
		detail: undefined,
	},
	isLoading: false,
	toggleModalShow: () => {},
	setModalData: () => {},
	setIsLoading: () => {},
};

export const ModalContext = createContext(INITIAL_STATE);

const ModalContextProvider = ({ children }) => {
	const [modalState, setModalState] = useState(INITIAL_STATE.modalShow);
	const [dataState, setDataState] = useState(INITIAL_STATE.data);
	const [isLoading, setIsLoading] = useState(INITIAL_STATE.isLoading);

	const toggleModalShow = () => setModalState(!modalState);
	const setModalData = (data) => setDataState({ ...data });

	return (
		<ModalContext.Provider
			value={{
				modalShow: modalState,
				data: dataState,
				isLoading: isLoading,
				toggleModalShow,
				setModalData,
				setIsLoading,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;

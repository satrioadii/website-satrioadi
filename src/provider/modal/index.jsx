import { useState, createContext } from "react";

const INITIAL_STATE = {
	modalShow: false,
	data: {
		title: null,
		subtitle: null,
	},
	toggleModalShow: () => {},
	setModalData: () => {},
};

export const ModalContext = createContext(INITIAL_STATE);

const ModalContextProvider = ({ children }) => {
	const [modalState, setModalState] = useState(INITIAL_STATE.modalShow);
	const [dataState, setDataState] = useState(INITIAL_STATE.data);

	const toggleModalShow = () => setModalState(!modalState);
	const setModalData = (data) => setDataState({ ...data });

	return (
		<ModalContext.Provider
			value={{
				modalShow: modalState,
				data: dataState,
				toggleModalShow,
				setModalData,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;

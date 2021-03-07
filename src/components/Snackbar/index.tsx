import MuiSnackbar from "@material-ui/core/Snackbar";
import { useSelector, useDispatch } from "react-redux";

import { closeSnackbar } from "../../redux/actions/snackbarActions";
import { RootState } from "../../types";
import Alert from "../Alert";

const Snackbar: React.FC = () => {
	const { isOpen, message, severity } = useSelector(
		(state: RootState) => state.snackbar
	);
	const dispatch = useDispatch();

	const handleClose = () => dispatch(closeSnackbar());

	return (
		<MuiSnackbar
			open={isOpen}
			onClose={handleClose}
			autoHideDuration={1000 * 10}
		>
			<Alert severity={severity} onClose={handleClose}>
				{message}
			</Alert>
		</MuiSnackbar>
	);
};

export default Snackbar;

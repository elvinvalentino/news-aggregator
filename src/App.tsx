import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import News from "./components/News";
import BottomSheet from "./components/BottomSheet";
import Snackbar from "./components/Snackbar";

import { useTab } from "./hooks";

const App = () => {
	const { active, handleChangeTab } = useTab();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<Tabs value={active} handleChange={handleChangeTab} />
			<News value={active} />
			<BottomSheet />
			<Snackbar />
		</>
	);
};

export default App;

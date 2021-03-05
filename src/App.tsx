import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import News from "./components/News";

import { useTab } from "./hooks";

const App = () => {
	const { active, handleChangeTab } = useTab();

	return (
		<>
			<CssBaseline />
			<Navbar />
			<Tabs value={active} handleChange={handleChangeTab} />
			<News value={active} />
		</>
	);
};

export default App;

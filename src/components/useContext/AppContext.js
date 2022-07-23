
import UseContext from "./index";
import { ThemeProvider } from "./ThemeContext";
function AppContext() {

    return (
        <ThemeProvider>
            <UseContext />
        </ThemeProvider>
    );
}

export default AppContext;

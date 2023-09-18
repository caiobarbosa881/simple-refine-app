import {  Refine } from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayoutV2,
    RefineThemes,
} from "@refinedev/mui";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import { UserList } from "./pages/user/list";
import { UserCreate } from "./pages/user/create";
import { UserEdit } from "./pages/user/edit";
import { UserShow } from "./pages/user/show";

function App() {
 
    return (
        <BrowserRouter>
            <ThemeProvider theme={RefineThemes.Blue}>
                <CssBaseline />
                <GlobalStyles
                    styles={{ html: { WebkitFontSmoothing: "auto" } }}
                />
                <RefineSnackbarProvider>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={{
                          default: dataProvider("http://localhost:3000")  
                        }}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "users",
                                list: "/user/list",
                                show: "/user/show/:id",
                                create: "/user/create",
                                edit: "/user/edit/:id",
                                meta: {
                                   dataProviderName: "default",
                                },
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <ThemedLayoutV2>
                            <Routes>
                                    <Route
                                        path="/users"
                                        element={<UserShow />}
                                    />
                                    <Route
                                        path="/user/list"
                                        element={<UserList/>}
                                    />
                                    <Route
                                        path="/user/create"
                                        element={<UserCreate/>}
                                    />
                                     <Route
                                        path="/user/show/:id"
                                        element={<UserShow />}
                                    />
                                    <Route
                                        path="/user/edit/:id"
                                        element={<UserEdit />}
                                    />
                                    
                            </Routes>
                        </ThemedLayoutV2>
                        <UnsavedChangesNotifier />
                        <DocumentTitleHandler />
                    </Refine>
                </RefineSnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
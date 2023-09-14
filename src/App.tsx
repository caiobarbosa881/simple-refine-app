import { GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayoutV2,
    RefineThemes,
    ErrorComponent,
} from "@refinedev/mui";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useList, HttpError } from "@refinedev/core";
import UserList from "./pages/user/list";
import { UserEdit } from "./pages/user/edit";
import { UserCreate } from "./pages/user/create";
import { UserShow } from "./pages/user/show";
import { IUser } from "./interfaces";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { MuiInferencer } from "@refinedev/inferencer/mui";


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
                                list: "/users",
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
                                        element={<MuiInferencer />}
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
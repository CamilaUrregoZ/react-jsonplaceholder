import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Photos from "./pages/Photos";
import PhotoDetail from "./pages/PhotoDetail";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/users"
                    element={<Users />}
                />

                <Route
                    path="/users/:id"
                    element={<UserDetail />}
                />

                <Route
                    path="/photos"
                    element={<Photos />}
                />

                <Route
                    path="/photos/:id"
                    element={<PhotoDetail />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
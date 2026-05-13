import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import HireMe from "./pages/HireMe"
import Videos from "./pages/Videos"

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout />}>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/hireme" element={<HireMe />} />
                    <Route path="/videos" element={<Videos />} />

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
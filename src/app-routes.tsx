import React from "react";
import { Routes, Route } from 'react-router-dom';

import Landing from "./pages/Landing";
import CoachList from "./pages/CoachList";
import CoachForm from "./pages/CoachForm";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/study" element={<CoachList />} />
            <Route path="/give-classes" element={<CoachForm />} />
        </Routes>
    );
}

export default AppRoutes;
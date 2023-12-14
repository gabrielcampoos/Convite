import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Confirm } from '../../pages/Confirm';
import { Home } from '../../pages/Home';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/confirm" element={<Confirm />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

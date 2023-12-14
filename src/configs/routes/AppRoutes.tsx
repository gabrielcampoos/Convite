import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Confirm } from '../../pages/Confirm';
import { Home } from '../../pages/Home';
import { Init } from '../../pages/Init';

const AppRoutes: React.FC = () => {
	const [start, setStart] = useState(false);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Init start={start} setStart={setStart} />}
				/>
				<Route
					path="/home"
					element={<Home start={start} setStart={setStart} />}
				/>
				<Route path="/confirm" element={<Confirm />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

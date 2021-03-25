import React from 'react';
import Navbar from './components/Navbar';
import ListOfStat from './components/ListOfStat';
import AnalyticChart from './components/AnalyticChart';


export default function App() {
	return (
		<div className="bg-gray-900 min-h-screen
			pb-36 "> 
            <Navbar />
			<div className="flex items-center justify-center flex-col xl:flex-row" style={{
				minHeight: "80vh",
			}}>
				<ListOfStat />
				<AnalyticChart />
			</div>
		</div>
	);
}
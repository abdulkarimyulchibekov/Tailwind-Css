export default function App() {
	return (
		<div className='w-screen h-screen bg-gray-100 flex justify-center items-center flex-col'>
			<div className='w-96'>
				<div className='w-100 flex items-center bg-blue-400 p-5 rounded-t-lg'>
					<div className='bg-white rounded-full w-2 h-2 mr-2.5'></div>
					<p className='uppercase font-semibold mr-40 text-white'>
						mark zuckerberg
					</p>
					<p className='uppercase font-semibold text-white'>x</p>
				</div>
				<div className='rounded-b-lg bg-white'>
					<div className='flex items-center pt-8 pl-6 pr-6 pb-5 mb-6'>
						<div className='w-2/5 h-0.5 bg-gray-200 mr-4'></div>
						<p className='uppercase font-medium text-gray-200'>today</p>
						<div className='w-2/5 h-0.5 bg-gray-200 ml-4'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

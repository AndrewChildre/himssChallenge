import {React , useState, useEffect} from 'react';
import DataList from './DataList';
import useFetch from './useFetch';



const Home = () => {

       const { data: sourceData } = useFetch('http://localhost:3000/elements')
 

    return (
			<div>
				{sourceData && (
					<DataList
						sourceData={sourceData.filter(
							(data1) => data1.state === ('OPEN')
						)}
					/>
				)}
			</div>
		)
}

export default Home;
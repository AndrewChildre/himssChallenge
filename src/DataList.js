import React from 'react';
import { Link } from 'react-router-dom'
const DataList = ({ sourceData }) => {

  

	return (
		<div>
			{sourceData.map((data1) => (
				<div className='home' key={data1.id}>
					<div className='left flex-item'>
						<p>Id: {data1.id} </p>
						<p>State: {data1.state}</p>
						<Link to='/'>Details</Link>
					</div>
					<div className='center flex-item'>
						<p>Type: {data1.payload.reportType}</p>
						<p>Message: {data1.payload.message} </p>
					</div>
					<div className='right flex-item'>
						<Link to={`/resolve/${data1.id}`}>
							<button>Resolve</button>
						</Link>
						<button className='btn-block'>Block</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default DataList;

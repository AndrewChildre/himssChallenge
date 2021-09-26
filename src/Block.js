import { React, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const Block = () => {
	const { id } = useParams();
	const { data } = useFetch('http://localhost:8003/elements/' + id);

	const [blockState, setBlockState] = useState('UNBLOCKED');

	const handleSubmit = (e) => {
		e.preventDefault();

        	fetch('http://localhost:8003/elements/' + id, {
						method: 'PATCH',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ state: 'BLOCKED' }),
					});
	};

	return (
		<div>
			{data && (
				<div>
					<div className='home' key={data.id}>
						<div className='left flex-item'>
                            <h1>BLOCKED</h1>
							<p>Report Id: {data.payload.reportId} </p>
							<p>Type: {data.payload.reportType}</p>
							<Link to='/'>Details</Link>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='center flex-item resolve-center'>
								<label>State:</label>
								<select
									value={blockState}
									onChange={(e) => setBlockState(e.target.value)}>
									<option value='UNBLOCKED'>Unblocked</option>
									<option value='BLOCKED'>Blocked</option>
								</select>
								<label>Message:</label>
								<textarea></textarea>
							</div>
							<div className='right flex-item'>
								<button>Update</button>
							</div>
							<p>{blockState}</p>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Block;

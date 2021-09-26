import { React, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import useFetch from './useFetch';



const Resolve = () => {
	const { id } = useParams();
	const { data } = useFetch('http://localhost:8003/elements/' + id);

        const [ticketState, setTicketState] = useState('open')

        const handleSubmit = (e) => {
                    e.preventDefault()
                    const update = { ticketState }


                    fetch('http://localhost:8003/reports', {
                        method: 'PUT',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(update)
                    })
                    .then(
                    () => {
                      fetch('http://localhost:8003/elements/'+id, {
                            method: 'PATCH',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({state: "CLOSED"})
                      })
                        
                    }
                    )
        }

	return (
		<div>
			{data && (
				<div>
					<div className='home' key={data.id}>
						<div className='left flex-item'>
							<p>Report Id: {data.payload.reportId} </p>
							<p>Type: {data.payload.reportType}</p>
							<Link to='/'>Details</Link>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='center flex-item resolve-center'>
								<label>State:</label>
								<select value={ticketState}
                                onChange={(e) => setTicketState(e.target.value)}>
									<option value='OPEN'>Open</option>
									<option value='CLOSED'>Closed</option>
								</select>
								<label>Message:</label>
								<textarea></textarea>
							</div>
                                <div className='right flex-item'>
								<button>Update</button>
							</div>
                            <p>{ticketState}</p>
                           
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Resolve;

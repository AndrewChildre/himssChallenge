import  {React, useState}from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
const Resolve = () => {
        const {id} = useParams()
        const {data} = useFetch('http://localhost:8003/elements/' + id)

        const [resolveMe, setResolveMe] = useState('open')
        const [resolveMessage, setResolveMessage] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedStatus = {resolveMe, resolveMessage }
            console.log(updatedStatus);
        }
    return (
			<div>
				{data && (
					<div>
						<div className='home' key={data.id}>
							<div className='left flex-item'>
								<p>Id: {data.id} </p>
								<p>Type: {data.payload.reportType}</p>
								<Link to='/'>Details</Link>
							</div>

                            	<form onSubmit={handleSubmit}>
							<div className='center flex-item resolve-center'>
                                <label>State:</label>
										<select
                                        value={resolveMe}
                                        onChange={(e) => setResolveMe(e.target.value)}
                                        >
										<option value='open'>Open</option>
										<option value='resolved'>Resolved</option>
										<option value='blocked'>Blocked</option>
									</select>
                                    <label>Message:</label>
                                    <textarea
                                        value={resolveMessage}
                                        onChange={(e) => setResolveMessage(e.target.value)}
                                    ></textarea>
									</div>
                                    
                                			<div className='right flex-item'>
											<button>Update</button>
										{/* <Link to={'/'}>
										</Link> */}
                                        	
						
						</div>
								</form>
							</div>
                        <p>{resolveMe}</p>
                        <p>{resolveMessage}</p>
								
						
					</div>
				)}
			</div>
		);
};

export default Resolve;

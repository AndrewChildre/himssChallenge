import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';
const Resolve = () => {
        const {id} = useParams()
        const {data} = useFetch('http://localhost:8003/elements/' + id)
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

                            	<form>
							<div className='center flex-item resolve-center'>
                                <label>State:</label>
										<select>
										<option value='open'>Open</option>
										<option value='resolved'>Resolved</option>
										<option value='blocked'>Blocked</option>
									</select>
                                    <label>Message:</label>
                                    <textarea></textarea>
									</div>
                                    
								</form>
                                			<div className='right flex-item'>
										<Link to={'/'}>
											<button>Update</button>
										</Link>
                                        	
						
						</div>
							</div>
								
						
					</div>
				)}
			</div>
		);
};

export default Resolve;

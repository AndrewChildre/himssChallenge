import  {React, useState}from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
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
								<p>Report Id: {data.payload.reportId} </p>
								<p>Type: {data.payload.reportType}</p>
								<Link to='/'>Details</Link>
							</div>

                            	<form >
							<div className='center flex-item resolve-center'>
                                <label>State:</label>
										<select
                                        
                                        >
										<option value='open'>Open</option>
										<option value='resolved'>Resolved</option>
										<option value='blocked'>Blocked</option>
									</select>
                                    <label>Message:</label>
                                    <textarea
                                       
                                    ></textarea>
									</div>
                                    
                                			<div className='right flex-item'>
											<button >Update</button>
										{/* <Link to={'/'}>
										</Link> */}
                                        	
						
						</div>
								</form>
							</div>
                  
								
						
					</div>
				)}
			</div>
		);
};

export default Resolve;

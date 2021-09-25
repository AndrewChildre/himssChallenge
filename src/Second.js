import React from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';
const Second = () => {
        const {id} = useParams()
        const {data} = useFetch('http://localhost:8003/elements/' + id)
    return (
        <div>
          { data && (
          <div>
              <h2>{data.sourceIdentityId}</h2>
          </div>
          )  
          }
        </div>
    );
};

export default Second;
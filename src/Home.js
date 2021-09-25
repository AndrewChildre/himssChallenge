import {React , useState} from 'react';


const Home = () => {

    const handleClick = (e) => {
        console.log('click check');
    }

    const [sourceData, setSourceData] = useState([
           {
            "id": "0103e005-b762-485f-8f7e-722019d4f302",
            "source": "REPORT",
            "sourceIdentityId": "6750b4d5-4cb5-45f0-8b60-61be2072cce2",
            "reference": {
                "referenceId": "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
                "referenceType": "REPORT"
            },
            "state": "OPEN",
            "payload": {
                "source": "REPORT",
                "reportType": "SPAM",
                "message": null,
                "reportId": "6706b3ba-bf36-4ad4-9b9d-4ebf4f4e2429",
                "referenceResourceId": "a03411ce-0197-49a2-86d4-55e06aa52e79",
                "referenceResourceType": "REPLY"
            },
            "created": "2017-10-02T16:09:04.258Z"
        },
        {
            "id": "01322891-c5cb-4ac5-90d4-3c4224f40ba2",
            "source": "REPORT",
            "sourceIdentityId": "d0ba4c4a-39da-4d2c-8934-80652da104fe",
            "reference": {
                "referenceId": "130debb9-cb13-49eb-881e-86fd3244639c",
                "referenceType": "REPORT"
            },
            "state": "OPEN",
            "payload": {
                "source": "REPORT",
                "reportType": "SPAM",
                "message": null,
                "reportId": "130debb9-cb13-49eb-881e-86fd3244639c",
                "referenceResourceId": "ba6f65d6-1a83-42bc-8839-ea2639faeb69",
                "referenceResourceType": "ARTICLE"
            },
            "created": "2017-10-30T14:34:06.569Z"
        },
        {
            "id": "015bfeed-34a5-492d-bf4e-51a9afffe1ea",
            "source": "REPORT",
            "sourceIdentityId": "4bd630eb-4b36-4038-aa8e-e58c4025de1f",
            "reference": {
                "referenceId": "7274d582-9a1e-42bd-aa0f-f563904bfbab",
                "referenceType": "REPORT"
            },
            "state": "OPEN",
            "payload": {
                "source": "REPORT",
                "reportType": "INFRINGES_PROPERTY",
                "message": "it's a hippo!",
                "reportId": "7274d582-9a1e-42bd-aa0f-f563904bfbab",
                "referenceResourceId": "1573590e-f4bc-4cf4-82af-378a83fea5ab",
                "referenceResourceType": "POST"
            },
            "created": "2017-10-20T07:58:49.763Z"
        },
    ])
// ========================
    return (
			<div className='home'>
				{sourceData.map((data1) => (
					<div className='data-content' key={data1.id}>
						<div className='left flex-item'>
							<p>Id: {data1.id}</p>
							<p>State: {data1.state}</p>
							<a href='#'>Details</a>
						</div>
						<div className='center flex-item'>
							<p>Type: {data1.payload.reportType}</p>
							<p>Message: {data1.payload.message}</p>
						</div>

						<div className='right flex-item'>
							<button onClick={handleClick}>Resolve</button>

							<button className='btn-block' onClick={handleClick}>
								Block
							</button>
						</div>
					</div>
				))}
			</div>
		);
};

export default Home;
import React from 'react';

const Home = () => {

    const handleClick = (e) => {
        console.log('click check');
    }

    return (
        <div className='home'>
            <h2>Home page for content</h2>
            <button onClick={handleClick}>Resolve</button>
        </div>
    );
};

export default Home;
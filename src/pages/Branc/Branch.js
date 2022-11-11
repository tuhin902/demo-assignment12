import React, { useEffect, useState } from 'react';
import BranchCard from './BranchCard';

const Branch = () => {
    const [branchs, setBranchs] = useState([]);
    console.log(branchs)
    useEffect(() => {
        fetch('http://localhost:4000/branch')
            .then(res => res.json())
            .then(data => setBranchs(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 my-20 mx-10'>
            {
                branchs.map(branch => <BranchCard
                    key={branch._id}
                    branch={branch}
                ></BranchCard>)
            }
        </div>
    );
};

export default Branch;
import React, { useEffect, useState } from 'react';
import BranchCard from './BranchCard';

const Branch = () => {
    const [branchs, setBranchs] = useState([]);
    console.log(branchs)
    useEffect(() => {
        fetch('https://real-tech-server.vercel.app/branch')
            .then(res => res.json())
            .then(data => setBranchs(data))
    }, [])

    return (
        <div >
            <h3 className='text-5xl font-bold text-center my-10'>Our Brances</h3>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 my-20 mx-10'>
                {
                    branchs.map(branch => <BranchCard
                        key={branch._id}
                        branch={branch}
                    ></BranchCard>)
                }
            </div>
        </div>
    );
};

export default Branch;
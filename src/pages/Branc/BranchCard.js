import React from 'react';


const BranchCard = ({ branch }) => {
    const { img, name, phone, time, location } = branch;
    console.log(branch);
    return (
        <div >
            <div className="card mb-6 w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Branch in {name}</h2>
                    <p>Contact:{phone}</p>
                    <p>location:{location}</p>
                    <p>Open at:{time}</p>

                </div>
            </div>

        </div>
    );
};

export default BranchCard;
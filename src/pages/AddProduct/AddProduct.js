import React from 'react';

const AddProduct = () => {

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;

        console.log(Name, img, details)

        const newAdd = {
            name: Name,
            description: details,
            img: img

        }

        fetch('https://real-tech-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }
    return (
        <div>
            <form onSubmit={handleAdd} >
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="img" name='img' placeholder="image" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="details" name='details' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
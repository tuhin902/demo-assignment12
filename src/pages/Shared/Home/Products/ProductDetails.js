import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ProductDetails = () => {

    const { _id, user } = useContext(AuthContext);
    const product = useLoaderData();
    // console.log(product);
    const { img, name, description, quantity, price } = product;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const productName = form.productname.value;
        const rating = form.rating.value;

        const review = {
            productId: _id,
            productName: productName,
            customer: name,
            email,
            rating
        }

        fetch('https://real-tech-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 '>
                    <img href="#" src={img} className="w-1/2 h-1/2 " />
                    <h1 className="text-3xl font-bold mt-10">{name}</h1>
                    <p className='text-xl font-semibold py-6'>Quantity:{quantity}</p>
                    <p className='text-xl font-semibold'>Price:${price}</p>
                    <p className="text-xl font-semibold py-6 w-1/2">{description}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card flex-shrink-0 w-full max-w-sm my-10 shadow-2xl ">
                        <h2 className='text-3xl font-bold text-center'>Your Review</h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='productname' type="text" placeholder="name" defaultValue={name} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input name='rating' type="text" placeholder="rating" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered" readOnly />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn' type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;

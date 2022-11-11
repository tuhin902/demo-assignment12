import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {

    const product = useLoaderData();

    const { img, name, description } = product;

    console.log(product);

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 '>
                    <img href="#" src={img} className="w-1/2 h-1/2 " />
                    <h1 className="text-3xl font-bold mt-10">{name}</h1>
                    <p className="text-xl font-semibold py-6 w-1/2">{description}</p>
                </div>
                <form>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <h2>Your Review</h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="rating" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;

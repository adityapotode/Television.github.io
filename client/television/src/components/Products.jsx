import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch('http://127.0.0.1:8000/Television');
            const mainData = await res.json();
            setData(mainData);
            console.log(data)
        } catch (error) {
            console.log("Failed to fetch", error)
        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h1 className='text-center text-blue-900 text-4xl my-14 '>All Products</h1>
            <div className='flex justify-evenly items-center border h-40 '>
                {
                    data?.map((cval, i) => {
                        return (
                            <>
                                <div className='flex justify-center items-center flex-col m-2 border h-[100%] w-[40%]'>
                                    <h3>{cval.model}</h3>
                                    <h3>{cval.brand}</h3>
                                    <h3>{cval.price}</h3>

                                    <div className='flex justify-evenly my-5 w-[80%]'>
                                        <button className='border rounded bg-green-400'>Add to Cart</button> 
                                        <button className='border rounded bg-blue-400'>know know</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;
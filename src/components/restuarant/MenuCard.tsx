import React from 'react'

const MenuCard = ({ menuData }: any) => {
    // console.log(menuData)
    return (
        <>
            <div className='bg-orange-50 m-0 p-0 box-border flex flex-wrap items-center justify-center'>
                {menuData.map((curElement: any) => {
                    const { id, name, image, price, category, description } = curElement
                    return (
                        <>

                            <div className='card-container m-20' key={id}>
                                <div className="card bg-white w-80 p-5">
                                    <div className="card-body ">
                                        <span className="card-number flex text-slate-500 border-2 border-slate-400 rounded-full text-center items-center justify-center w-6 h-6 my-2">{id}</span>
                                        <span className='card-span block text-xs tracking-[0.5px] uppercase text-slate-400 my-2'>{category}</span>
                                        <h1 className='font-bold text-3xl my-2'>{name}</h1>
                                        <p className='text-sm tracking-[0.5px] text-slate-400'>
                                            {description}</p>
                                        <a href="#" className=' text-sm relative left-52 mb-3'>Read More</a>
                                        <img src={image} alt="images" className='mt-2 h-64 w-11/12 mx-auto' />
                                        <div className="flex justify-around items-center py-2">
                                            <span>Price: {price}</span>
                                            <button className='text-sm border-[1px] border-slate-400 bg-slate-100 px-2 py-1 rounded-full'>Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                }
                )
                }
            </div>
        </>
    )
}

export default MenuCard

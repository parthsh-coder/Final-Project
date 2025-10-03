import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../../card';

const Hr = () => {

    const navigate = useNavigate();


    const handleClick=()=>{
        navigate("/");
        localStorage.removeItem("role");
        localStorage.removeItem("parth");
    }
    return (
        <div className='flex border-[balck] border-4 w-full h-screen'>
            <div className='border-[black] border-1 w-[20%] flex flex-col justify-around items-center bg-blue-50 p-[5px]'>
                <div className='w-[100%] h-[80%] m-[5%] flex flex-col text-center gap-[50px]'>
                    <h1 className='text-5xl font-bold mb-[70px]  text-blue-950'>SOCIALIGHT</h1>
                    <h2 className='text-4xl font-bold text-center mb-[10%] cursor-pointer text-[30px]  text-blue-950'>Dashboard</h2>
                    <select className='text-4xl font-bold text-center mb-[10%] cursor-pointer w-80 text-[30px] mr-[10px]  text-blue-950'>
                        <option value="">ChooseEmployee</option>
                        <option value="">Arvind Sharma</option>
                        <option value="">Hardik Sharma</option>
                        <option value="">Swati Mishra</option>
                        <option value="">Rahul Rao</option>
                        <option value="">Rishab pant</option>
                    </select> <br />
                    <button onClick={handleClick} className='text-4xl font-bold text-center mb-[10%] cursor-pointer mt-[200px] text-[30px] border-1 rounded-[15px]  text-blue-950'>
                        Logout
                    </button>
                </div>
            </div>
            <div className='border-[black] border-1 w-[100%] p-[2%] flex flex-col gap-[3%] bg-blue-1'>
                <div>
                    <h1 className='text-5xl font-bold text-center text-blue-950'>Hr Dashboard</h1>
                </div>
                <div className='border-black border-1'>
                    <h2 className='text-4xl font-bold text-blue-950'>Dashboard</h2>
                </div>
                <div className='flex gap-[5%] justify-center'>
                    <Card text="LEAVE" image="https://static.thenounproject.com/png/863512-200.png" />
                    <Card text="NOTICE" image="https://cdn-icons-png.flaticon.com/512/7803/7803013.png"/>

                </div>
                <div className='flex justify-center'>
                    <img style={{width:"490px"}} src='https://i0.wp.com/www.qandle.com/blog/wp-content/uploads/2023/08/Performance-Management.png?w=1024&ssl=1'></img>
                </div>
                <div className='border-black border-1  text-blue-950 font-bold'>
                    Employees / Notices / .....
                </div>
            </div>
        </div>
    )
}

export default Hr;
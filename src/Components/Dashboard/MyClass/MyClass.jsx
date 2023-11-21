import React from 'react';
import { Link } from 'react-router-dom';

const MyClass = () => {
    return (
        <div>
            <h1 className='text-xl text-center py-5 text-orange-700'>My Class</h1>


<div className='flex  justify-evenly gap-4 w-full items-center'>
    <img src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg" alt="" />
    <div>
        <h3 className='text-3xl font-thin text-orange-700 py-5 text-center'>Complete Web Development Course</h3>
        <h4 className='py-10 font-bold text-center'>Instructor: Jhankar Mahbub</h4>

        <div className='flex justify-center items-center gap-5'>
            <Link to='/single_classes'><button>Continue Course</button></Link>
            <button>Corse Details</button>
        </div>
    </div>
</div>


        </div>
    );
};

export default MyClass;
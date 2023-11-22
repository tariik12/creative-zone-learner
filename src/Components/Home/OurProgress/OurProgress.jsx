import React from 'react';
import Container from '../../Shared/Container/Container';

const OurProgress = () => {
    return (
        <Container>
            <div className='bg-[#FFEEE4] mt-16 p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='text-center'>
                    <h2 className='font-semibold text-xl'>2000+</h2>
                    <h3 className='text-lg font-semibold mt-3'>Job Placement</h3>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold text-xl'>7000+</h2>
                    <h3 className='text-lg font-semibold mt-3'>Student</h3>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold text-xl'>90%</h2>
                    <h3 className='text-lg font-semibold mt-3'>Completion Rate</h3>
                </div>
                <div className='text-center'>
                    <h2 className='font-semibold text-xl'>28</h2>
                    <h3 className='text-lg font-semibold mt-3'>Live Course</h3>
                </div>
            </div>
        </Container>
    );
};

export default OurProgress;
const Banner = () => {
    return (
        <div className="pt-20 md:pt-40 ">
            <div className="md:flex justify-evenly ">
                <div className="md:p-10 md:w-1/3 p-3">
                    <h4 className="md:text-4xl text-2xl my-3 font-thin mx-auto">Unleash Your Potential</h4>
                    <h1 className="md:text-4xl text-2xl my-4 uppercase font-bold mx-auto">Become an IT Pro & Rule the <br /><span className="text-[#FF5900] ">Digital World</span></h1>
                    <p>With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 30 trendy options.</p>
                    <div className="flex  gap-1 md:gap-4 items-center py-8">
                        <button>Join Free Seminar</button>
                        <button>Browse Courses</button>
                    </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 border-4 border-[#FF5900] p-3 md:p-0 m-3 md:m-0">
                    <iframe
                        className="w-full md:w-[700px] h-full border-4 border-[#FF5900]"
                        src="https://www.youtube.com/embed/0_RPAZuzPs8?si=vA0UdcrAv7XUBM08"
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner;

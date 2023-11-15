import { Link } from "react-router-dom";
import Title from "../Title/Title";


const Footer = () => {
    return (
        <div>
            <div>
                <Title title="Admission Is Going on"></Title>
                <p className="text-center md:w-1/2 mx-auto p-5 md:p-0"> Enroll to any online or offline course now, take one step ahead towards a competent careerEnroll to any online or offline course now, take one step ahead towards a competent career</p>
                <div className="flex justify-center gap-4 items-center py-8">
                    <button>Join Free Seminner</button>
                    <button>Browser Course</button>
                </div>
                <div className="md:flex justify-evenly p-5 ">
                    <div>
                        <h1 className="font-bold">Contact</h1>
                        <ul>
                            <li>

                       
Momtaz Plaza 4th Floor <br />
House # 07 , Road # 04 <br />
Dhanmondi,  Dhaka- 1205
                            </li>
                            <li>+880 1625555444</li>
                            <li>info@creativezonelearner.com</li>
                        </ul>
                    </div>
                    <div>
                    <h1 className="font-bold">Quick Links</h1>
                        <ul>
                            <li><Link to='' >
                        Free Seminar Schedule
                        </Link> </li>
                            <li><Link to='/instructors'>Instructors</Link></li>
                            <li><Link to=''>Success Story</Link></li>
                            <li> <Link to=''>Our Gallery</Link></li>
                            <li> <Link to=''>FAQ</Link></li>
                            <li><Link to=''>Blog</Link></li>
                            <li><Link to=''>Privacy Policy</Link></li>
                        </ul>          
                    </div>
                  
                    <div>
                    <h1 className="font-bold">Popular Courses</h1>
                        <ul>
                            <li><Link to='' >
                        Web Development
                        </Link></li>
                            <li><Link to='/instructors'>Professional Graphic Design</Link></li>
                            <li> <Link to=''>Digital Marketing</Link></li>
                            <li><Link to=''>Mern Stack Development</Link></li>
                            <li><Link to=''>Motion Graphics</Link></li>
                            <li><Link to=''>Professional 3D Animation</Link></li>
                            <li> <Link to=''>Content Writing</Link></li>
                        </ul>  
                    </div>
                    <div>
                    <h1 className="font-bold">Others</h1>
                        <ul>
                            <li><Link to='' >
                        About Us
                        </Link></li>
                            <li> <Link to='/instructors'>Our Facility</Link></li>
                            <li><Link to=''>Our Achievement</Link></li>
                            <li><Link to=''>Career Placement</Link></li>
                            <li><Link to=''>Freelancing</Link></li>
                            <li><Link to=''>Students Feedback</Link></li>
                            <li> <Link to=''>Contact</Link></li>
                        </ul>
                        
                       
                        
                        
                        
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
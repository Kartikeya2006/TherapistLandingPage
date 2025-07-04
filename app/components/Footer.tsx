import { PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div id='footer' className="bg-teal-900 w-full py-12">
            <div className="max-w-7xl mx-auto px-8 text-teal-100 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="bg-white w-[120px] p-3 rounded-full">
                        <Image
                            alt="logo"
                            src="/image.webp"
                            width={100}
                            height={100}
                            className="w-full h-full"
                        />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold text-white">Top Rated</span>
                        <span className="text-xs text-white">• Testimonials</span>
                        <span className="text-xs text-white">• Media Mentions</span>
                    </div>
                    
                    <div className="text-sm">
                        <p>1287 Maplewood Drive,</p>
                        <p>Los Angeles,</p>
                        <p>CA 90026</p>
                    </div>
                    
                    <div className="text-sm">
                        <p className='flex gap-2'><PhoneIcon/> (323) 555-0192</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-teal-200">LINKS</h3>
                    <div className="space-y-2 text-sm">
                        <div><a href="#" >Get In Touch</a></div>
                        <div><a href="#" >Testimonials</a></div>
                        <div><a href="#">About Me</a></div>
                        <div><a href="#">FAQ&apos;s</a></div>
                        <div><a href="#">Therapies</a></div>
                        <div><a href="#">Blogs</a></div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-teal-200">AREAS SERVED</h3>
                    <div className="space-y-2 text-sm">
                        <div>Richmond, VA</div>
                        <div>Ashland, VA</div>
                        <div>Mechanicsville, VA</div>
                        <div>Lakeside, VA</div>
                        <div>East Highland Park, VA</div>
                        <div>Short Pump, VA</div>
                    </div>
                </div>

               <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-teal-200">SERVICES</h3>
                    <div className="space-y-2 text-sm">
                        <div>Anxiety & Stress Management </div>
                        <div>Relationship Counseling </div>
                        <div>Trauma Recovery</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
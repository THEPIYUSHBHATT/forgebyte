import React from 'react';
import { Search, FileText, ArrowRight } from 'lucide-react';

const ServicesSection = ({ServicesTitle , Services_btn , Services_logo}) => {
    const services = [
        {
            icon: <Search className="w-8 h-8 text-orange-500" />,
            title: "Website Development",
            description: "We optimize your site's structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.",
            link: "#"
        },
        {
            icon: <FileText className="w-8 h-8 text-orange-500" />,
            title: "App Development",
            description: "Our content marketing services include creating informative blog posts, engaging videos, and shareable infographics to captivate your audience and drive traffic to your website.",
            link: "#"
        },
        {
            icon: <FileText className="w-8 h-8 text-orange-500" />,
            title: "Desktop Application Development",
            description: "Our content marketing services include creating informative blog posts, engaging videos, and shareable infographics to captivate your audience and drive traffic to your website.",
            link: "#"
        },
        {
            icon: <FileText className="w-8 h-8 text-orange-500" />,
            title: "ChatBots Development",
            description: "Our content marketing services include creating informative blog posts, engaging videos, and shareable infographics to captivate your audience and drive traffic to your website.",
            link: "#"
        }
    ];

    return (
        <div className="bg-[#0a0a0a] min-h-screen p-4 md:p-8 lg:p-12">
            {/* Header Section */}
            <div className=" mx-auto mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
                    <div>
                        <span className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
                            {Services_logo}
                        </span>
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                             {ServicesTitle}
                        </h2>
                    </div>
                    <a
                        href="/services"
                        className="inline-flex items-center px-6 py-3 mt-4 md:mt-0 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-200 group"
                    >
                        {Services_btn}
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 mx-2 lg:mx-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 rounded-3xl p-6 md:p-8 hover:bg-zinc-800 transition duration-300"
                        >
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {service.description}
                            </p>
                            <a
                                href={service.link}
                                className="inline-flex items-center text-white hover:text-orange-500 transition duration-200 group"
                            >
                                LEARN MORE
                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
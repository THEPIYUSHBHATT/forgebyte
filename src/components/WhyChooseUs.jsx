import React from 'react';
import { Rocket, Settings, Users, MessageSquare, Headphones, Network } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 text-center transition-transform hover:transform hover:scale-105">
    <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5">
      <Icon className="w-8 h-8 text-orange-500" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Rocket,
      title: "Proven Track Record",
      description: "We have built a reputation as a trusted and reliable partner in achieving business success."
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "We offer personalized solutions tailored to your specific goals, audience, and industry."
    },
    {
      icon: Users,
      title: "Client-Centric Focus",
      description: "Your success is our priority. We prioritize understanding your business goals."
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "We believe in open and honest communication every step of the way."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Your success is our priority, and we're here to support you every step of the way."
    },
    {
      icon: Network,
      title: "Expertise Across Industries",
      description: "Our team has extensive experience working across various industries."
    }
  ];

  return (
    <section className="bg-black py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-orange-500 rounded-full bg-orange-500/10">
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why we are your best choice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "The time to see results from SEO can vary based on factors like competition, industry, and the strategies used. Typically, noticeable improvements can take 3-6 months with consistent effort.",
    },
    {
      question: "What are the key factors that influence SEO rankings?",
      answer:
        "Key factors include high-quality content, backlinks, website structure, mobile-friendliness, page speed, and user experience metrics like time on site and bounce rate.",
    },
    {
      question: "Do I need to hire an SEO agency, or can I do SEO myself?",
      answer:
        "Both options work depending on your expertise and resources. An SEO agency can provide expertise and save time, while doing it yourself may be more cost-effective if you have the knowledge and time to invest.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "The cost of SEO services canvary depending on factors suc as the scope of work , the compotitiveness ofthe industry and the experience level of the SEO agency. Some of the agencies offer fixed price packages, while others may charge on a monthly retainer basis. It's important to disucss pricingand expectations with potential SEO providers to find the solution that fits your budget and needs.",
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <span className="text-orange-400 bg-orange-900/20 px-4 py-2 rounded-full uppercase text-sm font-bold tracking-widest">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Got Questions? We’ve Got Answers!
        </h2>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-[#1a1a1a] rounded-xl transition-all ${
              openIndex === index ? "shadow-lg" : "shadow"
            }`}
          >
            {/* Question */}
            <div
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-400" size={24} />
                ) : (
                  <ChevronDown className="text-orange-400" size={24} />
                )}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-400">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

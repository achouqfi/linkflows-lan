'use client';
import { Bot, Image, LineChart, BarChart2, PieChart, FileText, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Script from 'next/script';

const iconComponents = {
 Bot: Bot,
 Image: Image,
 LineChart: LineChart,
 BarChart2: BarChart2,
 PieChart: PieChart,
 FileText: FileText,
 Send: Send
};
const MotionDiv = motion.div;

export default function WorkflowSection() {
 const workflowSteps = [
   {
     icon: 'FileText',
     title: "Discover Viral Content", 
     description: "AI-powered content research and topic discovery",
     iconBackground: "bg-blue-50",
     iconColor: "text-blue-500"
   },
   {
     icon: 'Bot',
     title: "Optimize & Publish",
     description: "SEO-optimized content publishing to WordPress",
     iconBackground: "bg-purple-50", 
     iconColor: "text-purple-500"
   },
   {
     icon: 'Image',
     title: "Pinterest Growth",
     description: "Auto-create and schedule engaging Pinterest content",
     iconBackground: "bg-pink-50",
     iconColor: "text-pink-500"
   },
   {
     icon: 'Send', 
     title: "Social Media Reach",
     description: "Automated Facebook posting with engagement tracking",
     iconBackground: "bg-indigo-50",
     iconColor: "text-indigo-500"
   }
 ];

 const jsonLd = {
   '@context': 'https://schema.org',
   '@type': 'HowTo',
   name: 'How LinkFlows Works',
   description: 'Our streamlined workflow helps you achieve maximum impact with minimum effort',
   step: workflowSteps.map((step, index) => ({
     '@type': 'HowToStep',
     name: step.title,
     text: step.description,
     position: index + 1,
     url: `https://linkflows.com`
   })),
   totalTime: 'PT10M'
 };

 const containerVariants = {
   hidden: {},
   visible: {
     transition: {
       staggerChildren: 0.3
     }
   }
 };

 const stepVariants = {
   hidden: {
     opacity: 0,
     y: 20
   },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       duration: 0.5
     }
   }
 };

 const Connector = ({ isActive }) => (
   <div className="hidden lg:block absolute top-8 left-full w-full -z-10">
     <div className="relative h-0.5 bg-gray-200">
       <MotionDiv
         animate={{
           width: ["0%", "100%", "0%"],
           left: ["0%", "0%", "100%"],
           backgroundColor: ["#696cff", "#696cff", "#696cff"]
         }}
         transition={{
           duration: 2,
           repeat: Infinity,
           ease: "easeInOut"
         }}
         className="absolute top-0 h-full"
       />
     </div>
   </div>
 );

 const StepNumber = ({ number }) => (
   <MotionDiv
     initial={{ scale: 0 }}
     animate={{ scale: 1 }}
     transition={{
       delay: number * 0.2,
       type: "spring",
       stiffness: 260,
       damping: 20
     }}
     className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#696cff] text-white text-sm flex items-center justify-center font-bold"
   >
     {number + 1}
   </MotionDiv>
 );

 return (
   <>
     <Script
       id="workflow-jsonld"
       type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
     />
     
     <div itemScope itemType="https://schema.org/HowTo">
       <meta itemProp="name" content="How LinkFlows Works" />
       <meta itemProp="description" content="Our streamlined workflow helps you achieve maximum impact with minimum effort" />

       <section className="py-20" aria-label="Workflow Process">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h1 className="text-3xl font-bold text-gray-900 mb-4" itemProp="name">
               How LinkFlows Works
             </h1>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
               Our streamlined workflow helps you achieve maximum impact with minimum effort
             </p>
           </div>

           <MotionDiv
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
           >
             {workflowSteps.map((step, index) => {
               const Icon = iconComponents[step.icon];
               return (
                 <MotionDiv
                   key={step.title}
                   variants={stepVariants}
                   className="relative"
                   itemProp="step"
                   itemScope
                   itemType="https://schema.org/HowToStep"
                   id={step.title.toLowerCase().replace(/\s+/g, '-')}
                 >
                   {index < workflowSteps.length - 1 && (
                     <Connector isActive={true} />
                   )}
                   
                   <div className="relative text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                     <StepNumber number={index} />
                     <div className={`relative w-16 h-16 rounded-full ${step.iconBackground} ${step.iconColor} mx-auto flex items-center justify-center mb-4`}>
                       <MotionDiv
                         animate={{
                           scale: [1, 1.1, 1],
                           rotate: [0, 0, 0]
                         }}
                         transition={{
                           duration: 2,
                           repeat: Infinity,
                           delay: index * 0.2
                         }}
                       >
                         <Icon className="w-8 h-8" />
                       </MotionDiv>
                     </div>
                     <MotionDiv
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.2 + index * 0.1 }}
                     >
                       <h2 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                         {step.title}
                       </h2>
                       <p className="text-gray-600" itemProp="text">
                         {step.description}
                       </p>
                     </MotionDiv>
                   </div>
                 </MotionDiv>
               );
             })}
           </MotionDiv>
         </div>
       </section>
     </div>
   </>
 );
}
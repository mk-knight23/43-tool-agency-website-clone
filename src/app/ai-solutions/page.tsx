import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Solutions & Custom AI Development Services | Bluelupin',
    description: 'Custom AI development, machine learning models, and intelligent automation solutions to transform your business.',
};

const aiServices = [
    {
        title: 'Machine Learning',
        description: 'Custom ML models for prediction, classification, and pattern recognition.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Natural Language Processing',
        description: 'Chatbots, sentiment analysis, and text processing solutions.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        title: 'Computer Vision',
        description: 'Image recognition, object detection, and visual analytics.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        title: 'Predictive Analytics',
        description: 'Data-driven insights and forecasting for better decisions.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: 'AI Integration',
        description: 'Seamlessly integrate AI into your existing workflows.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
    },
    {
        title: 'Intelligent Automation',
        description: 'Automate repetitive tasks with smart AI systems.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

const useCases = [
    'Customer Service Chatbots',
    'Document Processing',
    'Fraud Detection',
    'Recommendation Systems',
    'Quality Control',
    'Demand Forecasting',
];

export default function AISolutionsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-[250px] pb-32 lg:pt-[300px] lg:pb-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4facfe]/[0.08] to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4facfe]/10 border border-[#4facfe]/20 rounded-full text-[#4facfe] text-[12px] font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        AI Solutions
                    </span>
                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6">
                        <span className="text-white">Transform Your Business with </span>
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Artificial Intelligence
                        </span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[650px] mx-auto mb-10 leading-relaxed">
                        From custom machine learning models to intelligent automation, we build AI solutions that drive real business outcomes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[14px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-0.5"
                        >
                            Discuss Your AI Project
                        </Link>
                        <Link
                            href="/ai-use-cases"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white text-[14px] font-medium rounded-full hover:bg-white/[0.04] transition-all"
                        >
                            View AI Use Cases
                        </Link>
                    </div>
                </div>
            </section>

            {/* AI Services Grid */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            Our Capabilities
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            AI{' '}
                            <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                                Services
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiServices.map((service) => (
                            <div
                                key={service.title}
                                className="p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl hover:border-[#4facfe]/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/5 flex items-center justify-center text-[#4facfe] mb-5">
                                    {service.icon}
                                </div>
                                <h3 className="text-[18px] font-semibold text-white mb-2 group-hover:text-[#4facfe] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#8b8b9e] text-[14px] leading-[1.7]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-32 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                                Applications
                            </span>
                            <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 mb-6 leading-tight">
                                AI{' '}
                                <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                                    Use Cases
                                </span>
                            </h2>
                            <p className="text-[#8b8b9e] text-[16px] mb-8 leading-relaxed">
                                We've helped businesses across industries implement AI solutions that deliver measurable results.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {useCases.map((useCase) => (
                                    <div key={useCase} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#4facfe] rounded-full flex-shrink-0" />
                                        <span className="text-white/80 text-[14px]">{useCase}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/ai-use-cases"
                                className="inline-flex items-center gap-2 mt-8 text-[#4facfe] text-[14px] font-medium hover:gap-4 transition-all"
                            >
                                <span>Explore all use cases</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl p-8 h-[350px] flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/5 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-[#4facfe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-[#5c5c70] text-[14px]">AI Visualization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Ready to integrate{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            AI
                        </span>
                        {' '}into your business?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">
                        Let's discuss how AI can transform your operations and drive growth.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-1"
                    >
                        Schedule a Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}

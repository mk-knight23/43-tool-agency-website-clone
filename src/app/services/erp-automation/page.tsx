import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'ERP Automation Services | Bluelupin Technologies',
    description: 'Streamline operations with intelligent enterprise resource planning solutions and workflow automation.',
};

const capabilities = [
    {
        title: 'Process Automation',
        description: 'Automate repetitive business processes to increase efficiency.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        title: 'Workflow Optimization',
        description: 'Streamline workflows across departments for better collaboration.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Integration Services',
        description: 'Connect your systems for seamless data flow.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
    },
    {
        title: 'Custom ERP Solutions',
        description: 'Tailored ERP systems built for your specific needs.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'Reporting & Analytics',
        description: 'Real-time dashboards and insights for better decision making.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: 'Legacy Modernization',
        description: 'Transform outdated systems into modern, efficient solutions.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function ERPAutomationPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f97316]/[0.08] to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full text-[#f97316] text-[12px] font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0" />
                        </svg>
                        ERP Automation
                    </span>
                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6">
                        <span className="text-white">Streamline with </span>
                        <span className="bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
                            Intelligent Automation
                        </span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[600px] mx-auto mb-10 leading-relaxed">
                        Enterprise resource planning and workflow automation to optimize your operations.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#eab308] text-white text-[14px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] hover:-translate-y-0.5"
                    >
                        Discuss Your Requirements
                    </Link>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#f97316] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            Our Solutions
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            ERP{' '}
                            <span className="bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
                                Capabilities
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.title}
                                className="p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl hover:border-[#f97316]/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316]/10 to-[#eab308]/5 flex items-center justify-center text-[#f97316] mb-5">
                                    {capability.icon}
                                </div>
                                <h3 className="text-[18px] font-semibold text-white mb-2 group-hover:text-[#f97316] transition-colors">
                                    {capability.title}
                                </h3>
                                <p className="text-[#8b8b9e] text-[14px] leading-[1.7]">
                                    {capability.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Ready to{' '}
                        <span className="bg-gradient-to-r from-[#f97316] to-[#eab308] bg-clip-text text-transparent">
                            automate
                        </span>
                        {' '}your operations?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">
                        Let's discuss how ERP automation can transform your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#eab308] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] hover:-translate-y-1"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    );
}

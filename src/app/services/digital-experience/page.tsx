import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Digital Experience Services | Bluelupin Technologies',
    description: 'Modern web and mobile applications with exceptional user experiences.',
};

const capabilities = [
    {
        title: 'Web Applications',
        description: 'Scalable, performant web apps built with modern frameworks.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Progressive Web Apps',
        description: 'App-like experiences that work offline and install natively.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design that delights and converts.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        title: 'E-commerce',
        description: 'Custom e-commerce solutions with seamless checkout experiences.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: 'CMS & Portals',
        description: 'Custom content management and enterprise portals.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
];

export default function DigitalExperiencePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/[0.08] to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full text-[#a855f7] text-[12px] font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Digital Experience
                    </span>
                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6">
                        <span className="text-white">Create </span>
                        <span className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
                            Exceptional
                        </span>
                        <span className="text-white"> Digital Experiences</span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[600px] mx-auto mb-10 leading-relaxed">
                        Modern web and mobile applications designed to engage users and drive business results.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white text-[14px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)] hover:-translate-y-0.5"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#a855f7] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            What We Build
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            Our{' '}
                            <span className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
                                Capabilities
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.title}
                                className="p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl hover:border-[#a855f7]/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a855f7]/10 to-[#6366f1]/5 flex items-center justify-center text-[#a855f7] mb-5">
                                    {capability.icon}
                                </div>
                                <h3 className="text-[18px] font-semibold text-white mb-2 group-hover:text-[#a855f7] transition-colors">
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
                        Ready to create something{' '}
                        <span className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
                            amazing
                        </span>
                        ?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">
                        Let's build digital experiences that your users will love.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)] hover:-translate-y-1"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blitz - Rapid MVP Development | Bluelupin Technologies',
    description: 'Get your MVP to market in weeks, not months. Rapid prototyping and development services.',
};

const features = [
    {
        title: 'Rapid Prototyping',
        description: 'From idea to interactive prototype in just 2 weeks.',
        icon: '⚡'
    },
    {
        title: 'MVP Development',
        description: 'Full MVP ready for launch in 6-8 weeks.',
        icon: '🚀'
    },
    {
        title: 'Product Strategy',
        description: 'Market research and product-market fit validation.',
        icon: '🎯'
    },
    {
        title: 'Go-to-Market Support',
        description: 'Launch strategy and growth assistance.',
        icon: '📈'
    },
];

const process = [
    { step: '01', title: 'Discovery Sprint', duration: 'Week 1', description: 'Define scope, requirements, and success metrics' },
    { step: '02', title: 'Design Sprint', duration: 'Week 2-3', description: 'UI/UX design and interactive prototyping' },
    { step: '03', title: 'Development', duration: 'Week 4-7', description: 'Agile development with weekly demos' },
    { step: '04', title: 'Launch', duration: 'Week 8', description: 'Testing, deployment, and launch support' },
];

export default function BlitzPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#eab308]/[0.08] to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eab308]/10 border border-[#eab308]/20 rounded-full text-[#eab308] text-[12px] font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Blitz
                    </span>
                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6">
                        <span className="text-white">Launch Your MVP in </span>
                        <span className="bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent">
                            8 Weeks
                        </span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[600px] mx-auto mb-10 leading-relaxed">
                        Stop waiting months to validate your idea. Our Blitz program gets your product to market faster than ever, with proven methodology.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#eab308] to-[#f97316] text-black text-[14px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(234,179,8,0.3)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.5)] hover:-translate-y-0.5"
                    >
                        Start Your Blitz
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl text-center hover:border-[#eab308]/30 transition-all duration-300"
                            >
                                <div className="text-[48px] mb-4">{feature.icon}</div>
                                <h3 className="text-[18px] font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-[#8b8b9e] text-[14px] leading-[1.7]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-32 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#eab308] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            The Process
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            8-Week{' '}
                            <span className="bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent">
                                Timeline
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((phase) => (
                            <div key={phase.step} className="relative">
                                <div className="text-[56px] font-bold bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent mb-4">
                                    {phase.step}
                                </div>
                                <h3 className="text-[18px] font-semibold text-white mb-1">{phase.title}</h3>
                                <p className="text-[#eab308] text-[13px] mb-2">{phase.duration}</p>
                                <p className="text-[#8b8b9e] text-[14px] leading-[1.6]">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Ready to{' '}
                        <span className="bg-gradient-to-r from-[#eab308] to-[#f97316] bg-clip-text text-transparent">
                            launch fast
                        </span>
                        ?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">
                        Let's discuss your idea and see if Blitz is right for you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-1"
                    >
                        Book a Discovery Call
                    </Link>
                </div>
            </section>
        </>
    );
}

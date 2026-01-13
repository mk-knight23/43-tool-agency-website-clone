import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Careers at Bluelupin Technologies',
    description: 'Join our team of innovators building AI-native solutions for the future.',
};

const openPositions = [
    {
        title: 'Sr. QA Engineer',
        location: 'Noida, India',
        type: 'Full-time',
        department: 'Engineering',
    },
    {
        title: 'Full Stack Developer',
        location: 'Noida, India',
        type: 'Full-time',
        department: 'Engineering',
    },
    {
        title: 'AI/ML Engineer',
        location: 'Remote',
        type: 'Full-time',
        department: 'AI/ML',
    },
    {
        title: 'Product Designer',
        location: 'Noida, India',
        type: 'Full-time',
        department: 'Design',
    },
];

const benefits = [
    {
        title: 'Competitive Salary',
        description: 'Industry-leading compensation packages',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Remote Flexibility',
        description: 'Work from anywhere options available',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        title: 'Health Insurance',
        description: 'Comprehensive health coverage for you and family',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: 'Learning Budget',
        description: 'Annual budget for courses and conferences',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: 'Flexible Hours',
        description: 'Work-life balance with flexible scheduling',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Team Events',
        description: 'Regular team outings and celebrations',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
];

export default function CareersPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                        Careers
                    </span>
                    <h1 className="text-[48px] md:text-[64px] font-bold text-white mt-4 mb-6 leading-[1.1]">
                        Build the{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Future
                        </span>
                        {' '}with Us
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto leading-relaxed">
                        Join our team of innovators building AI-native solutions that transform businesses worldwide.
                    </p>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="pb-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            Why Join Us
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            Benefits &{' '}
                            <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                                Perks
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/5 flex items-center justify-center text-[#4facfe] mb-5">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-[17px] font-semibold text-white mb-2">{benefit.title}</h3>
                                <p className="text-[#8b8b9e] text-[14px]">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-32 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            Open Positions
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            Current{' '}
                            <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                                Openings
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-[800px] mx-auto space-y-4">
                        {openPositions.map((position) => (
                            <Link
                                key={position.title}
                                href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block p-6 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-xl hover:border-[#4facfe]/30 transition-all group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-[18px] font-semibold text-white group-hover:text-[#4facfe] transition-colors">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 mt-2">
                                            <span className="flex items-center gap-1.5 text-[#8b8b9e] text-[13px]">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                {position.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-[#8b8b9e] text-[13px]">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {position.type}
                                            </span>
                                            <span className="px-3 py-1 bg-[#4facfe]/10 text-[#4facfe] text-[11px] font-medium rounded-full">
                                                {position.department}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#4facfe] text-[14px] font-medium">
                                        <span>Apply Now</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application */}
            <section className="pt-32 pb-40">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Don't see a{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            perfect fit
                        </span>
                        ?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto mb-10 leading-relaxed">
                        We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-1"
                    >
                        Send General Application
                    </Link>
                </div>
            </section>
        </>
    );
}

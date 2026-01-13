import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Portfolio | Bluelupin Technologies',
    description: 'Discover our innovative solutions that transform ideas into exceptional digital experiences.',
};

const projects = [
    {
        id: 'niwish',
        title: 'Niwish',
        category: 'Ecommerce',
        categoryColor: '#4facfe',
        description: 'NIWISH is a digital platform that\'s reshaping the world of investments. With a core vision of simplifying investment options, NIWISH empowers individuals to invest effortlessly in physical gold and silver.',
        tags: ['E-commerce', 'Investment', 'Digital Gold'],
        image: '/projects/niwish.png',
        bgGradient: 'from-[#1a365d]/40 to-[#0d2137]/30',
    },
    {
        id: 'indiaai',
        title: 'National AI Portal - INDIAai',
        category: 'Nonprofit',
        categoryColor: '#22c55e',
        description: 'AI for India: How the Government of India\'s Platform is Driving Adoption and Innovation in Artificial Intelligence',
        tags: ['AI', 'Government', 'Innovation'],
        image: '/projects/indiaai.png',
        bgGradient: 'from-[#f97316]/20 to-[#0d2137]/30',
    },
    {
        id: 'tri-marine',
        title: 'Tri Marine OPS',
        category: 'Enterprise',
        categoryColor: '#a855f7',
        description: 'Unlocking Insights: How Tri Marine Improved Data Analytics and Reporting with Bluelupin\'s Digital Transformation Strategy',
        tags: ['Enterprise', 'Analytics', 'Data'],
        image: '/projects/trimarine.png',
        bgGradient: 'from-[#4facfe]/20 to-[#0d2137]/30',
    },
    {
        id: 'digi-sakshar',
        title: 'DigiSakshar',
        category: 'EdTech',
        categoryColor: '#4facfe',
        description: 'Digital literacy platform transforming education across India with mobile-first learning experiences.',
        tags: ['EdTech', 'Mobile App', 'Web Platform'],
        image: '/projects/digisakshar.png',
        bgGradient: 'from-[#06b6d4]/20 to-[#0d2137]/30',
    },
    {
        id: 'engagifii',
        title: 'Engagifii',
        category: 'Enterprise',
        categoryColor: '#a855f7',
        description: 'Enterprise platform modernization for civic engagement with AI-powered features.',
        tags: ['Enterprise', 'Modernization', 'SaaS'],
        image: '/projects/engagifii.png',
        bgGradient: 'from-[#ec4899]/20 to-[#0d2137]/30',
    },
    {
        id: 'vodafone-foundation',
        title: 'Vodafone Foundation',
        category: 'Corporate',
        categoryColor: '#ef4444',
        description: 'Digital solutions for social impact initiatives reaching millions of beneficiaries.',
        tags: ['Corporate', 'NGO', 'Impact'],
        image: '/projects/vodafone.png',
        bgGradient: 'from-[#ef4444]/20 to-[#0d2137]/30',
    },
];

export default function PortfolioPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4facfe]/10 border border-[#4facfe]/20 rounded-full text-[#4facfe] text-[12px] font-medium mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Our Portfolio
                    </span>
                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6">
                        <span className="text-white">Our Portfolio as a </span>
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Top Web Development Company
                        </span>
                        <span className="text-white"> in India</span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[700px] mx-auto leading-relaxed">
                        Discover our innovative solutions that transform ideas into exceptional digital experiences
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/portfolio/${project.id}`}
                                className="group block bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#4facfe]/30 transition-all duration-300"
                            >
                                {/* Project Image */}
                                <div className={`h-[180px] bg-gradient-to-br ${project.bgGradient} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mx-auto">
                                            <svg className="w-8 h-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span
                                        className="text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md"
                                        style={{
                                            color: project.categoryColor,
                                            backgroundColor: `${project.categoryColor}15`
                                        }}
                                    >
                                        {project.category}
                                    </span>
                                    <h3 className="text-[18px] font-semibold text-white mt-3 mb-2 group-hover:text-[#4facfe] transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#8b8b9e] text-[13px] leading-[1.7] line-clamp-4 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/[0.04] border border-white/[0.06] rounded-full text-[#8b8b9e] text-[11px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-32 pb-40 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Want to be our next{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            success story
                        </span>
                        ?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto mb-10 leading-relaxed">
                        Let's discuss how we can transform your ideas into exceptional digital experiences.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-1"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}

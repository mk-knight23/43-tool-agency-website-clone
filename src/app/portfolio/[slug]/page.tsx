import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// Project data
const projects: Record<string, {
    title: string;
    category: string;
    categoryColor: string;
    description: string;
    client: string;
    duration: string;
    technologies: string[];
    challenge: string;
    solution: string;
    results: { metric: string; description: string }[];
}> = {
    'indiaai': {
        title: 'National AI Portal - INDIAai',
        category: 'Nonprofit',
        categoryColor: '#22c55e',
        description: 'AI for India: How the Government of India\'s Platform is Driving Adoption and Innovation in Artificial Intelligence',
        client: 'Government of India',
        duration: '12 months',
        technologies: ['React', 'Node.js', 'Python', 'AWS', 'AI/ML'],
        challenge: 'Create a comprehensive national platform to showcase India\'s AI initiatives, foster innovation, and provide resources for the AI ecosystem.',
        solution: 'Built a scalable, multilingual portal with features for AI research papers, startup directories, government schemes, and educational resources.',
        results: [
            { metric: '10M+', description: 'Monthly visitors' },
            { metric: '1000+', description: 'AI startups listed' },
            { metric: '500+', description: 'Research papers' },
        ],
    },
    'niwish': {
        title: 'Niwish',
        category: 'Ecommerce',
        categoryColor: '#4facfe',
        description: 'NIWISH is a digital platform reshaping investments, empowering individuals to invest in physical gold and silver.',
        client: 'Niwish',
        duration: '8 months',
        technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe'],
        challenge: 'Create a trusted platform for digital gold and silver investments with real-time pricing and secure transactions.',
        solution: 'Developed a mobile-first platform with real-time price feeds, secure payment processing, and physical delivery options.',
        results: [
            { metric: '100K+', description: 'Active users' },
            { metric: '₹50Cr+', description: 'Transactions processed' },
            { metric: '4.8★', description: 'App store rating' },
        ],
    },
    'tri-marine': {
        title: 'Tri Marine OPS',
        category: 'Enterprise',
        categoryColor: '#a855f7',
        description: 'Unlocking Insights: How Tri Marine Improved Data Analytics and Reporting with Digital Transformation Strategy',
        client: 'Tri Marine Group',
        duration: '18 months',
        technologies: ['React', 'Python', 'PostgreSQL', 'Power BI', 'Azure'],
        challenge: 'Modernize legacy systems and create unified analytics platform for global seafood supply chain operations.',
        solution: 'Built comprehensive OPS platform with real-time analytics, supply chain tracking, and automated reporting.',
        results: [
            { metric: '40%', description: 'Efficiency increase' },
            { metric: '60%', description: 'Faster reporting' },
            { metric: '5', description: 'Countries integrated' },
        ],
    },
    'digi-sakshar': {
        title: 'DigiSakshar',
        category: 'EdTech',
        categoryColor: '#4facfe',
        description: 'Digital literacy platform transforming education across India with mobile-first learning experiences.',
        client: 'Ministry of Education',
        duration: '10 months',
        technologies: ['React', 'React Native', 'Node.js', 'MongoDB'],
        challenge: 'Create an accessible digital literacy platform that works in low-bandwidth environments for rural India.',
        solution: 'Built a progressive web app with offline capabilities, vernacular support, and gamified learning modules.',
        results: [
            { metric: '5M+', description: 'Students trained' },
            { metric: '15+', description: 'Languages supported' },
            { metric: '95%', description: 'Completion rate' },
        ],
    },
    'engagifii': {
        title: 'Engagifii',
        category: 'Enterprise',
        categoryColor: '#a855f7',
        description: 'Enterprise platform modernization for civic engagement with AI-powered features.',
        client: 'Engagifii Inc.',
        duration: '14 months',
        technologies: ['React', 'Python', 'PostgreSQL', 'AI/ML', 'AWS'],
        challenge: 'Modernize legacy civic engagement platform and add AI-powered features for better constituent interactions.',
        solution: 'Rebuilt the platform with modern architecture, added AI-driven sentiment analysis and automated response suggestions.',
        results: [
            { metric: '200%', description: 'User engagement up' },
            { metric: '50%', description: 'Response time reduced' },
            { metric: '10K+', description: 'Organizations served' },
        ],
    },
    'vodafone-foundation': {
        title: 'Vodafone Foundation',
        category: 'Corporate',
        categoryColor: '#ef4444',
        description: 'Digital solutions for social impact initiatives reaching millions of beneficiaries.',
        client: 'Vodafone Foundation India',
        duration: '24 months',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        challenge: 'Build digital infrastructure for multiple social initiatives including education, women safety, and rural development.',
        solution: 'Created suite of applications supporting various CSR programs with real-time impact tracking and reporting.',
        results: [
            { metric: '10M+', description: 'Beneficiaries reached' },
            { metric: '50+', description: 'Programs supported' },
            { metric: '28', description: 'States covered' },
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(projects).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = projects[resolvedParams.slug];
    if (!project) {
        return { title: 'Project Not Found' };
    }
    return {
        title: `${project.title} | Bluelupin Portfolio`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = projects[resolvedParams.slug];

    if (!project) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4facfe]/[0.05] to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-[#8b8b9e] hover:text-white text-[14px] mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>

                    <span
                        className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-4"
                        style={{
                            color: project.categoryColor,
                            backgroundColor: `${project.categoryColor}15`
                        }}
                    >
                        {project.category}
                    </span>

                    <h1 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-6">
                        {project.title}
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[700px] leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Project Details */}
            <section className="pb-16">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl">
                            <p className="text-[#5c5c70] text-[12px] uppercase tracking-wider mb-2">Client</p>
                            <p className="text-white font-semibold">{project.client}</p>
                        </div>
                        <div className="p-6 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl">
                            <p className="text-[#5c5c70] text-[12px] uppercase tracking-wider mb-2">Duration</p>
                            <p className="text-white font-semibold">{project.duration}</p>
                        </div>
                        <div className="p-6 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl">
                            <p className="text-[#5c5c70] text-[12px] uppercase tracking-wider mb-2">Technologies</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded text-[#8b8b9e] text-[11px]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl">
                            <h3 className="text-[20px] font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </span>
                                The Challenge
                            </h3>
                            <p className="text-[#8b8b9e] text-[15px] leading-[1.8]">{project.challenge}</p>
                        </div>
                        <div className="p-8 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl">
                            <h3 className="text-[20px] font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </span>
                                Our Solution
                            </h3>
                            <p className="text-[#8b8b9e] text-[15px] leading-[1.8]">{project.solution}</p>
                        </div>
                    </div>

                    {/* Key Results */}
                    <div className="mb-16">
                        <h3 className="text-[24px] font-semibold text-white mb-8 text-center">Key Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {project.results.map((result, index) => (
                                <div key={index} className="p-6 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl text-center">
                                    <div className="text-[40px] font-bold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent mb-2">
                                        {result.metric}
                                    </div>
                                    <p className="text-[#8b8b9e] text-[14px]">{result.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Want similar{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            results
                        </span>
                        ?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">
                        Let's discuss how we can help transform your business.
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

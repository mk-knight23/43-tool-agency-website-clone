import type { Metadata } from 'next';
import NewsletterForm from '@/components/NewsletterForm';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | Bluelupin Technologies',
    description: 'Insights on AI, technology, and digital transformation.',
};

const blogPosts = [
    {
        title: 'The Future of AI in Enterprise Software',
        excerpt: 'How artificial intelligence is reshaping the enterprise software landscape and what it means for your business.',
        date: 'Jan 10, 2025',
        category: 'AI',
        categoryColor: '#4facfe',
        readTime: '5 min read',
        slug: 'future-of-ai-in-enterprise',
    },
    {
        title: 'Building Scalable Web Applications in 2025',
        excerpt: 'Best practices and modern technologies for building web applications that scale with your business.',
        date: 'Jan 5, 2025',
        category: 'Development',
        categoryColor: '#a855f7',
        readTime: '8 min read',
        slug: 'building-scalable-web-apps',
    },
    {
        title: 'Why MVP Development Matters for Startups',
        excerpt: 'The importance of launching fast and iterating based on real user feedback to achieve product-market fit.',
        date: 'Dec 28, 2024',
        category: 'Product',
        categoryColor: '#22c55e',
        readTime: '4 min read',
        slug: 'why-mvp-matters',
    },
    {
        title: 'Digital Transformation: A Practical Guide',
        excerpt: 'Step-by-step approach to digitally transforming your organization for the modern era.',
        date: 'Dec 20, 2024',
        category: 'Strategy',
        categoryColor: '#f97316',
        readTime: '10 min read',
        slug: 'digital-transformation-guide',
    },
    {
        title: 'Machine Learning for Business: Getting Started',
        excerpt: 'A practical guide to implementing machine learning solutions in your business operations.',
        date: 'Dec 15, 2024',
        category: 'AI',
        categoryColor: '#4facfe',
        readTime: '6 min read',
        slug: 'ml-for-business',
    },
    {
        title: 'The Rise of Low-Code Platforms',
        excerpt: 'Understanding the low-code revolution and how it can accelerate your development process.',
        date: 'Dec 10, 2024',
        category: 'Development',
        categoryColor: '#a855f7',
        readTime: '5 min read',
        slug: 'low-code-platforms',
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-32 lg:py-40 text-center">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                        Blog
                    </span>
                    <h1 className="text-[48px] md:text-[64px] font-bold text-white mt-4 mb-6 leading-[1.1]">
                        Insights &{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Ideas
                        </span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto leading-relaxed">
                        Thoughts on AI, technology, and building software that matters.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-32">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl hover:border-[#4facfe]/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span
                                        className="px-3 py-1 text-[11px] font-medium rounded-full"
                                        style={{
                                            color: post.categoryColor,
                                            backgroundColor: `${post.categoryColor}15`
                                        }}
                                    >
                                        {post.category}
                                    </span>
                                    <span className="text-[#5c5c70] text-[13px]">{post.date}</span>
                                    <span className="text-[#5c5c70] text-[13px]">{post.readTime}</span>
                                </div>
                                <h3 className="text-[20px] font-semibold text-white group-hover:text-[#4facfe] transition-colors mb-3 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-[#8b8b9e] text-[14px] leading-[1.7] mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-[#4facfe] text-[14px] font-medium">
                                    <span>Read more</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* Newsletter CTA */}
            <section className="pt-32 pb-40 bg-[#0a0a14]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Stay{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Updated
                        </span>
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[450px] mx-auto mb-8 leading-relaxed">
                        Subscribe to our newsletter for the latest insights on AI and technology.
                    </p>
                    <NewsletterForm />
                </div>
            </section>
        </>
    );
}

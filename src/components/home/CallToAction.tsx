'use client';

import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your School's Transportation?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Partner with SafeBus for reliable, secure, and technology-enabled school transportation services. Request a proposal today and let us handle your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-secondary">
              Request a Proposal
            </Link>
            <Link href="/fleet" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-medium py-2 px-6 rounded-full transition-colors duration-300 inline-flex items-center justify-center">
              View Our Fleet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

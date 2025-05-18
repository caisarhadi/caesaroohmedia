import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Welcome to CAESAR OOH MEDIA
        </h1>
        <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-300 max-w-3xl mb-8 font-semibold">
          Indonesia's leading out-of-home advertising media provider, offering innovative and effective outdoor advertising solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/solutions" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-theme focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact-us" 
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-theme focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

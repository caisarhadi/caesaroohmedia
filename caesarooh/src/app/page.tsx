import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-500">
          CAESAR OOH MEDIA
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
          Indonesia's Leading Out-of-Home Advertising Media Provider
        </p>
        <div className="bg-primary-50 dark:bg-primary-900/20 p-6 md:p-8 rounded-lg shadow-lg mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
            Website Modernization In Progress
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We're building a powerful new platform for OOH inventory exploration, 
            insightful industry resources, and innovative advertising solutions. 
            Check back soon for our full experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard 
            title="Interactive Mapping" 
            description="Explore OOH inventory opportunities with our advanced mapping tools."
          />
          <FeatureCard 
            title="Industry Insights" 
            description="Stay informed with the latest trends and data in OOH advertising."
          />
          <FeatureCard 
            title="Inventory Marketplace" 
            description="Browse and inquire about our extensive OOH media inventory."
          />
        </div>
      </main>
      <footer className="mt-16 text-center text-neutral-500 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} CAESAR OOH MEDIA. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
      <h3 className="text-xl font-semibold mb-2 text-secondary-500">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
  );
}

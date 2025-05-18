export default function AboutUsPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About CAESAR OOH MEDIA
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            CAESAR OOH MEDIA is Indonesia's leading out-of-home advertising media provider, 
            dedicated to delivering innovative and effective outdoor advertising solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With a wealth of experience in the OOH industry, our team is committed to helping 
            brands make a lasting impact through strategic placement and creative execution.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            To revolutionize the out-of-home advertising landscape in Indonesia by providing
            cutting-edge media solutions that connect brands with their audiences in meaningful ways.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">
            Our Expertise
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Strategic OOH media planning and buying
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Digital billboard networks across major Indonesian cities
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Transit advertising solutions
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Street furniture and ambient media opportunities
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Innovative special builds and experiential marketing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
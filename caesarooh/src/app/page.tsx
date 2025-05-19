import { Metadata } from 'next';
import Link from 'next/link';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Icon from '../components/common/Icon';
import ResponsiveImage from '../components/common/ResponsiveImage';
import MapWrapper from '../components/maps/MapWrapper';
import { getBackgroundClasses, getTextClasses } from '@/styles/styleUtils';

export const metadata: Metadata = {
  title: 'CAESAR OOH MEDIA - Indonesia\'s Leading Out-of-Home Advertising Solutions',
  description: 'Discover innovative out-of-home advertising solutions across Indonesia. CAESAR OOH MEDIA offers premium billboard locations, digital displays, and targeted advertising campaigns.',
  keywords: 'OOH media, outdoor advertising, billboard advertising, digital displays, Indonesia advertising, CAESAR OOH',
};

export default function HomePage() {
  // Get theme classes
  const bgPrimary = getBackgroundClasses('primary');
  const bgSecondary = getBackgroundClasses('secondary');
  
  const textPrimary = getTextClasses('primary');
  const textSecondary = getTextClasses('secondary');
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-28 lg:py-32 overflow-hidden transition-all duration-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textPrimary} animate-fade-in`}>
              Elevate Your Brand With Strategic OOH Media
            </h1>
            <p className={`text-xl md:text-2xl ${textSecondary} max-w-3xl mx-auto mb-8 font-medium animate-fade-in-delay`}>
              Indonesia&apos;s premier out-of-home advertising solutions, strategically positioned for maximum visibility and impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
              <Link href="/solutions">
                <Button size="large" variant="primary">
                  Explore Solutions
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button size="large" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image Container */}
          <div className="relative h-64 md:h-80 lg:h-96 mt-8 rounded-xl overflow-hidden shadow-xl animate-fade-in-delay-3">
            <ResponsiveImage 
              src="https://placehold.co/1200x600/e2e8f0/1e293b?text=Billboard+Showcase"
              alt="Strategic billboard locations in Indonesia" 
              fill
              priority
              className="object-cover transition-all duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              fallback={
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center transition-all duration-200">
                  <div className="text-center p-8">
                    <div className={`text-4xl font-bold ${textPrimary} mb-2`}>Billboard Showcase</div>
                    <p className={textSecondary}>Premium Advertising Locations</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 bg-primary/10 dark:bg-primary/20 rounded-full w-96 h-96 blur-3xl transition-colors duration-200"></div>
          <div className="absolute -bottom-32 -right-32 bg-secondary/10 dark:bg-secondary/20 rounded-full w-96 h-96 blur-3xl transition-colors duration-200"></div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className={`py-16 md:py-24 ${bgPrimary}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textPrimary}`}>
              Comprehensive OOH Media Solutions
            </h2>
            <p className={`text-lg ${textSecondary}`}>
              From traditional billboards to cutting-edge digital displays, we offer end-to-end advertising solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <Card className="h-full transition-all hover:shadow-md">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="info" className="w-6 h-6 text-primary" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary}`}>
                  Premium Billboard Locations
                </h3>
                <p className={`${textSecondary} mb-4`}>
                  Strategic high-traffic locations throughout Indonesia&apos;s major cities and highways.
                </p>
                <Link href="/inventory" className="text-primary font-medium hover:underline inline-flex items-center">
                  View Inventory
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="h-full transition-all hover:shadow-md">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 bg-secondary/10 dark:bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="success" className="w-6 h-6 text-secondary" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary}`}>
                  Digital Displays Network
                </h3>
                <p className={`${textSecondary} mb-4`}>
                  Modern digital screens in shopping centers, transit hubs, and business districts.
                </p>
                <Link href="/solutions" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="h-full transition-all hover:shadow-md">
              <div className="p-6">
                <div className="w-12 h-12 mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <Icon name="search" className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${textPrimary}`}>
                  Data-Driven Insights
                </h3>
                <p className={`${textSecondary} mb-4`}>
                  Advanced analytics and audience measurements to optimize your campaigns.
                </p>
                <Link href="/insight" className="text-primary font-medium hover:underline inline-flex items-center">
                  Explore Insights
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className={`py-16 md:py-24 ${bgSecondary}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <ResponsiveImage 
                  src="https://placehold.co/800x600/e2e8f0/1e293b?text=Data+Analytics"
                  alt="Data-driven OOH advertising" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  fallback={
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className={`text-2xl font-bold ${textPrimary} mb-2`}>Data-Driven Advertising</div>
                        <p className={textSecondary}>Analytics and Insights</p>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textPrimary}`}>
                Why Choose CAESAR OOH MEDIA?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-lg font-semibold ${textPrimary}`}>
                      Strategic Locations
                    </h3>
                    <p className={`mt-1 ${textSecondary}`}>
                      Premium placements in high-traffic areas with maximum visibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-lg font-semibold ${textPrimary}`}>
                      Audience Targeting
                    </h3>
                    <p className={`mt-1 ${textSecondary}`}>
                      Precise demographic targeting based on location, traffic patterns, and audience data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-lg font-semibold ${textPrimary}`}>
                      End-to-End Service
                    </h3>
                    <p className={`mt-1 ${textSecondary}`}>
                      From design consultation to installation and maintenance, we handle everything.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about-us">
                  <Button variant="outline" size="large">
                    Learn About Our Approach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Showcase */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-all duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Trusted By Leading Brands
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our clients include some of Indonesia&apos;s most recognized companies across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Client logos would go here - placeholders */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-gray-100 dark:bg-gray-800/50 h-24 w-40 rounded-lg flex items-center justify-center transition-all duration-200">
                <div className="text-gray-400 dark:text-gray-500 text-sm font-medium transition-colors duration-200">CLIENT LOGO</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact-us">
              <Button variant="outline" size="large">
                Become Our Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Map/Locations Teaser */}
      <section className="py-16 md:py-24 bg-gray-900 dark:bg-black text-white relative overflow-hidden transition-all duration-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find The Perfect Location
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our interactive map to discover premium OOH locations across Indonesia.
            </p>
            <Link href="/mapping">
              <Button variant="outline" size="large">
                View Interactive Map Page
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-90">
          <MapWrapper 
            className="h-full w-full"
            initialZoom={8}
          />
        </div>
      </section>
      
      {/* Contact/Conversion Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-all duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-200">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Ready To Elevate Your Brand?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Get in touch with our team to discuss your OOH advertising needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button variant="primary" size="large">
                    Contact Our Team
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button variant="outline" size="large">
                    Explore Solutions First
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

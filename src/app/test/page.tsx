import MainLayout from '@/components/layout/MainLayout';

export default function TestPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Tailwind CSS Test Page</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Styling Test</h2>
          <p className="text-gray-600 mb-4">
            This is a test page to verify if Tailwind CSS is working correctly.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Blue Button
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded">
              Yellow Button
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded">
              Outline Button
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4 inline-flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Feature One</h3>
            <p className="text-gray-600">Testing Tailwind utility classes for components.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mb-4 inline-flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Feature Two</h3>
            <p className="text-gray-600">Testing responsive design with Tailwind.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="bg-green-100 text-green-600 p-3 rounded-full mb-4 inline-flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-600">Testing custom color schemes in Tailwind.</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-blue-900 text-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Custom Component Classes Test</h2>
          <p className="mb-4">Testing our custom component classes from globals.css</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-outline-white">Outline White Button</button>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}

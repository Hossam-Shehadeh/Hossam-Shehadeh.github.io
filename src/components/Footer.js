const Footer = () => {
    return (
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Designed and built with React, Next.js, and Framer Motion
          </p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  
function Error() {
  return (
    <div className="flex items-center mt-[300px] justify-center px-2 md:px-0">
      <div>
        <p className="text-sm font-semibold text-red-500">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
      
        </div>
      </div>
    </div>
  )
}

export default Error
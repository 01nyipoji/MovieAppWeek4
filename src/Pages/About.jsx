function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">About Movie App</h1>

        <p className="text-gray-700 mb-4">
          Nyipoji's Movie Gallery is a simple and fun web application that lets you browse
          popular movies, search for your favorites, and save them in your
          personal collection.
        </p>

        <p className="text-gray-700 mb-4">
          You can click on any movie to see detailed information including
          ratings, overview, and poster images. Save movies to your favorites
          list to keep track of what you love.
        </p>

        <p className="text-gray-700">
          This app is built with React and uses the TMDB API for fetching movie
          data. It’s designed to be simple, fast, and enjoyable to use!
        </p>
      </div>
    </div>
  );
}

export default About;

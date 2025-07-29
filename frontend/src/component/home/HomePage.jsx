import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home bg-gradient-to-br from-blue-100 to-gray-100 min-h-screen p-6 text-gray-800">
            {/* Hero Section */}
            <section className="text-center my-12">
              <div className="hero-images flex justify-center gap-4">
                <img src="/assets/images/hh4.webp" alt="Hero 4" className="w-1/4 rounded-lg shadow-md" />
                <img src="/assets/images/hh5.webp" alt="Hero 5" className="w-1/4 rounded-lg shadow-md" />
                <img src="/assets/images/hh6.webp" alt="Hero 6" className="w-1/4 rounded-lg shadow-md" />
                <img src="/assets/images/parrall.jpg" alt="Parrall" className="w-1/4 rounded-lg shadow-md" />
              </div>
            </section>

            {/* Room Search Section */}
            <section className="my-10 bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-800">Search gym Session</h2>
                <RoomSearch handleSearchResult={handleSearchResult} />
            </section>

            {/* Room Results Section */}
            <section className="my-10 max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-800">Available Facilities</h2>
                {roomSearchResults.length > 0 ? (
                    <RoomResult roomSearchResults={roomSearchResults} />
                ) : (
                    <p className="text-center text-gray-600">No results found. Please try searching again.</p>
                )}
            </section>
        </div>
    );
};

export default HomePage;

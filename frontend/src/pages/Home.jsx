import React, { useState } from 'react';

const doctors = [
  { name: 'Dr. A', language: ['English', 'Telugu'], location: 'Hyderabad' },
  { name: 'Dr. B', language: ['English', 'Hindi'], location: 'Delhi' },
  { name: 'Dr. C', language: ['Telugu'], location: 'Chennai' },
  { name: 'Dr. D', language: ['Hindi', 'English'], location: 'Hyderabad' },
];

const Home = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // This function adds/removes filters when checkbox is clicked
  const handleToggle = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value)); // remove
    } else {
      setList([...list, value]); // add
    }
  };

  // Filter doctors based on selected filters
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesLanguage =
      selectedLanguages.length === 0 ||
      doctor.language.some((lang) => selectedLanguages.includes(lang));

    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(doctor.location);

    return matchesLanguage && matchesLocation;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Left Side Filter Box */}
      <div className="w-60 bg-blue-700 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Language Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Languages</h3>
          {['English', 'Telugu', 'Hindi'].map((lang) => (
            <label key={lang} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={selectedLanguages.includes(lang)}
                onChange={() => handleToggle(lang, selectedLanguages, setSelectedLanguages)}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
        </div>

        {/* Location Filter */}
        <div>
          <h3 className="font-semibold mb-2">Locations</h3>
          {['Hyderabad', 'Delhi', 'Chennai'].map((loc) => (
            <label key={loc} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={selectedLocations.includes(loc)}
                onChange={() => handleToggle(loc, selectedLocations, setSelectedLocations)}
                className="mr-2"
              />
              {loc}
            </label>
          ))}
        </div>
      </div>

      {/* Right Side Doctor List */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Matching Doctors</h1>

        {filteredDoctors.length === 0 ? (
          <p className="text-red-600">No matching doctors found.</p>
        ) : (
          <div className="grid gap-4">
            {filteredDoctors.map((doc, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-bold">{doc.name}</h2>
                <p><strong>Languages:</strong> {doc.language.join(', ')}</p>
                <p><strong>Location:</strong> {doc.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

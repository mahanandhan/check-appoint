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

  const toggleSelection = (value, setFunc, currentState) => {
    if (currentState.includes(value)) {
      setFunc(currentState.filter((v) => v !== value));
    } else {
      setFunc([...currentState, value]);
    }
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchLang =
      selectedLanguages.length === 0 ||
      doctor.language.some((lang) => selectedLanguages.includes(lang));

    const matchLoc =
      selectedLocations.length === 0 ||
      selectedLocations.includes(doctor.location);

    return matchLang && matchLoc;
  });

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-xl font-semibold mb-4">Filter by</h2>

        {/* Language Filter */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">Languages</h3>
          {['English', 'Telugu', 'Hindi'].map((lang) => (
            <label key={lang} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                className="accent-white"
                checked={selectedLanguages.includes(lang)}
                onChange={() =>
                  toggleSelection(lang, setSelectedLanguages, selectedLanguages)
                }
              />
              <span>{lang}</span>
            </label>
          ))}
        </div>

        {/* Location Filter */}
        <div>
          <h3 className="font-bold mb-2">Location</h3>
          {['Hyderabad', 'Delhi', 'Chennai'].map((loc) => (
            <label key={loc} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                className="accent-white"
                checked={selectedLocations.includes(loc)}
                onChange={() =>
                  toggleSelection(loc, setSelectedLocations, selectedLocations)
                }
              />
              <span>{loc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Matching Doctors</h1>
        <div className="space-y-4">
          {filteredDoctors.length === 0 ? (
            <p className="text-red-600">No matching doctors found.</p>
          ) : (
            filteredDoctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 shadow hover:shadow-xl transition"
              >
                <h2 className="text-lg font-bold mb-1">{doc.name}</h2>
                <p>Languages: {doc.language.join(', ')}</p>
                <p>Location: {doc.location}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

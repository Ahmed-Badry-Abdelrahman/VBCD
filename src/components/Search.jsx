import { useState } from 'react';
import SDoctorCard from '../components/SDoctorCard';
import Loading from '../components/Loading'
import './search.css';

const DoctorSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [foundDoctors, setFoundDoctors] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setFoundDoctors([]);

        try {
            if (!searchQuery.trim()) {
                throw new Error('Please enter a search query');
            }

            const response = await fetch(`/src/pages/doctorsData.json`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const doctorsData = await response.json();
            const filteredDoctors = doctorsData.filter(doctor => {
                const query = searchQuery.toLowerCase();
                const name = doctor.name.toLowerCase();
                const location = doctor.location.toLowerCase();
                const specialty = doctor.specialty.toLowerCase();
                return name.includes(query) || location.includes(query) || specialty.includes(query);
            });

            if (filteredDoctors.length > 0) {
                setFoundDoctors(filteredDoctors);
            } else {
                setError("No doctors found matching the search query");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='search-container section-margin-bottom'>
            <div className='search-content content'>
                <div className='search-input-container'>
                    <div className='search'>
                        <input
                            className='input-field-search'
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name, location, or specialty"
                        />
                        <button onClick={handleSearch} disabled={loading}>Search</button>
                    </div>
                </div>

                <div className='rustle-container'>
                    <div className='left-side' >
                        <input type='text' placeholder='Filter by location city...'/>
                        <input type='text' placeholder='Filter by language...'/>
                    </div>
                    <div className='right-side'>
                        {error && <p className="error-message">{error}</p>}

                        {loading && <Loading />}


                        {foundDoctors.length > 0 && (
                            <div>
                                {foundDoctors.map((doctor, index) => (
                                    <SDoctorCard key={index} id={doctor.id} image={doctor.image} name={doctor.name} specialty={doctor.specialty} location={doctor.location} />
                                ))}
                            </div>
                        )}


                        {!loading && foundDoctors.length === 0 && !error && (
                            <p className="no-results-message">No results found</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorSearch;

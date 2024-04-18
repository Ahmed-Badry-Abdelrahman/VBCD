import  { useState, useEffect } from 'react';
import './patient-slider.css'; // Import your CSS file for styling the slider
import Slider from 'react-slick'; // Import the slider library (e.g., react-slick)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PatientStoriesSlider() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Fetch patient stories from backend (replace 'your-backend-endpoint' with your actual backend endpoint)
        fetchStories();
    }, []); // Fetch stories on component mount

    const fetchStories = async () => {
        try {
            const response = await fetch('/src/pages/PatientStories.json'); // Replace with actual endpoint
            if (response.ok) {
                const data = await response.json();
                setStories(data.stories); // Assuming the response contains an array of stories
            } else {
                console.error('Failed to fetch patient stories.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Update loading state when fetch completes
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='patient-stories-slider-container section-margin-bottom'>
            <h2>Patient Stories</h2>
            {loading ? (
                <p>Loading...</p>
            ) : stories.length > 0 ? (
                <Slider {...settings}>
                    {stories.map(story => (
                        <div key={story.id} className='story-card'>
                            <div className='c-img'>
                                <img src={story.image} alt={story.title} className='story-image' />
                            </div>
                            <div className='story-details'>
                                <h3>{story.name}</h3>
                                <p>{story.content.substring(0, 100)}...</p> {/* Displaying a portion of content */}
                                <a href={`/story/${story.id}`} className='read-more'>Read More</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>No patient stories found.</p>
            )}
        </div>
    );
}

export default PatientStoriesSlider;

import  { useState, useEffect } from 'react';
import Loading from '../components/Loading'
import './question.css';

function QuestionPage() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/src/pages/question-to-ask.json');
            if (response.ok) {
                const data = await response.json();
                setQuestions(data);
            } else {
                console.error('Failed to fetch questions.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleTitleClick = (index) => {
        // Set the index of the clicked group
        setSelectedGroupIndex(index);
    };

    return (
        <div className='question-container'>
            <div className='content'>
                <div className="group-titles">
                    {questions.map((group, index) => (
                        <a
                            key={index}
                            href={`#${group.title.replace(/\s+/g, '-').toLowerCase()}`}
                            className={selectedGroupIndex === index ? 'selected' : ''}
                            onClick={() => handleTitleClick(index)}
                        >
                            {group.title}
                        </a>
                    ))}
                </div>
                {loading ? (
                    <Loading />
                ) : questions.length > 0 ? (
                    <div>
                        {questions.map((group, index) => (
                            <div key={index} id={group.title.replace(/\s+/g, '-').toLowerCase()} className={`card-group section-margin-bottom ${selectedGroupIndex === index ? 'selected' : ''}`}>
                                <h2>{group.title}</h2>
                                <ul className="L-questions">
                                    {group.questions.map((question, qIndex) => (
                                        <li key={qIndex}>
                                            {question.content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No questions found.</p>
                )}
            </div>
        </div>
    );
}

export default QuestionPage;

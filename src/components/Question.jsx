import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './question.css';


// eslint-disable-next-line react/prop-types
const AnimatedComponent = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust threshold as needed
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};


function QuestionPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGroupIndex, setSelectedGroupIndex] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/src/pages/questions.json');
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
                        <AnimatedComponent>
                            <p className='main-intro'>
                                Anxiety after self-detecting a breast lump or noticing nipple discharge or even during routine monitoring, as well as concerns about future treatments, meetings with doctors and overnight stays in hospitals lead to a lot of bad feelings. Many women feel uncomfortable, afraid, and lack of confidence when they meet with a doctor, and it is known that women who choose to obtain information about examinations, the disease, and the course of treatment, and to take responsibility for themselves and their health, contribute to improving the communication process with the doctor and improving their ability to deal with the disease. And confront him. So it's important to always remember not to hesitate when asking your doctor questions about breast cancer, or when making a decision about the care you will receive.
                            </p>
                        </AnimatedComponent>
                        {questions.map((group, index) => (
                            <div key={index} id={group.title.replace(/\s+/g, '-').toLowerCase()} className={`card-group section-margin-bottom ${selectedGroupIndex === index ? 'selected' : ''}`}>
                                <AnimatedComponent>
                                    <h2>{group.title}</h2>
                                    <p className='sp-intro'>- {group.questions[0].introduction}</p> {/* Display introduction */}
                                    <ul className="L-questions">
                                        {group.questions.slice(1).map((question, qIndex) => (
                                            <li key={qIndex}>
                                                {question.content}
                                            </li>
                                        ))}
                                    </ul>
                                </AnimatedComponent>
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

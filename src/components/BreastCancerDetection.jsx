import  { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import UploadImg from '../assets/images/feather_upload-cloud.png';
import aiIcon from '../assets/images/ai-logo-thin.png';
import './breast-cancer-detection.css';

const BreastCancerDetection = () => {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');
    const [previousResults, setPreviousResults] = useState([]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                setImage(reader.result);
                try {
                    // Make API call to send image data
                    const apiUrl = 'YOUR_API_ENDPOINT_HERE';
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ image: reader.result }),
                    });
                    const data = await response.json();
                    const newResult = data.result;
                    setPreviousResults('swdwwada')
                    setPreviousResults(prevResults => [...prevResults, newResult]);
                    setResult(newResult);
                } catch (error) {
                    console.error('Error:', error);
                    setResult('Error occurred while processing the image');
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImage(null);
    };

    return (
        <div className='BCD-container'>
            <div className='BCD-content content'>
                <div className='upload-img'>
                    {image ? (
                        <div className='remove-img-btn'>
                            <button onClick={removeImage}> Remove Image <FontAwesomeIcon className='trash-icon' icon={faTrashCanArrowUp} /></button>
                        </div>
                    ) : (
                        <div className='upload-text'>
                            <img src={UploadImg} alt="Upload-img-icon" />
                            <h2>Click to select or drag and drop here</h2>
                            <p>JPG, PNG, or PDF, file size no more than 10MB</p>
                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                        </div>
                    )}
                    {image && (
                        <div className='uploaded-img'>
                            <img src={image} alt="Uploaded" />
                        </div>
                    )}
                </div>
                <div className='ai-result'>
                    <h2>The Result</h2>
                    {result !== '' && (
                        <div className='result-card'>
                            <div className='result-content'>
                                <div className='result' >
                                    <p>{result} </p>
                                    {previousResults.map((prevResult, index) => (
                                        <p key={index}>{prevResult}</p>
                                    ))}
                                </div>
                                <img src={aiIcon} alt='Ai-logo' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BreastCancerDetection;

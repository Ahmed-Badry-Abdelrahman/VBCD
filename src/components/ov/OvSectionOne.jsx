import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import AdvertisementImg from "../../assets/images/bcd-advertisement.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Loading from '../../components/Loading'
import './ov-section-one.css';

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


function BreastCancerInfo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch the JSON data
        fetch('/src/pages/breast_cancer_info.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <Loading />;
    }

    const handleClose = () => {
        // Add functionality to close the advertisement
        console.log("Advertisement closed");
    };


    return (
        <div className='info-container'>
            <div className='info-content content'>
                <div className='left-col'>
                    {/* Overview */}
                        <div className='overflow-container' id='Overview'>
                        <AnimatedComponent>
                            <h1>Overview</h1>
                            <div className='what-BCD'>
                                <div className='text-content'>
                                    <h3>What is Breast Cancer?</h3>
                                    <p>{data.overview.what_is_breast_cancer.description}</p>
                                    <p>Affected Groups: {data.overview.what_is_breast_cancer.affected_groups}</p>
                                </div>
                                <div className='image-content'>
                                    <img src={`${data.overview.overview_imaging}`} alt="Breast Cancer" />
                                </div>
                            </div>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <h3>Breast Cancer Types</h3>
                            <h4>Common Types</h4>
                            <ul>
                                {data.overview.breast_cancer_types.common_types.map(type => (
                                    <li key={type.type}>
                                        <strong>{type.type}</strong>: {type.description}
                                    </li>
                                ))}
                            </ul>
                            <h4>Less Common Types</h4>
                            <ul>
                                {data.overview.breast_cancer_types.less_common_types.map(type => (
                                    <li key={type.type}>
                                        <strong>{type.type}</strong>: {type.description}
                                    </li>
                                ))}
                            </ul>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <h3>Breast Cancer Subtypes</h3>
                            <ul>
                                {data.overview.breast_cancer_subtypes.subtypes.map(subtype => (
                                    <li key={subtype.subtype}>
                                        <strong>{subtype.subtype}</strong>: {subtype.description}
                                    </li>
                                ))}
                            </ul>
                            </AnimatedComponent>
                            <AnimatedComponent>
                            <div className='bcd-typ-img'>
                                <img src={`${data.overview.breast_cancer_types_imaging}`} alt="bcd-types" />
                            </div>
                            </AnimatedComponent>
                        </div>

                    {/* Symptoms and Causes */}
                    <div id='Symptoms-and-Causes'>
                    <AnimatedComponent>
                        <h1>Symptoms and Causes</h1>
                        <h3>What are breast cancer symptoms?</h3>
                        <p>{data.symptoms_and_causes.symptoms.description}</p>
                        <ul>
                            {data.symptoms_and_causes.symptoms.list.map(symptom => (
                                <li key={symptom}>{symptom}</li>
                            ))}
                        </ul>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <h3>What causes breast cancer?</h3>
                        <p>{data.symptoms_and_causes.causes.description}</p>
                        <ul>
                            {data.symptoms_and_causes.causes.risk_factors.map(factor => (
                                <li key={factor}>{factor}</li>
                            ))}
                        </ul>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <h3>What are the complications of breast cancer?</h3>
                        <p>{data.symptoms_and_causes.complications.description}</p>
                        </AnimatedComponent>
                    </div>

                    {/* Diagnosis and Tests */}
                    <AnimatedComponent>
                    <div id='Diagnosis-and-Tests'>
                        <h1>Diagnosis and Tests</h1>
                        <p>{data.diagnosis_and_tests.description}</p>
                        <ul>
                            {data.diagnosis_and_tests.tests.map(test => (
                                <li key={test}>{test}</li>
                            ))}
                        </ul>
                    </div>
                    </AnimatedComponent>

                    {/* Stages of Breast Cancer */}
                    <div className='stages-container' id='Stages-of-Breast-Cancer'>
                    <AnimatedComponent>
                        <h1>Stages of Breast Cancer</h1>
                        <p>{data.stages_of_breast_cancer.description}</p>
                        <ul>
                            {data.stages_of_breast_cancer.stages.map(stage => (
                                <li key={stage.stage}>
                                    <strong>{stage.stage}</strong>: {stage.description}
                                </li>
                            ))}
                        </ul>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <div className='bcd-stage-img'>
                            <img src={`${data.stages_of_breast_cancer.stages_imaging}`} alt="bcd-stages" />
                        </div>
                        </AnimatedComponent>
                    </div>

                    {/* Management and Treatment */}
                    <AnimatedComponent>
                    <div id='Management-and-Treatment'>
                        <h1>Management and Treatment</h1>
                        <p>{data.management_and_treatment.description}</p>
                        <ul>
                            {data.management_and_treatment.treatments.map(treatment => (
                                <li key={treatment}>{treatment}</li>
                            ))}
                        </ul>
                        <p>{data.management_and_treatment.side_effects}</p>
                    </div>
                    </AnimatedComponent>
                    {/* Prevention */}
                    <div className='prevention-container' id='Prevention'>
                    <AnimatedComponent>
                        <h1>Prevention</h1>
                        <h3>Can breast cancer be prevented?</h3>
                        <p>{data.prevention.description}</p>
                        <h3>How can I lower my risk?</h3>
                        </AnimatedComponent>
                        <ul>
                        <AnimatedComponent>
                            {data.prevention.risk_reduction_tips.map(tip => (
                                <li key={tip}>{tip}</li>
                            ))}
                            </AnimatedComponent>
                        </ul>
                        <AnimatedComponent>
                        <h3>Additional Prevention Measures</h3>
                        <ul>
                            {data.prevention.additional_prevention_measures.map(measure => (
                                <li key={measure}>{measure}</li>
                            ))}
                        </ul>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <div className='bcd-Prevention-img'>
                            <img src={`${data.prevention.prevention_imaging}`} alt="bcd-Prevention" />
                        </div>
                        </AnimatedComponent>
                    </div>

                    {/* Outlook and Prognosis */}
                    <AnimatedComponent>
                    <div id='Outlook-and-Prognosis'>
                        <h1>Outlook and Prognosis</h1>
                        <p>Survival Rate: {data.outlook_and_prognosis.survival_rate}</p>
                        <p>{data.outlook_and_prognosis.outlook}</p>
                    </div>
                    </AnimatedComponent>
                    {/* Living With */}
                    <div id='Living-With'>
                    <AnimatedComponent>
                        <h1>Living With</h1>
                        <h3>How do I take care of myself?</h3>
                        <p>{data.living_with.description}</p>
                        <ul>
                            {data.living_with.self_care_tips.map(tip => (
                                <li key={tip}>{tip}</li>
                            ))}
                        </ul>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <h3>When to Seek Medical Attention</h3>
                        <p>Provider: {data.living_with.when_to_seek_medical_attention.provider}</p>
                        <p>Emergency Room: {data.living_with.when_to_seek_medical_attention.emergency_room}</p>
                        </AnimatedComponent>
                        <AnimatedComponent>
                        <h3>Questions to Ask Provider</h3>
                        <ul>
                            {data.living_with.questions_to_ask_provider.map(question => (
                                <li key={question}>{question}</li>
                            ))}
                        </ul>
                        </AnimatedComponent>
                    </div>

                    {/* Additional Common Questions */}
                    <AnimatedComponent>
                    <div id='Additional-Common-Questions'>
                        <h1>Additional Common Questions</h1>
                        {data.additional_common_questions.map(qa => (
                            <div key={qa.question}>
                                <h3>{qa.question}</h3>
                                <p>{qa.answer}</p>
                            </div>
                        ))}
                    </div>
                    </AnimatedComponent>
                    <AnimatedComponent>
                    {/* Note from Cleveland Clinic */}
                    <p>{data.note_from_cleveland_clinic}</p>
                    </AnimatedComponent>
                </div>
                <div className='right-col'>
                    <div className="advertisement-container">
                        <button className="advertisement-close-button" onClick={handleClose}><FontAwesomeIcon icon={faSquareXmark} /></button>
                        <h4>Advertisement</h4>
                        {/* Add your advertisement content here */}
                        <img src={AdvertisementImg} alt="Advertisement" />
                        <p>Check out our latest products!</p>
                        <a href="https://example.com" >Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreastCancerInfo;

import { useState, useEffect } from 'react';

import StorySection from '../components/StorySection';
import StoryCard from '../components/StoryCard';
import StoryForm from '../components/StoryForm';

import styles from './StoryList.module.css';

import DoctorStoryPoster1 from './../assets/images/d-story-1.png';
import DoctorStoryPoster2 from './../assets/images/d-story-2.png';
import DoctorStoryPoster3 from './../assets/images/d-story-3.png';
import DoctorStoryPoster4 from './../assets/images/d-story-4.png';
import DoctorStoryPoster5 from './../assets/images/d-story-5.png';
import DoctorStoryPoster6 from './../assets/images/d-story-6.png';
import PatientStoryPoster1 from './../assets/images/p-story-1.png';
import PatientStoryPoster2 from './../assets/images/p-story-2.png';
import PatientStoryPoster3 from './../assets/images/p-story-3.png';
import PatientStoryPoster4 from './../assets/images/p-story-4.png';
import PatientStoryPoster5 from './../assets/images/p-story-5.png';
import PatientStoryPoster6 from './../assets/images/p-story-6.png';

const StoryList = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});

    const [doctorsStories, setDoctorsStories] = useState([]);
    const [patientStories, setPatientStories] = useState([]);

    const sectionsHeadData = {
        doctors: {
            title: 'Doctors Stories',
            desc: 'Read doctor-produced health and medical information written for you to make informed decisions about your health concerns.',
        },
        patients: {
            title: 'Patient Blogs',
            desc: 'Real people sharing real-life experiences about real issues to educate, motivate, and inspire you.',
        },
        form: {
            title: 'Share Your Story',
            desc: 'We are grateful for your willingness to share your story.',
        }
    }

    useEffect(() => {
        // Simulate an API call here to get the doctors stories.
        // Current stories are hard-coded.
        setDoctorsStories([
            {
                id: 'doctor-story-1',
                image: DoctorStoryPoster1,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'doctor-story-2',
                image: DoctorStoryPoster2,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'doctor-story-3',
                image: DoctorStoryPoster3,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'doctor-story-4',
                image: DoctorStoryPoster4,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'doctor-story-5',
                image: DoctorStoryPoster5,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'doctor-story-6',
                image: DoctorStoryPoster6,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
        ]);

        // Simulate an API call here to get the patient stories.
        // Current stories are hard-coded.
        setPatientStories([
            {
                id: 'patient-story-1',
                image: PatientStoryPoster1,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'patient-story-2',
                image: PatientStoryPoster2,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'patient-story-3',
                image: PatientStoryPoster3,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'patient-story-4',
                image: PatientStoryPoster4,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'patient-story-5',
                image: PatientStoryPoster5,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
            {
                id: 'patient-story-6',
                image: PatientStoryPoster6,
                title: 'Navigating Follow-up Care After Treatment for Breast Cancer.',
                summary:
                    'Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating treating Specialized experts are deeply experienced treating rare complex conditions. stethoscope pointing at x-ray. Specialized experts are deeply experienced treating',
            },
        ]);
    }, []);

    return (
        <div className={`${styles['container-fluid']} ${styles['py-5']}`}>
            <StorySection headData={sectionsHeadData.doctors}>
                <div
                    className={`${styles['d-flex']} ${styles['flex-wrap']} ${styles['column-gap-3']} ${styles['row-gap-5']} ${styles['py-4']}`}
                >
                    {doctorsStories.map((story, index) => (
                        <StoryCard
                            key={index}
                            cardData={story}
                        />
                    ))}
                </div>
            </StorySection>

            <StorySection headData={sectionsHeadData.patients}>
                <div
                    className={`${styles['d-flex']} ${styles['flex-wrap']} ${styles['column-gap-3']} ${styles['row-gap-5']} ${styles['py-4']}`}
                >
                    {patientStories.map((story, index) => (
                        <StoryCard
                            key={index}
                            cardData={story}
                        />
                    ))}
                </div>
            </StorySection>

            <StorySection headData={sectionsHeadData.form}>
                <StoryForm />
            </StorySection>
        </div>
    );
};

export default StoryList;

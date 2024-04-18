import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Poster from './../assets/images/breast-cancer-metastatic.jpg';

import styles from './StoryDetails.module.css';

const StoryDetails = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const [storyDetails, setStoryDetails] = useState({});

    useEffect(() => {
        // Simulate an API call here to get the story.
        // Current story is hard-coded.
        setStoryDetails({
            image: Poster,
            title: 'A hopeful story of a breast tumor survivor',
            summary: 'Sian was diagnosed with an advanced breast tumor, but thanks to the support  of a multidisciplinary team and her friends and family standing by her, she is now  doing well and she wants to pass on the message to other newly diagnosed patients  that there is always hope. Sian was diagnosed with advanced breast cancer after finding a strange lump at the site of the lesion. She was afraid and worried about the future for her two daughters. The oncology team at Cleveland Clinic Abu Dhabi, including oncology nurses, physicians radiologists and surgeons, worked closely with Sian to support her in her tumor journey.  They educated her about the nature of the disease, discussed the diagnosis with her and included her in treatment decisions so she felt empowered and in control of her disease. Sian was referred to a comprehensive lifestyle medicine programme, the first of its kind in  the region, which helps patients understand their health and enables them to make  informed lifestyle decisions when it comes to oncology support. Sian had so much positive energy and strength throughout her journey with the tumor. She received chemotherapy and radiotherapy and also underwent surgery. Sian responded well to the treatments and her doctors were very pleased with the outcome, especially since she was diagnosed with advanced disease. Today, with the support of her multidisciplinary team and her friends and family standing by her, Sian is doing well. She is eager to share her tumor survival story with other patients and let them know that there is always hope. She actively raises awareness about breast cancer, campaigns for newly diagnosed patients, and is a member of the Fourth Angel Program at Cleveland Clinic Abu Dhabi. Breast cancer is a curable disease. Doctors urge all women to consult an expert if they notice anything unusual and to get regular checkups'
        });
    }, [])

    return (
        <section className={`${styles['story-details-sec']} ${styles['pb-5']}`}>
            <div className={`${styles['poster-container']} ${styles['mb-5']}`}>
                <img
                    src={storyDetails.image}
                    alt={storyDetails.title}
                />
            </div>

            <div
                className={`${styles['story-details-container']} ${styles['py-5']} ${styles['px-3']} ${styles['px-md-5']}`}
            >
                <Link
                    to='/stories'
                    className={`${styles['back-btn']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['column-gap-2']} ${styles['text-black']} ${styles['fw-bold']} ${styles['ms-auto']} ${styles['pe-3']} ${styles['pe-md-5']}`}
                >
                    <span>Back</span>
                    <svg
                        width='1.6rem'
                        height='1.6rem'
                        viewBox='0 0 448 512'
                    >
                        <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
                    </svg>
                </Link>
            </div>

            <div className={`${styles['px-3']} ${styles['px-md-5']} ${styles['pb-5']}`}>
                <h2
                    className={`${styles['blog-title']} ${styles['text-center']} ${styles['fw-bold']} ${styles['mb-5']}`}
                >
                    {storyDetails.title ? storyDetails.title : ''}
                </h2>

                <div
                    className={`${styles['blog-desc']} ${styles['pe-3']} ${styles['pe-md-5']} ${styles['pt-5']} ${styles['text-center']} ${styles['text-black']} ${styles['lh-lg']}`}
                >
                    {storyDetails.summary ? storyDetails.summary : ''}
                </div>
            </div>
        </section>
    );
};

export default StoryDetails;

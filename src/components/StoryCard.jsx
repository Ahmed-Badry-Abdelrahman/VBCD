import { Link } from 'react-router-dom';

import styles from  './StoryCard.module.css';

/* eslint-disable react/prop-types */
const StoryCard = ({ cardData }) => {
    return (
        <Link
            to={`/story/${cardData.id}`}
            className={`${styles['story-card']} ${styles['card']} ${styles['border-0']} rounded-custom`}
        >
            <img
                src={cardData.image}
                alt='Story Image'
                className={`${styles['card-img-top']}`}
            />

            <div className={`${styles['card-body']} ${styles['p-4']}`}>
                <h3
                    className={`${styles['card-title']} ${styles['text-center']} ${styles['fw-medium']} ${styles['mb-4']}`}
                >
                    {cardData.title}
                </h3>
                <p className={`${styles['card-text']} ${styles['text-justify']} ${styles['mb-5']}`}>
                    {cardData.summary}
                </p>

                <button
                    className={`${styles['btn']} ${styles['d-block']} ${styles['px-5']} ${styles['mx-auto']} ${styles['fs-6']} ${styles['fw-bold']} ${styles['see-more-btn']} rounded-custom`}
                >
                    Read More
                </button>
            </div>
        </Link>
    );
};

export default StoryCard;

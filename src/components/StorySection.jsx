import styles from './StorySection.module.css';

/* eslint-disable react/prop-types */
const StorySection = ({ children, headData }) => {
    return (
        <section
            className={`${styles['story-sec']} ${styles['py-5']} ${styles['px-3']} ${styles['px-md-5']}`}
        >
            <div className={`${styles['sec-head-container']} ${styles['mb-5']}`}>
                <h2
                    className={`${styles['sec-title']} ${styles['text-center']} ${styles['mb-3']} ${styles['fw-bold']}`}
                >
                    {headData.title}
                </h2>
                <p
                    className={`${styles['sec-desc']} ${styles['text-center']} ${styles['mx-auto']}`}
                >
                    {headData.desc}
                </p>
            </div>

            {children}
        </section>
    );
};

export default StorySection;

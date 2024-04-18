import styles from './ResultCard.module.css';

/* eslint-disable react/prop-types */
const ResultCard = ({ cardData }) => {
    return (
        <div
            className={`${styles['result-card']} ${styles['card']} ${styles['w-100']} ${styles['mb-3']} ${styles['border-0']}`}
        >
            <div className={styles['row']}>
                <div
                    className={`${styles['col-md-6']} ${styles['d-flex']} ${styles['flex-column']} ${styles['gap-3']} ${styles['pe-custom']}`}
                >
                    <img
                        src={cardData.image}
                        alt='Card Image'
                        className={styles['img-fluid']}
                    />
                    <span
                        className={`${styles['text-black']} ${styles['fw-medium']} ${styles['fs-6']}`}
                    >
                        {cardData.date}
                    </span>
                </div>

                <div className={`${styles['col-md-6']} ${styles['ps-custom']}`}>
                    <div className={`${styles['card-body']} ${styles['p-0']} ${styles['m-0']}`}>
                        <h3
                            className={`${styles['card-title']} ${styles['my-4']} ${styles['mt-md-0']}`}
                        >
                            {cardData.title}
                        </h3>
                        <p className={`${styles['card-text']} ${styles['align-justify']}`}>
                            {cardData.summary}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;

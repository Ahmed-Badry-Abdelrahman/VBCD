import styles from './StoryForm.module.css';

const StoryForm = () => {
    return (
        <form className={`${styles['story-form']}`}>
            <div className={`${styles['row']} ${styles['mb-3']} ${styles['mb-md-4']}`}>
                <div
                    className={`${styles['col-12']} ${styles['col-md-6']} ${styles['mb-3']} ${styles['mb-md-0']}`}
                >
                    <input
                        className={`${styles['form-control']} ${styles['p-4']} ${styles['border-0']} rounded-custom`}
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        aria-label='Name'
                    />
                </div>
                <div className={`${styles['col-12']} ${styles['col-md-6']}`}>
                    <input
                        className={`${styles['form-control']} ${styles['p-4']} ${styles['border-0']} rounded-custom`}
                        type='text'
                        name='address'
                        placeholder='Your Address'
                        aria-label='Address'
                    />
                </div>
            </div>

            <div className={`${styles['row']} ${styles['mb-3']} ${styles['mb-md-4']}`}>
                <div className={`${styles['col-12']}`}>
                    <input
                        className={`${styles['form-control']} ${styles['p-4']} ${styles['border-0']} rounded-custom`}
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        aria-label='Email'
                    />
                </div>
            </div>

            <div className={`${styles['row']} ${styles['mb-3']} ${styles['mb-md-4']}`}>
                <div className={`${styles['col-12']}`}>
                    <textarea
                        className={`${styles['form-control']} ${styles['p-4']} ${styles['border-0']} rounded-custom`}
                        name='story'
                        placeholder='Enter Your Story...'
                        aria-label='Story'
                    ></textarea>
                </div>
            </div>

            <div className={`${styles['row']}`}>
                <button
                    className={`${styles['btn']} ${styles['d-block']} ${styles['px-5']} ${styles['mx-2']} ${styles['mt-2']} ${styles['fw-medium']} ${styles['submit-btn']} ${styles['col-12']} rounded-custom`}
                    type='submit'
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default StoryForm;

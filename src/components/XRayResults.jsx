import { useState, useEffect } from 'react';

import ResultCard from '../components/ResultCard';

import XRay from './../assets/images/x-ray.png';
import styles from './XrayResults.module.css';

const XRayResults = () => {
    const [results, setResults] = useState([]);

    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };

        return date.toLocaleDateString('en-US', options);
    };

    const getMoreResults = () => {
        results.forEach((result) => {
            setResults((prev) => {
                return [...prev, result]
            });
        });
    }

    useEffect(() => {
        // Simulate an API call here to get the results.
        // Current results are hard-coded.
        setResults([
            {
                image: XRay,
                date: formatDate(new Date()),
                title: 'Result',
                summary: 'Mammograms — a type of X-ray — are the chief way now to check for breast cancer. MBI uses radiation, too, but in a different way. Women are given an intravenous dose of a short-acting tracer that is absorbed more by abnormal cells than healthy ones. Special cameras collect the "glow" these cells give off, and doctors look at the picture to spot tumors.'
            },
            {
                image: XRay,
                date: formatDate(new Date()),
                title: 'Result',
                summary: 'Mammograms — a type of X-ray — are the chief way now to check for breast cancer. MBI uses radiation, too, but in a different way. Women are given an intravenous dose of a short-acting tracer that is absorbed more by abnormal cells than healthy ones. Special cameras collect the "glow" these cells give off, and doctors look at the picture to spot tumors.'
            },
            {
                image: XRay,
                date: formatDate(new Date()),
                title: 'Result',
                summary: 'Mammograms — a type of X-ray — are the chief way now to check for breast cancer. MBI uses radiation, too, but in a different way. Women are given an intravenous dose of a short-acting tracer that is absorbed more by abnormal cells than healthy ones. Special cameras collect the "glow" these cells give off, and doctors look at the picture to spot tumors.'
            },
        ]);
    }, []);

    return (
        <div className={styles['container-fluid']}>
            <section className={`${styles['results-sec']} ${styles['py-5']}`}>
                <div
                    className={`${styles['d-flex']} ${styles['flex-column']} ${styles['gap-5']} ${styles['py-5']}`}
                >
                    {results.map((result, index) => (
                        <ResultCard
                            key={index}
                            cardData={result}
                        />
                    ))}
                </div>

                <button
                    onClick={getMoreResults}
                    className={`${styles['btn']} ${styles['d-block']} ${styles['px-5']} ${styles['my-5']} ${styles['mx-auto']} ${styles['see-more-btn']}`}
                >
                    See More
                </button>
            </section>
        </div>
    );
};

export default XRayResults;

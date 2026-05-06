import React from 'react';
import styles from './Footer.module.css';

export default function Head(props)
{
    React.useEffect(() => {
        document.title = props.title;
        document
            .querySelector('meta[name="description"]')
            .setAttribute('content', props.description);
    }, [props])

    return <></>;
}
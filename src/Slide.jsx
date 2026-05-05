import React from "react";
import styles from "./Slide.module.css";

export default function Slide({slides})
{
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(
        () =>
        {
            const contentWidth = contentRef.current.getBoundingClientRect().width;

            setPosition(-(active * contentWidth));
        }
    ), [active];

    function slidePrevious()
    {
        if (active <= 0) return;

        setActive(active - 1);
    }

    function slideNext()
    {
        if (active >= slides.length - 1) return;

        setActive(active + 1);
    }

    return (
        <section className={styles.container}>
            <div 
                className={styles.content} 
                style={{transform:`translateX(${position}px)`}}
                ref={contentRef}
            >
                {
                    slides.map(
                        (slide) => 
                        {
                            return (
                                <div key={slide.id} className={styles.item}>
                                    {slide.text}
                                </div>
                            );
                        } 
                    )
                }
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrevious}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    );
}
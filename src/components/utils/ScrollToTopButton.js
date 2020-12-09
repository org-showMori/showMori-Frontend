import React from 'react'

function ScrollToTopButton() {

    const btnStyle = {
        position: "fixed"
    }

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    return (
        
            <button 
                style={btnStyle}
                onClick={scrollToTop}
            >
                Top
            </button>
     
    )
}

export default ScrollToTopButton

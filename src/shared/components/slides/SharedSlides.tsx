import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from 'prop-types';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const SharedSlides = (props: any) => {
    const { children } = props;

    return(
        <Carousel responsive={responsive}>
            {children}
        </Carousel>
    )
}

SharedSlides.propTypes = {
    children: PropTypes.node.isRequired
};

export default SharedSlides;
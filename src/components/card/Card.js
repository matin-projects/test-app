import React from 'react';
import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameSimple, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useTheme } from '../../theme/ThemeProvider';

const Card = ({ image, title, description, price, priceHot, priceIced }) => {
  const { darkMode } = useTheme();

  return (
    <MuiCard
      className={`${darkMode ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-primary'}
        border-2 border-primary transform transition-transform duration-300 hover:scale-105
        hover:shadow-2xl w-full overflow-hidden`}
      elevation={3}
      aria-labelledby={`card-title-${title}`}
    >
      {image && (
        <Box className="relative h-60 w-full overflow-hidden">
          <LazyLoadImage
            src={image && (image.startsWith('http') ? image : `${process.env.PUBLIC_URL}${image}`)}
            alt={title}
            effect="blur"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            wrapperClassName="w-full h-full"
          />
        </Box>
      )}
      <CardContent className="p-6">
        <Typography
          variant="h5"
          component="h3"
          className="font-bold mb-2"
          id={`card-title-${title}`}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="mb-4"
          aria-label={`Description for ${title}`}
        >
          {description}
        </Typography>
        <Box className="flex items-center space-x-4 flex-wrap">
          {price && (
            <Typography variant="body1" className="font-bold" aria-label={`Price: ${price}`}>
              {price}
            </Typography>
          )}
          {priceHot && (
            <Box className="flex items-center font-bold">
              <FontAwesomeIcon icon={faFireFlameSimple} className="mr-2" aria-hidden="true" />
              <Typography variant="body1" aria-label={`Hot price: ${priceHot}`}>
                {priceHot}
              </Typography>
            </Box>
          )}
          {priceIced && (
            <Box className="flex items-center font-bold">
              <FontAwesomeIcon icon={faSnowflake} className="mr-2" aria-hidden="true" />
              <Typography variant="body1" aria-label={`Iced price: ${priceIced}`}>
                {priceIced}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

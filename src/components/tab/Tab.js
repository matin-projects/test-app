import { useState } from 'react';
import { Tabs, Tab as MuiTab, Box, useMediaQuery } from '@mui/material';
import Card from '../card/Card';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '../../theme/ThemeProvider';

const TabComponent = ({ categories }) => {
  const muiTheme = useMuiTheme();
  const { darkMode } = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="max-w-full mx-auto">
      {/* Accessible Tab Navigation */}
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Menu categories"
        className="mb-6 overflow-visible"
        orientation={isMobile ? 'horizontal' : 'horizontal'}
        centered={false}
        TabIndicatorProps={{
          style: { display: 'none' },
        }}
        sx={{
          '& .MuiTab-root': {
            borderRadius: '9999px',
            margin: isMobile ? '0.25rem' : '0.5rem',
            transition: 'all 0.3s',
            fontWeight: 600,
            '&.Mui-selected': {
              background: `linear-gradient(to right,
                ${muiTheme.palette.primary.main},
                ${muiTheme.palette.primary.light}
              )`,
              color: 'white',
              transform: 'scale(1.05)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            '&:not(.Mui-selected)': {
              backgroundColor: darkMode ? '#1e1e1e' : 'white',
              color: darkMode ? 'white' : muiTheme.palette.primary.main,
              border: `2px solid ${muiTheme.palette.primary.main}`,
              '&:hover': {
                backgroundColor: muiTheme.palette.primary.main,
                color: 'white',
                borderColor: 'transparent',
              },
            },
          },
        }}
      >
        {Object.keys(categories).map((category) => (
          <MuiTab
            key={category}
            label={category}
            value={category}
            disableRipple
            aria-controls={`tabpanel-${category}`}
          />
        ))}
      </Tabs>

      {/* Tab Content with Role for Accessibility */}
      <Box
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {categories[activeTab].map((item, index) => (
          <Card
            key={`${activeTab}-${index}`}
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
            priceHot={item.priceHot}
            priceIced={item.priceIced}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TabComponent;

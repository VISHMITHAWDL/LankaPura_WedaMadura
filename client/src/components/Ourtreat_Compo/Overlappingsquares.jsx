import D1 from '../../assets/dengue1.jpg';
import D2 from '../../assets/dengue2.jpeg';
import D3 from '../../assets/dengue3.jpeg';
import D4 from '../../assets/dengue4.jpeg';
import D5 from '../../assets/dengue5.jpeg';
import D6 from '../../assets/dengue6.jpg';
import D7 from '../../assets/dengue7.jpeg';
import D8 from '../../assets/dengue8.jpeg';
import D9 from '../../assets/dengue9.jpeg';
import D10 from '../../assets/dengue10.jpeg';
import D11 from '../../assets/dengue11.jpeg';
import D12 from '../../assets/dengue12.jpeg';

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function WovenImageList() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Media queries to adjust responsiveness
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 900px)'); // Tablet breakpoint

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex  items-center justify-center">
      <ImageList
        sx={{
          width: isSmallScreen ? '85%' : isMediumScreen ? '92%' : '95%', // Ensures centering on all screens
          height: isSmallScreen ? 350 : isMediumScreen ? 450 : 500, // Tablet height reduced          
          border: "3px solid black",
          borderRadius: "8px",
          padding: "5px",
          margin: "auto", // Centers on all screens
          maxWidth: isSmallScreen ? "350px" : isMediumScreen ? "550px" : "800px", // Responsive max width
        }}
        variant="woven"
        cols={isSmallScreen ? 2 : isMediumScreen ? 2 : 4} // Reduce tablet column count to 2
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleImageClick(item.img)}>
            <img
              src={item.img}
              alt="Dengue awareness"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal to display the selected image */}
      <Modal open={!!selectedImage} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isSmallScreen ? '90%' : isMediumScreen ? '70%' : '60%', // Tablet modal width reduced
            maxWidth: '700px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: 24,
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Modal>
    </div>
  );
}

const itemData = [
  { img: D1 },
  { img: D2 },
  { img: D3 },
  { img: D4 },
  { img: D5 },
  { img: D6 },
  { img: D7 },
  { img: D8 },
  { img: D9 },
  { img: D10 },
  { img: D11 },
  { img: D12 },
];

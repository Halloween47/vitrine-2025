'use client'

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/animations/dispo.json'; 

const Dispo = () => {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#003912',
      padding: '10px 20px',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#ffffff',
      border: '1px solid #003912',
      borderRadius: '5px',
      marginBottom: '20px'
    }}>
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '60px',
        height: '60px',
        pointerEvents: 'none', 
      }}>
        <Lottie animationData={animationData} loop={true} />
      </div>

      Statut disponible
    </div>
  );
};

export default Dispo;

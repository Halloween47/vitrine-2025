import React from 'react';

const BetaBanner = () => {
  return (
    <div style={{
      backgroundColor: '#ffeeba',
      padding: '10px 20px',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#856404',
      border: '1px solid #ffeeba',
      borderRadius: '5px',
      marginBottom: '20px'
    }}>
      ⚠️ Version BETA : le site est en cours de construction.
      {/* ⚠️ Version <em>BETA</em> : le site est en cours de construction. */}
      {/* ⚠️ Version BETA<br/>le site est en cours de construction. */}
    </div>
  );
};

export default BetaBanner;

import React from 'react';

const Success = (props) => {
  console.log('');
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(36, 48, 55, .7)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '35px',
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '26px',
          maxWidth: '590px',
          width: '100%',
          height: '326px',
          background: 'white',
          borderRadius: '16px',
        }}
      >
        <h3
          style={{
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '32px',
            letterSpacing: '0.0121em',
            textAlign: 'center',
            color: '#364855',
          }}
        >
          ¡Recibimos tu solicitud!
        </h3>
        <p
          style={{
            fontSize: '15px',
            textAlign: 'center',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0.0121em',
            color: '#364855',
            marginTop: '15px !important',
            maxWidth: '256px',
          }}
        >
          Te contactaremos telefónicamente dentro de las próximas 24 horas
          hábiles.
        </p>
        <button
          type="button"
          style={{
            marginTop: '30px',
            width: '136px',
            height: '36.84px',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '15px',
            letterSpacing: '0.0121em',
            textAlign: 'center',
            background: '#01A49A',
            boxShadow: '0 2px 2px rgba(1, 164, 154, 0.25)',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Endendido
        </button>
      </div>
    </div>
  );
};

export default Success;

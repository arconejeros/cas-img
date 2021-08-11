import React from 'react';
import Head from 'next/head';
import '../scss/App.css';
import '../scss/application.scss';
import ExamContext from '../context/exam-context';

function CasImagenolia({ Component, pageProps, procedures }) {
  return (
    <div>
      <Head>
        <title>Clínica Alemana - Imagenología</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ExamContext.Provider>
        <Component {...pageProps} procedures={procedures} />
      </ExamContext.Provider>
    </div>
  );
}

CasImagenolia.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/procedures', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await res.json();
  return { procedures: json };
};

export default CasImagenolia;

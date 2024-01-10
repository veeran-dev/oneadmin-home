import React from 'react';
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Oneadmin.in</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description"
        content="Oneadmin is a free attendance management, fee management, course management Web application." />
      <meta name="keywords"
        content="Oneadmin is a free attendance management, fee management, course management Web application" />
      <meta property="og:title" content="oneadmin|Education Management Simplified" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oneadmin.in" />
      <meta property="og:description"
        content="Oneadmin is a free attendance management, fee management, course management Web application" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:site_name" content="Oneadmin" />
      <meta property="og:url" content="https://oneadmin.in" />
      <meta property="twitter:title" content="Oneadmin|Education Management Simplified" />
      <meta property="twitter:description"
        content="Oneadmin is a free attendance management, fee management, course management Web application" />
      <meta property="twitter:site" content="https://oneadmin.in" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" async />
    </Helmet>
  );
}

export default Head;
import Head from "next/head";

export default props => (
  <Head>
    <title>{props.title ? props.title : "Bootcamp list"}</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0"
    />
  </Head>
);

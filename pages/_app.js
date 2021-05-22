import "../app/styles/index.css";
import Layout from "../app/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   const footerRes = await fetch(`http://localhost:5000/api/carimentor/`);
//   const footerData = await footerRes.json();
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps, footerData };
// };

export default MyApp;

import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("https://carimentor.herokuapp.com/api/carimentor");
  const data = await res.json();

  return {
    props: { mentor: data },
  };
}

const getData = async (category, name) => {};

const Results = ({ mentor }) => {
  const [newData, setNewData] = useState([]);
  const router = useRouter();
  console.log(router.query);
  const data = router.query.category;
  const data2 = router.query.name;

  useEffect(async () => {
    const defaultEndpoint = `https://carimentor.herokuapp.com/api/carimentor/?category=${data}&?name=${data2}`;
    const res = await fetch(defaultEndpoint);
    const data1 = await res.json();
    await setNewData(data1.data);
    console.log(`isidata`, data1.data);
  }, []);

  return (
    <>
      <Head>
        <title>Cari Mentor | Results</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-2 mx-auto my-24 max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-12 text-2xl font-black">The Result of {data} </h1>
        <div className="grid grid-cols-2 gap-8 px-2 md:grid-cols-4">
          {newData.map((result) => {
            const { name, img, desc, category, link } = result;
            const passData = result;
            console.log("isi result ", result);
            return (
              <Link
                href={{
                  pathname: "/results/[slug]",
                  query: { slug: data, payload: JSON.stringify(result) },
                }}
              >
                <a className="pb-6 bg-gray-50 mx-1.25 my-2 border-2 border-gray-300 row-span-3 rounded-2xl">
                  <img
                    src={img}
                    width="auto"
                    height="auto"
                    className="pb-4 rounded-tr-2xl rounded-tl-2xl container-fluid"
                  />
                  <div className="px-5 py-5">
                    <div className="bg-green-500 rounded-2xl ">
                      <h3 className="px-2 font-bold text-white">{category}</h3>
                    </div>
                    <p className="pb-2 text-2xl font-bold">{name}</p>
                    <h3>{desc}</h3>
                  </div>
                </a>
              </Link>
            );
          })}
          {}
        </div>
        {/* <div>
          <h1 className="mt-6 mb-12 text-2xl font-black">More Mentor</h1>
        </div> */}
        {/* <div className="grid grid-cols-2 gap-8 px-2 md:grid-cols-4">
          {mentor.data.map((result) => {
            const { id, name, img, desc, category, link } = result;
            const passData = result;
            console.log("isi result ", result);
            return (
              <Link
                href={{
                  pathname: "/results/[slug]",
                  query: { slug: name, payload: JSON.stringify(result) },
                }}
              >
                <a className="pb-6 bg-gray-50 mx-1.25 my-2 border-2 border-gray-300 row-span-3 rounded-2xl  ">
                  <img
                    src={img}
                    width="auto"
                    height="auto"
                    className="pb-4 rounded-tr-2xl rounded-tl-2xl"
                  />
                  <div className="px-5 py-5">
                    <div className="bg-green-500 rounded-2xl ">
                      <h3 className="px-2 font-bold text-white">{category}</h3>
                    </div>
                    <p className="pb-2 text-2xl font-bold">{name}</p>
                    <h3>{desc}</h3>
                  </div>
                </a>
              </Link>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default Results;

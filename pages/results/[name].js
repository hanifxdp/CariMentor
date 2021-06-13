import Head from "next/head";
import { useRouter } from "next/router";

const Details = ({ result }) => {
  const router = useRouter();
  const data = router.query.payload;
  const newData = JSON.parse(data);
  console.log("isi new data :", newData);
  return (
    <>
      <Head>
        <title>Cari Mentor | Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="grid gap-0 mx-auto my-24 max-w-7xl sm:px-6 lg:px-8 sm:grid-cols-2">
          <img
            src={newData.img}
            width={200}
            height={200}
            className="rounded-3xl"
          />
          <div className="">
            <h1 className="my-2 text-2xl font-bold">{newData.name}</h1>
            <h1 className="my-2">{newData.desc}</h1>
            <h1 className="my-2">{newData.category}</h1>
            <div className="py-5 ">
              <button className="my-2 bg-green-500 rounded-2xl">
                <a href={newData.link} className="mx-10 text-white">
                  Profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

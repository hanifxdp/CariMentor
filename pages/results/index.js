import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { results: data },
  };
};

const Results = ({ results }) => {
  return (
    <div className="px-48 my-24">
      <h1 className="mb-12 text-2xl font-black">The Result</h1>
      {results.map((result) => (
        <Link href={"/results/" + result.id} key={result.id}>
          <a className="block -px-1 py-4 bg-gray-50 mx-1.25 my-2 border-2 border-gray-300">
            <h3>{result.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Results;

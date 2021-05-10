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
      <h1 className="font-black text-2xl mb-12">The Result</h1>
      {results.map((result) => (
        <div key={result.id}>
          <a className="block -px-1 py-4 bg-gray-50 mx-1.25 my-2 border-2 border-gray-300">
            <h3>{result.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;

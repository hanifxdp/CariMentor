export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((result) => {
    return {
      params: { id: result.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { result: data },
  };
};

const Details = ({ result }) => {
  return (
    <div className="px-48 my-24">
      <h1>{result.name}</h1>
      <h1>{result.email}</h1>
      <h1>{result.website}</h1>
      <h1>{result.address.city}</h1>
    </div>
  );
};

export default Details;

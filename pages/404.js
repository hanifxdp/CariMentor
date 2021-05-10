import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1)
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-8xl font-black my-24 font-serif">Oops...</h1>
      <h2 className="text-2xl font-mono text-">
        That page cannot be found. Go back to{" "}
        <p className="text-blue-500 underline">
          <Link href="/">Home</Link>
        </p>
      </h2>
    </div>
  );
};

export default NotFound;

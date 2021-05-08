export default function Example() {
  return (
    <div className="relative bg-white lg:overflow-y-hidden">
      <div className="flex justify-center flex-col items-center">
        <img className=" w-auto" src="/bg.png" alt="Workflow" />
        <div className="flex absolute z-10 justify-items-center flex-col">
          <h1 className="font-mono text-center text-white text-7xl">
            Find your Mentor here!
          </h1>
          <div class="flex my-2 w-auto">
            <input
              type="search"
              class="bg-white h-16 px-5 pr-16 rounded-full text-md focus:outline-none w-full"
              placeholder="Search by name..."
            />
            <div class="absolute right-0 p-5">
              <button className="focus:outline-none">
                <svg
                  class=" h-6 w-6 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                  width="512"
                  height="512"
                >
                  <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837 1.192-1.147 1.23-3.049.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

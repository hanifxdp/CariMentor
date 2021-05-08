import Header from "../app/components/Header";
import HomeContent from "../app/components/HomeContent";

const home = () => {
  return (
    <div className="lg:overflow-y-hidden">
      <Header />
      <HomeContent />
    </div>
  );
};

export default home;

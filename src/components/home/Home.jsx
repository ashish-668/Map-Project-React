import MAP_DATA from "../../utils/helper";
import Icons from "../common/Icons";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-329.75 px-5 mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-5">
            {MAP_DATA.map((item, index) => (
              
                <a key={index} target="_blank" href={item.link} className="">
                  <div className="min-w-76 min-h-40.5 flex flex-col items-center justify-center p-2 border border-white/12 rounded-2xl gap-4 bg-white/3 hover:border-white/50 transition-all duration-300 ease-in">
                    <div>
                      <Icons icon={item.icon} />
                    </div>
                    <div>
                      <h3 className="tracking-[-2px] text-white text-2xl font-normal text-center leading-121">{item.name}</h3>
                    </div>
                  </div>
                </a>
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

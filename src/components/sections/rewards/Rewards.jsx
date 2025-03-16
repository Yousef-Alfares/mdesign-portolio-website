import "./rewards.css";
import CountUp from "../../CountUp";

const Rewards = () => {
  const rewards = [
    {
      count: 80,
      title: "Satisfied clients",
      line: true,
    },
    {
      count: 200,
      title: "Projects completed",
      line: true,
    },
    {
      count: 99,
      title: "Reviews given",
      line: false,
    },
  ];

  return (
    <div className="rewards">
      <div className="container mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-8 flex flex-wrap items-center gap-5 sm:gap-16 lg:gap-4 mt-24 md:mt-36 justify-between">
        {rewards.map((reward, index) => (
          <>
            <div className="flex flex-col gap-3">
              {<CountUp end={reward.count} />}
              <p className="text-xl dark:text-white">{reward.title}</p>
            </div>
            {reward.line && <span className="line hidden md:block"></span>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Rewards;

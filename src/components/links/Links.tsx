import React from "react";

type LigmaList = {
  textLeft: string;
  textRight: string;
  link: string;
}[];

const linksList: LigmaList = [
  {
    textLeft: "Chernarus Map",
    textRight: "izurvive.com",
    link: "https://www.izurvive.com/",
  },
  {
    textLeft: "Livonia Map",
    textRight: "izurvive.com",
    link: "https://www.izurvive.com/livonia/",
  },
  {
    textLeft: "Sakhal Map",
    textRight: "izurvive.com",
    link: "https://www.izurvive.com/sakhal/",
  },
  {
    textLeft: "Wiki",
    textRight: "dayz.fandom.com",
    link: "https://dayz.fandom.com/wiki/DayZ_Wiki",
  },
  {
    textLeft: "Wobo Tools",
    textRight: "wobo.tools",
    link: "https://wobo.tools",
  },
  {
    textLeft: "Weapon Tier List",
    textRight: "wobo.tools",
    link: "https://wobo.tools/dayz-weapon-rank-tool?score=Overall_Score",
  },
  {
    textLeft: "Reddit",
    textRight: "reddit.com",
    link: "https://www.reddit.com/r/dayz/",
  },
];

export const Links: React.FC = () => {
  return (
    <>
      <div className="p-4 pb-16">
        <h3 className="text-center text-4xl mb-4">Ligma</h3>
        <p className="text-center text-xl">Links Info Guides Maps Assets</p>
      </div>
      <div className="w-full max-w-[800px] mx-auto">
        <div className="mb-4">
          {linksList.map((item) => (
            <div
              key={item.textLeft}
              className="mb-4 flex items-center justify-between text-xl"
            >
              <a
                className="text-cyan-500 hover:text-indigo-500"
                href={item.link}
                target="blank"
              >
                {item.textLeft}
              </a>
              <span>{item.textRight}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

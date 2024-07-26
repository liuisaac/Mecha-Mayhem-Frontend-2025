import { React } from "react";
const Sidebar = () => {
    const filters = {
        BROADCAST: [
            {
                title: "VURC",
                filter: "U",
            },
            {
                title: "V5RC (HS)",
                filter: "HS",
            },
            {
                title: "V5RC (MS)",
                filter: "MS",
            },
        ],
        DIVISION: [
            {
                title: "ROCKIES",
                filter: "ROCKIES",
            },
            {
                title: "PRAIRIES",
                filter: "PRAIRIES",
            },
        ],
        "MEDIA TYPE": [
            {
                title: "FULL STREAM",
                filter: "FULL",
            },
            {
                title: "CLIPPED MATCHES",
                filter: "CLIP",
            },
        ],
        FILTER: [
            {
                title: "UPCOMING",
                filter: "UPCOMING",
            },
            {
                title: "LIVE",
                filter: "LIVE",
            },
            {
                title: "COMPLETED",
                filter: "COMPLETED",
            },
        ],
        SEASON: [
            {
                title: "2024 OVER UNDER",
                filter: "2024",
            },
            {
                title: "2023 SPIN UP",
                filter: "2024",
            },
        ],
    };
    return (
        <div className="w-[15vw] h-full overflow-x-visible">
            <div
                className={`w-full sticky top-0 left-0 h-screen overflow-y-scroll bg-[#141414] 
    [&::-webkit-scrollbar]:bg-[#191724] [&::-webkit-scrollbar-thumb]:bg-[#2e2e3a]  [&::-webkit-scrollbar-thumb]:rounded-xl
      flex flex-col items-center transition-all ease-in-out duration-200 z-10`}
            >
                <div
                    className={`flex flex-col mt-12 duration-100 transition-opacity ease-in-out font-bold tracking-wide w-full h-full text-dimWhite`}
                >
                    <div className="w-full min-h-[55px] py-2 flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800">
                        <span className="ml-8">FILTERS</span>
                    </div>

                    {/* {filters.map((division, index) => (
                        <div
                            key={index}
                            className={`${
                                tab.isBorder
                                    ? " min-h-[34px]"
                                    : " min-h-[65px] ml-2"
                            }`}
                            onClick={() =>
                                add(tab.filter_key, tab.default_state)
                            }
                        >
                            {tab.isBorder ? (
                                <Border text={tab.title} />
                            ) : (
                                <div
                                    onClick={() =>
                                        (tab.default_state = !tab.default_state)
                                    }
                                >
                                    <FilterTab
                                        icon={tab.icon}
                                        title={tab.title}
                                        subtitle={tab.subtitle}
                                        shift={tab.shift}
                                        filterkey={tab.filter_key}
                                    />
                                </div>
                            )}
                        </div>
                    ))} */}
                    <div className="w-full min-h-[65px] flex flex-row justify-start items-end border-t-[1px] border-r-[1px] border-gray-800"></div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

"use client"
import AllCards from '../../components/filtered-search-bar/AllCards';
import Filter from '../../components/filtered-search-bar/Filter';
import React from 'react'
import { useState } from 'react';
function FilterResource({ resource }) {
    const [filtered, setFiltered] = useState(resource);
    const [activeOption, setActiveOption] = useState("all");

    const [q, setQ] = useState("");
    const [trigger, setTrigger] = useState(true);
    const [searchParam] = useState(["name"]);

    function search(items) {
        return items?.filter((item) => {
            if (item.id > 7) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
                        -1
                    );
                });
            }
        });
    }

    return (
        <>
            <div className="relative flex flex-col items-center z-20 sm:items-start sm:flex-row sm:justify-around mt-[4vh] ">
                <div className="sm:text-start text-center sm:mr-20 sm:max-w-[40vw] mt-[7vh] sm:mt-[10vh] ">
                    <h1 className="mb-4 text-5xl sm:text-3xl  text-white  dark:text-white  md:text-6xl xl:text-7xl 2xl:text-8xl font-lato font-[900]">
                        DevOps
                        <br />
                        <span className="bg-gradient-to-r from-[#CC03FE] to-[#E34B2E] bg-clip-text text-transparent font-lato font-[900] text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl ">
                            Resources
                        </span>
                    </h1>
                </div>
            </div>
            <div className="m-auto">
                <div className='max-w-xl mx-auto'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            value={q}
                            placeholder="Search for resources..."
                            onChange={(e) => {
                                setQ(e.target.value);
                                setTrigger(true);
                            }}
                            onKeyDown={e => {
                                if (e.key === "Escape") {
                                    setQ("")
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    {trigger &&
                        search(filtered)?.map((x) => {
                            return (
                                q && (
                                    <div
                                        onClick={() => {
                                            setQ(x.name);
                                            setTrigger(false);
                                        }}
                                        className="bg-white p-1 border border-grey-600 min-h-10 md:h-8 w-full md:w-10/11 md:max-w-xl"
                                    >
                                        {x.name}
                                    </div>
                                )
                            );
                        })}
                </div>
                <div className="flex justify-center mt-10">
                    <Filter
                        resources={resource}
                        setFiltered={setFiltered}
                        activeOption={activeOption}
                        setActiveOption={setActiveOption}
                    />
                </div>

                <div>
                    <AllCards data={filtered} search={search} />
                </div>
            </div>
        </>
    )
}

export default FilterResource
import { useState } from "react";
import { useFetchSeasons } from "../hooks/queries";
import classNames from "classnames";
import Loader from "./Loader";

export default function Seasons({season, onChange}) {
  const seasons = useFetchSeasons();

  return (
    <div className="container mt-[85px] relative">   
      <h2 className="text-4xl font-medium mb-8">Seasons</h2>
      
      <div className="flex gap-8 overflow-y-auto py-10 -my-10 px-10 -mx-10 whitespace-nowrap">
        {seasons.data &&
          seasons.data.map((_season) => 
          <div 
            key={_season} 
            className={
              classNames(
                "h-[61px] px-[28px] flex cursor-pointer items-center justify-center rounded-lg bg-white text-[21px] font-medium",
                _season === season ? "outline outline-3 outline-[#FF0100] shadow-lg shadow-[rgba(255,1,0,0.20)]" : ''
              )
            }
            onClick={()=> onChange(_season)}
          >{_season}</div>)
        }
      </div>

      {
        !seasons.data &&
        <div>
          No seasons can be fetched
        </div>
      }

      <Loader show={seasons.isLoading} />
    </div>
  );
}
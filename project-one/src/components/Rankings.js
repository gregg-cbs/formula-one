import { useState } from "react";
import TeamsTable from "./tables/TeamsTable";
import DriversTable from "./tables/DriversTable";

export default function Rankings({season}) {
  const [isTeams, setIsTeams] = useState(true);

  return (
    <div className="container mt-[80px]">

      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-medium">Rankings - <span>{isTeams ? "Teams" : "Drivers"}</span></h2>

        <div className="flex items-center justify-center gap-[10px] ml-auto">
          <span className="text-lg">Teams</span>
          <label className="relative cursor-pointer" >
            <input type="checkbox" value="" className="sr-only peer" checked={isTeams} onChange={(e)=> setIsTeams(e.target.checked)}/>
            <div className="w-[48px] h-[23px] after:h-[11px] after:w-[11px] after:absolute after:top-[6px] after:left-[6px] peer-checked:after:left-[calc(100%-18px)] border border-3 border-[#FF0100] rounded-full peer  peer-checked:after:border-white after:content-['']  after:bg-[#FF0100] after:rounded-full after:transition-all"></div>
          </label>
        </div>
      </div>
      
      <div className="flex gap-8">
        {
          isTeams &&
          <TeamsTable season={season} />
        }
        {
          !isTeams &&
          <DriversTable season={season} />
        }
      </div>
    </div>
  );
}

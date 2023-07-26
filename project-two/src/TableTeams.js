import Table from "./Table";
import { useFetchTeams } from "./data/queries";

export default function TableTeams({season}) {
  const teams = useFetchTeams(season)

  return (
    <div className="relative">
      <Table 
        loading={teams.isFetching}
        columns={[
          {
            name: "Position",
            selector: (row)=> row.position,
            sortable: true,
          },
          {
            name: "Team",
            selector: (row)=> row.team.name,
            sortable: true,
          },
          {
            name: "Logo",
            selector: (row)=> <img src={row.team.logo} height={67} alt={row.team.name} />,
          },
          {
            name: "Points",
            selector: (row)=> row.points,
            sortable: true,
          }
        ]}
        data={teams.data}
      />
    </div>
  )
}
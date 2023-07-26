import { useFetchTeams } from "../../hooks/queries";
import Loader from "../Loader";
import Table from "./Table";

const columns = [
  {
    id: 1,
    name: 'Position',
    selector: row => row.position,
    sortable: true,
  },
  {
    name: 'Team',
    selector: row => row.team.name,
    sortable: true,
  },
  {
    name: 'Logo',
    selector: row => <img src={row.team.logo} alt={row.team.name} width={60} />,
  },
  {
    name: 'Points',
    selector: row => row.points,
    sortable: true,
  },
];

export default function TeamsTable({season}) {
  const teams = useFetchTeams(season);

  return (
    <div className="relative w-full">
      <Table
        columns={columns}
        data={teams.data}
        defaultSortFieldId={1}
        defaultSortAsc={true}
      />

      <Loader show={teams.isFetching} />
    </div>
  );
}



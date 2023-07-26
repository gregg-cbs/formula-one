import { useFetchDrivers } from "../../hooks/queries";
import Loader from "../Loader";
import Table from "./Table";

const columns = [
  {
    id: 1,
    name: <span>Position</span>,
    selector: row => row.position,
    sortable: true,
  },
  {
    name: 'Driver',
    selector: row => row.driver.name,
    sortable: true,
  },
  {
    name: 'Photo',
    selector: row => <img src={row.driver.image} alt={row.driver.name} width={60} />,
  },
  {
    name: 'Points',
    selector: row => row.points,
    sortable: true,
  },
];

export default function DriversTable({season}) {
  const drivers = useFetchDrivers(season);

  return (
    <div className="relative w-full">
      <Table
        columns={columns}
        data={drivers.data}
        defaultSortFieldId={1}
        defaultSortAsc={true}
      />

      <Loader show={drivers.isFetching} />
    </div>
  );
}

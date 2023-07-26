import Table from "./Table";
import { useFetchDrivers } from "./data/queries";

export default function TableDrivers({season}) {
  const drivers = useFetchDrivers(season)

  return (
    <Table 
      loading={drivers.isFetching}
      columns={[
        {
          id: 'position',
          name: "Position",
          selector: (row)=> row.position,
          sortable: true,
        },
        {
          name: "Driver",
          selector: (row)=> row.driver.name,
          sortable: true,
        },
        {
          name: "Photo",
          selector: (row)=> <img src={row.driver.image} width={67} alt={row.driver.name} />,
        },
        {
          name: "Points",
          selector: (row)=> row.points,
          sortable: true,
        }
      ]}
      data={drivers.data}
      defaultSortFieldId={'position'}
      defaultSortAsc={true}
    />
  )
}
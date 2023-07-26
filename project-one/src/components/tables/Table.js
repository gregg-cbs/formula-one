// https://react-data-table-component.netlify.app/?path=/docs/api-props--page
import DataTable from 'react-data-table-component';

export default function Table(props) {
  return (
    <DataTable
      className="rounded-[10px] overflow-hidden"
      customStyles={{
        rows: {
          style: {
              minHeight: '67px',
          },
        },
      }}
      {...props}
    />
  );
}

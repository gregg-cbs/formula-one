// https://react-data-table-component.netlify.app/?path=/docs/api-props--page
import DataTable, { TableProps } from 'react-data-table-component';
import Loader from './Loader';

export default function Table(props) {
  return (
    <div className='table-wrapper'>
      <DataTable 
        className='table'
        customStyles={{
          rows: {
            style: {
                minHeight: '67px',
            },
          },
        }}
        {...props}
      />
      <Loader show={props.loading} />
    </div>
  )
}

function TableFilter(){
  return (
    <div className='table-filter'>
      <div className='table-filter-inner'>
        <label className='table-filter-item'>
          <span>Jamie</span>
          <span><input type="checkbox" /></span>
        </label>
        <label className='table-filter-item'>
          <span>Natalie</span>
          <span><input type="checkbox" /></span>
        </label>
      </div>
      <button>Clear all</button>
    </div>
  )
}
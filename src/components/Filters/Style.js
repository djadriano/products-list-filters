import { Fragment } from 'react';
import useFilters from '@/hooks/useFilters';

const Style = ({ items }) => {
  const { toggleCheckFilter } = useFilters('style');

  return (
    <>
      <label htmlFor="style-filter">Styles:</label>
      {items.map(item => (
        <Fragment key={item}>
          <input type="checkbox" name="checkbox" id="style-filters" value={item} onChange={toggleCheckFilter} /> {item}
        </Fragment>
      ))}
    </>
  )
}

export default Style;
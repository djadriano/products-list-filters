import { Fragment } from 'react';
import useFilters from '@/hooks/useFilters';

const Colors = ({ items }) => {
  const { toggleCheckFilter } = useFilters('colors');

  return (
    <>
      <label>Color:</label>
      {items.map(item => (
        <Fragment key={item}>
          <input type="checkbox" name="checkbox" id="colors-filters" value={item} onChange={toggleCheckFilter} /> {item}
        </Fragment>
      ))}
    </>
  )
}

export default Colors;
import useFilters from '@/hooks/useFilters';

const Price= () => {
  const { inputMinValue, inputMaxValue, checkPrice } = useFilters('price');

  return (
    <>
      <label>Price: </label>
      <input type="number" ref={inputMinValue} name="tentacles" min="0" max="1000" defaultValue="0" /> - <input type="number" ref={inputMaxValue} name="tentacles" min="0" max="1000" defaultValue="0" /> <button type="button" onClick={checkPrice}>Filter by price</button>
    </>
  )
}

export default Price
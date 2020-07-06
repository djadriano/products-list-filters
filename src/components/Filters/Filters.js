import { Colors, Style, Price } from '@/components/Filters/Index';

const Filters = ({ colors, style }) => {
  return (
    <form className="filters">
      <fieldset>
        <ul>
          {colors && (
            <li className="fs fs--small">
              <Colors items={colors} />
            </li>
          )}
          {style && (
            <li className="fs fs--small">
              <Style items={style} />
            </li>
          )}
          <li className="fs fs--small">
            <Price />
          </li>
        </ul>
      </fieldset>
    </form>
  )
};

export default Filters;
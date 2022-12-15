import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { allFilterSelector } from '../store/filtres/filterSelector';
import { clerarFilter, removeFilter } from '../store/filtres/filtersActions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const selectFilter = useSelector(allFilterSelector);
  if (selectFilter.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {selectFilter.map((item) => (
            <Badge
              key={item}
              onClear={() => dispatch(removeFilter(item))}
              variant="clearable"
            >
              {item}
            </Badge>
          ))}
        </Stack>
        <button className="link" onClick={() => dispatch(clerarFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };

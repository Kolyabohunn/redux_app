import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {
  allPositionsSelect,
  filterPositionSelect,
} from '../store/positions/positionsSelects';
import { addFilter } from 'store/filtres/filtersActions';
import { allFilterSelector } from '../store/filtres/filterSelector';

const JobList = () => {
  const dispatch = useDispatch();
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  const filterSelector = useSelector(allFilterSelector);
  const positionData = useSelector((state) =>
    filterPositionSelect(state, filterSelector)
  );
  return (
    <div className="job-list">
      {positionData.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };

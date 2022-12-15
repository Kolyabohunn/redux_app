export const allPositionsSelect = (state) => state.position;
export const filterPositionSelect = (state, statefilter = []) => {
  if (statefilter.length === 0) return state.position;
  return state.position.filter((item) => {
    const filterItem = [].concat(
      item.role,
      item.level,
      ...item.languages,
      ...item.tools
    );
    return statefilter.every((it) => filterItem.includes(it));
  });
};

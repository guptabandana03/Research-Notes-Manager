const FilterBar = ({ tags, selectedTag, onSelectTag }) => {
  return (
    <div className="filter-bar">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={tag === selectedTag ? 'filter-button active' : 'filter-button'}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

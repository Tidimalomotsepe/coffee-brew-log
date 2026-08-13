function BrewList({
  brews,
  filteredBrews,
  methods,
  filterMethod,
  setFilterMethod,
  handleEdit,
  getRatingClass,
}) {
  return (
    <>
      {/* FILTER */}

      <div className="filter-container">
        <select
          value={filterMethod}
          onChange={(e) =>
            setFilterMethod(e.target.value)
          }
        >
          <option value="All">
            Filter by method
          </option>

          {methods.map((name) => (
            <option
              key={name}
              value={name}
            >
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* BREW LIST */}

      <div className="brew-list">
        {filteredBrews.length === 0 ? (
          <div className="empty-state">
            <p>
              No brews recorded yet.
            </p>
          </div>
        ) : (
          filteredBrews.map((brew) => (
            <div
              className="brew-item"
              key={brew.id}
            >
              {/* RATING */}

              <div
                className={`rating-circle ${getRatingClass(
                  brew.rating
                )}`}
              >
                {brew.rating}
              </div>

              {/* INFO */}

              <div className="brew-info">
                <h2>
                  {brew.coffeeName ||
                    brew.beans}
                </h2>

                <div className="brew-details">
                  <span className="brew-method">
                    {brew.method}
                  </span>

                  <span className="brew-detail">
                    🫘{" "}
                    {brew.coffeeGrams ?? 0}
                    g
                  </span>

                  <span className="brew-detail">
                    💧{" "}
                    {brew.waterGrams ?? 0}
                    g
                  </span>
                </div>
              </div>

              {/* EDIT */}

              <button
                type="button"
                className="edit-button"
                title="Edit brew"
                onClick={() =>
                  handleEdit(brew)
                }
              >
                ✎
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default BrewList;
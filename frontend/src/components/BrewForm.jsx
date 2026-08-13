function BrewForm({
  editingId,
  coffeeName,
  setCoffeeName,
  method,
  setMethod,
  dose,
  setDose,
  water,
  setWater,
  rating,
  setRating,
  tastingNotes,
  setTastingNotes,
  handleSubmit,
  handleDelete,
  handleClose,
}) {
  return (
    <div className="form-container">

      <div className="form-header">

        <h2>
          {editingId !== null
            ? "Edit a brew"
            : "Add a brew"}
        </h2>

        <button
          type="button"
          className="close-form-button"
          onClick={handleClose}
        >
          ×
        </button>

      </div>

      <form
        className="brew-form"
        onSubmit={handleSubmit}
      >

        {/* BEANS */}

        <div className="form-group">

          <label>
            Beans
          </label>

          <input
            type="text"
            value={coffeeName}
            onChange={(e) =>
              setCoffeeName(
                e.target.value
              )
            }
            placeholder="e.g. Zimbabwean Highlands"
            required
          />

        </div>

        {/* METHOD */}

        <div className="form-group">

          <label>
            Method
          </label>

          <select
            value={method}
            onChange={(e) =>
              setMethod(
                e.target.value
              )
            }
            required
          >

            <option value="">
              Select a method
            </option>

            <option value="Aeropress">
              Aeropress
            </option>

            <option value="Pour Over">
              Pour Over
            </option>

            <option value="V60">
              V60
            </option>

            <option value="Drip coffee">
              Drip coffee
            </option>

          </select>

        </div>

        {/* COFFEE + WATER */}

        <div className="form-row">

          <div className="form-group">

            <label>
              Coffee grams
            </label>

            <input
              type="number"
              min="1"
              step="1"
              value={dose}
              onChange={(e) =>
                setDose(
                  e.target.value
                )
              }
              required
            />

          </div>

          <div className="form-group">

            <label>
              Water grams
            </label>

            <input
              type="number"
              min="1"
              step="1"
              value={water}
              onChange={(e) =>
                setWater(
                  e.target.value
                )
              }
              required
            />

          </div>

        </div>

        {/* RATING */}

        <div className="form-group">

          <label>
            Rating (out of 5)
          </label>

          <input
            type="number"
            min="1"
            max="5"
            step="1"
            value={rating}
            onChange={(e) =>
              setRating(
                e.target.value
              )
            }
            required
          />

        </div>

        {/* TASTING NOTES */}

        <div className="form-group">

          <label>
            Tasting notes
          </label>

          <input
            type="text"
            value={tastingNotes}
            onChange={(e) =>
              setTastingNotes(
                e.target.value
              )
            }
            placeholder="Heavy body, soft finish, nutty"
            required
          />

        </div>

        {/* BUTTONS */}

        <div className="form-buttons">

          {editingId !== null && (
            <button
              type="button"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}

          <button
            type="submit"
            className="save-button"
          >
            Save
          </button>

        </div>

      </form>

    </div>
  );
}

export default BrewForm;
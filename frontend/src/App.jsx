import { useEffect, useState } from "react";
import "./App.css";
import BrewForm from "./components/BrewForm";

function App() {
  const [brews, setBrews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [filterMethod, setFilterMethod] = useState("All");

  const [coffeeName, setCoffeeName] = useState("");
  const [method, setMethod] = useState("");
  const [dose, setDose] = useState("");
  const [water, setWater] = useState("");
  const [rating, setRating] = useState("");
  const [tastingNotes, setTastingNotes] = useState("");

  const API_URL = "https://coffee-brew-log-mxrn.onrender.com/api/brews";

  // ============================
  // LOAD BREWS
  // ============================

  const loadBrews = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to load brews");
      }

      const data = await response.json();

      console.log("BREWS FROM DATABASE:", data);

      setBrews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("LOAD ERROR:", error);
    }
  };

  useEffect(() => {
    loadBrews();
  }, []);

  // ============================
  // RESET FORM
  // ============================

  const resetForm = () => {
    setCoffeeName("");
    setMethod("");
    setDose("");
    setWater("");
    setRating("");
    setTastingNotes("");
    setEditingId(null);
  };

  // ============================
  // ADD BREW
  // ============================

  const handleAdd = () => {
    resetForm();
    setShowForm(true);
  };

  // ============================
  // EDIT BREW
  // ============================

  const handleEdit = (brew) => {
    console.log("EDITING BREW:", brew);

    setEditingId(brew.id);

    setCoffeeName(
      brew.coffeeName ||
        brew.beans ||
        ""
    );

    setMethod(
      brew.method ||
        ""
    );

    setDose(
      brew.coffeeGrams !== null &&
      brew.coffeeGrams !== undefined
        ? String(brew.coffeeGrams)
        : ""
    );

    setWater(
      brew.waterGrams !== null &&
      brew.waterGrams !== undefined
        ? String(brew.waterGrams)
        : ""
    );

    setRating(
      brew.rating !== null &&
      brew.rating !== undefined
        ? String(brew.rating)
        : ""
    );

    setTastingNotes(
      brew.tastingNotes ||
        brew.notes ||
        ""
    );

    setShowForm(true);
  };

  // ============================
  // CLOSE FORM
  // ============================

  const handleClose = () => {
    setShowForm(false);
    resetForm();
  };

  // ============================
  // SAVE / UPDATE BREW
  // ============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ----------------------------
    // VALIDATION
    // ----------------------------

    if (!coffeeName.trim()) {
      alert("Please enter the beans.");
      return;
    }

    if (!method) {
      alert("Please select a method.");
      return;
    }

    if (!dose) {
      alert("Please enter coffee grams.");
      return;
    }

    if (!water) {
      alert("Please enter water grams.");
      return;
    }

    const ratingNumber = Number(rating);

    if (
      !Number.isInteger(ratingNumber) ||
      ratingNumber < 1 ||
      ratingNumber > 5
    ) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    if (!tastingNotes.trim()) {
      alert("Please enter tasting notes.");
      return;
    }

    const coffeeAmount = Number(dose);
    const waterAmount = Number(water);

    if (
      !Number.isInteger(coffeeAmount) ||
      coffeeAmount <= 0
    ) {
      alert("Coffee grams must be a positive number.");
      return;
    }

    if (
      !Number.isInteger(waterAmount) ||
      waterAmount <= 0
    ) {
      alert("Water grams must be a positive number.");
      return;
    }

    // ----------------------------
    // DATA TO SEND
    // ----------------------------

    const brewData = {
      coffeeName: coffeeName.trim(),
      beans: coffeeName.trim(),
      method: method.trim(),
      coffeeGrams: coffeeAmount,
      waterGrams: waterAmount,
      rating: ratingNumber,
      tastingNotes: tastingNotes.trim(),
    };

    console.log("==============================");
    console.log("EDITING ID:", editingId);
    console.log("BREW DATA:", brewData);
    console.log("==============================");

    try {
      let response;

      // ==========================
      // CREATE
      // ==========================

      if (editingId === null) {
        console.log("CREATING NEW BREW");

        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(brewData),
        });
      }

      // ==========================
      // UPDATE
      // ==========================

      else {
        const updateUrl = `${API_URL}/${editingId}`;

        console.log(
          "UPDATING EXISTING BREW:",
          updateUrl
        );

        response = await fetch(updateUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(brewData),
        });
      }

      // ==========================
      // READ SERVER RESPONSE
      // ==========================

      const text = await response.text();

      console.log(
        "SERVER STATUS:",
        response.status
      );

      console.log(
        "SERVER RESPONSE:",
        text
      );

      let result = {};

      try {
        result = text
          ? JSON.parse(text)
          : {};
      } catch {
        result = {
          message: text,
        };
      }

      // ==========================
      // SERVER ERROR
      // ==========================

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.details ||
            result.message ||
            `Server returned status ${response.status}`
        );
      }

      // ==========================
      // SUCCESS
      // ==========================

      console.log("BREW SAVED SUCCESSFULLY");

      await loadBrews();

      handleClose();

    } catch (error) {
      console.error(
        "SAVE ERROR:",
        error
      );

      alert(
        "Could not save brew:\n\n" +
          error.message
      );
    }
  };

  // ============================
  // DELETE BREW
  // ============================

  const handleDelete = async () => {
    if (editingId === null) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this brew?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const deleteUrl =
        `${API_URL}/${editingId}`;

      console.log(
        "DELETING BREW:",
        deleteUrl
      );

      const response = await fetch(
        deleteUrl,
        {
          method: "DELETE",
        }
      );

      const text = await response.text();

      let result = {};

      try {
        result = text
          ? JSON.parse(text)
          : {};
      } catch {
        result = {};
      }

      console.log(
        "DELETE STATUS:",
        response.status
      );

      console.log(
        "DELETE RESPONSE:",
        result
      );

      if (!response.ok) {
        throw new Error(
          result.error ||
            result.details ||
            "Failed to delete brew"
        );
      }

      console.log(
        "BREW DELETED SUCCESSFULLY"
      );

      await loadBrews();

      handleClose();

    } catch (error) {
      console.error(
        "DELETE ERROR:",
        error
      );

      alert(
        "Could not delete brew:\n\n" +
          error.message
      );
    }
  };

  // ============================
  // FILTER
  // ============================

  const filteredBrews =
    filterMethod === "All"
      ? brews
      : brews.filter(
          (brew) =>
            brew.method === filterMethod
        );

  // ============================
  // METHODS
  // ============================

  const methods = [
    ...new Set(
      brews
        .map(
          (brew) =>
            brew.method
        )
        .filter(Boolean)
    ),
  ];

  // ============================
  // RATING COLOUR
  // ============================

  const getRatingClass = (value) => {
    const number = Number(value);

    if (
      number === 1 ||
      number === 2
    ) {
      return "rating-red";
    }

    if (
      number === 3 ||
      number === 4
    ) {
      return "rating-orange";
    }

    if (number === 5) {
      return "rating-green";
    }

    return "rating-default";
  };

  // ============================
  // PAGE
  // ============================

  return (
    <div className="container">

      {/* ============================
          HEADER
      ============================ */}

      <header className="header">

        <h1>
          Brews: {brews.length}
        </h1>

        <button
          type="button"
          className="add-button"
          onClick={
            showForm
              ? handleClose
              : handleAdd
          }
        >
          {showForm
            ? "Close"
            : "Add"}
        </button>

      </header>

      {/* ============================
          ADD / EDIT FORM
      ============================ */}

      {showForm && (
        <BrewForm
          editingId={editingId}

          coffeeName={coffeeName}
          setCoffeeName={setCoffeeName}

          method={method}
          setMethod={setMethod}

          dose={dose}
          setDose={setDose}

          water={water}
          setWater={setWater}

          rating={rating}
          setRating={setRating}

          tastingNotes={tastingNotes}
          setTastingNotes={setTastingNotes}

          handleSubmit={handleSubmit}

          handleDelete={handleDelete}

          handleClose={handleClose}
        />
      )}

      {/* ============================
          BREW LIST
      ============================ */}

      {!showForm && (
        <>

          {/* FILTER */}

          <div className="filter-container">

            <select
              value={filterMethod}
              onChange={(e) =>
                setFilterMethod(
                  e.target.value
                )
              }
            >

              <option value="All">
                Filter by method
              </option>

              {methods.map(
                (name) => (
                  <option
                    key={name}
                    value={name}
                  >
                    {name}
                  </option>
                )
              )}

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

              filteredBrews.map(
                (brew) => (

                  <div
                    className="brew-item"
                    key={brew.id}
                  >

                    {/* RATING */}

                    <div
                      className={
                        `rating-circle ${getRatingClass(
                          brew.rating
                        )}`
                      }
                    >
                      {brew.rating}
                    </div>

                    {/* BREW INFO */}

                    <div className="brew-info">

                      <h2>
                        {
                          brew.coffeeName ||
                          brew.beans
                        }
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

                    {/* EDIT PEN */}

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

                )
              )

            )}

          </div>

        </>
      )}

    </div>
  );
}

export default App;
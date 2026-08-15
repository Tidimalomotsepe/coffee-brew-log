const prisma = require("../prismaClient");

// GET /api/brews
const getBrews = async (req, res) => {
  try {
    const brews = await prisma.brew.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(brews);
  } catch (error) {
    console.error("========== GET BREWS ERROR ==========");
    console.error(error);
    console.error("====================================");

    res.status(500).json({
      error: "Failed to fetch brews",
      details: error.message,
    });
  }
};

// POST /api/brews
const createBrew = async (req, res) => {
  try {
    const {
      coffeeName,
      method,
      coffeeGrams,
      waterGrams,
      rating,
      tastingNotes,
    } = req.body;

    if (
      !coffeeName ||
      !method ||
      coffeeGrams === undefined ||
      waterGrams === undefined ||
      rating === undefined ||
      !tastingNotes
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const brew = await prisma.brew.create({
      data: {
        coffeeName,
        method,
        coffeeGrams: Number(coffeeGrams),
        waterGrams: Number(waterGrams),
        rating: Number(rating),
        tastingNotes,
      },
    });

    res.status(201).json(brew);
  } catch (error) {
    console.error("Error creating brew:", error);

    res.status(500).json({
      error: "Failed to create brew",
      details: error.message,
    });
  }
};

// PUT /api/brews/:id
const updateBrew = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const {
      coffeeName,
      method,
      coffeeGrams,
      waterGrams,
      rating,
      tastingNotes,
    } = req.body;

    if (
      !coffeeName ||
      !method ||
      coffeeGrams === undefined ||
      waterGrams === undefined ||
      rating === undefined ||
      !tastingNotes
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const brew = await prisma.brew.update({
      where: {
        id,
      },
      data: {
        coffeeName,
        method,
        coffeeGrams: Number(coffeeGrams),
        waterGrams: Number(waterGrams),
        rating: Number(rating),
        tastingNotes,
      },
    });

    res.status(200).json(brew);
  } catch (error) {
    console.error("Error updating brew:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Brew not found",
      });
    }

    res.status(500).json({
      error: "Failed to update brew",
      details: error.message,
    });
  }
};

// DELETE /api/brews/:id
const deleteBrew = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.brew.delete({
      where: {
        id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting brew:", error);

    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Brew not found",
      });
    }

    res.status(500).json({
      error: "Failed to delete brew",
      details: error.message,
    });
  }
};

module.exports = {
  getBrews,
  createBrew,
  updateBrew,
  deleteBrew,
};
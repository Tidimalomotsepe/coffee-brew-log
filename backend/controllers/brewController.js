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
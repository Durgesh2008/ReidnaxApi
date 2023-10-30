import chartModel from "../models/chartModel.js";

export const allChartdata = async (req, res) => {
  const { CountryName } = req.params;

  try {
    const data = await chartModel.find({ CountryName }).sort({ Year: 1 });

    res.status(200).send({
      success: true,

      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in allChartdata",
      error,
    });
  }
};

export const allCountryController = async (req, res) => {
  try {
    const distinctCountries = await chartModel.distinct("CountryName");
    return res.status(200).send({
      success: true,
      distinctCountries,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in allCountryController",
      error,
    });
  }
};

export const dataSortCountrywise = async (req, res) => {
  try {
    const data = await chartModel
      .find({  })
      .sort({ CountryName: 1 ,Year:1});

    res.status(200).send({
      success: true,

      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in dataSortCountrywise",
      error,
    });
  }
};

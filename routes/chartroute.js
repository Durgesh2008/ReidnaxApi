import express  from "express";

import { allChartdata, allCountryController, dataSortCountrywise } from "../controllers/chartcontroller.js";
// router object
const router=express.Router();


router.get('/chatdata/:CountryName',allChartdata)
router.get('/allCountry',allCountryController)
router.get('/dataCountryWise',dataSortCountrywise)
export default router;
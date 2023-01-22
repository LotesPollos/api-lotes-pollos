import req from "express/lib/request";
import { getConnection, sql, queriesgraficasacrificiopollo } from "../../database";

export const getGraficaSacrificioPollo = async (req,res)=> {
  try {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriesgraficasacrificiopollo.getConsultaGraficaSacrificioPollo);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
      return pru.sacrificio
    })
    res.send(prueba); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

import req from "express/lib/request";
import { getConnection, sql, queriesgraficamortalidad } from "../../database";

export const getGraficaMortalidad = async (req,res)=> {
  try {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriesgraficamortalidad.getConsultaGraficaMortalidad);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
      return pru.total_muertos
    })
    res.send(prueba); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

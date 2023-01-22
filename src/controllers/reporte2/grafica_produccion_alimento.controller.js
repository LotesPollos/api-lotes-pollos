import req from "express/lib/request";
import { getConnection, sql, queriesgraficaproduccionalimento } from "../../database";

export const getGraficaProduccionAlimento = async (req,res)=> {
  try {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriesgraficaproduccionalimento.getConsultaGraficaProduccionAlimento);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
      return pru.Produccion_alimento
    })
    res.send(prueba); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

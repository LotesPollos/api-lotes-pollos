import req from "express/lib/request";
import { getConnection, sql, queriesgraficagastosmes } from "../../database";

export const getGraficaGastosMes = async (req,res)=> {
  try {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriesgraficagastosmes.getConsultaGraficaGastosMes);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
      return pru.Gastos_Mes
    })
    res.send(prueba); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

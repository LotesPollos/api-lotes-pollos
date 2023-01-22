import req from "express/lib/request";
import { getConnection, sql, queriesgraficaloteventa } from "../../database";

export const getGraficaLoteVenta = async (req,res)=> {
  try {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriesgraficaloteventa.getConsultaGraficaLoteVenta);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
      return pru.Venta
    })
    res.send(prueba); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};

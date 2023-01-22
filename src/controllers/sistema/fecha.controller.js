import req from "express/lib/request";
import { getConnection, sql, fechasistema } from "..//../database";


export const consultarFechaSistema = async (req,res)=> {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(fechasistema.getConsultaFecha);
      console.log(result);
  
      res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  
  };
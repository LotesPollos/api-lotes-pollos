import req from "express/lib/request";
import { getConnection, sql, queriescombobox } from "..//../database";

export const getCombobox = async (req,res)=> {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriescombobox.getConsultaCombobox);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
      return pru.año
    })
    res.send(prueba); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

};
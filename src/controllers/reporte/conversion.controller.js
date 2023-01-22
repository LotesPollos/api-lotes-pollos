import req from "express/lib/request";
import { getConnection, sql, queriesconversion } from "../../database";

export const getConversion = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesconversion.getConsultaConversion);
    console.log(result);
    res.json(result.recordset)
    
};
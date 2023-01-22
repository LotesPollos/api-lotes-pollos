import req from "express/lib/request";
import { getConnection, sql, queriesregproduccionalimentos } from "../../database";

export const getRegProduccionAlimentos = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesregproduccionalimentos.getConsultaRegProduccionAlimentos);
    console.log(result);
    res.json(result.recordset);
};
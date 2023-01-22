import req from "express/lib/request";
import { getConnection, sql, queriesgastoventas } from "../../database";

export const getGastoVentas = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesgastoventas.getConsultaGastoVentas);
    console.log(result);
    res.json(result.recordset);
};
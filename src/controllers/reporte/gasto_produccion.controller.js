import req from "express/lib/request";
import { getConnection, sql, queriesgastoproduccion } from "../../database";

export const getGastoProduccion = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesgastoproduccion.getConsultaGastoProduccion);
    console.log(result);
    res.json(result.recordset);
};
import req from "express/lib/request";
import { getConnection, sql, queriesloteventaregistro } from "../../database";

export const getLoteVentaRegistro = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesloteventaregistro.getConsultaLoteVentaRegistro);
    console.log(result);
    res.json(result.recordset);
};
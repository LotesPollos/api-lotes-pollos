import req from "express/lib/request";
import { getConnection, sql, queriesgastototal } from "../../database";

export const getGastoTotal = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesgastototal.getConsultaGastoTotal);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
        return pru.gt
        })
        res.send(prueba); 
    
};
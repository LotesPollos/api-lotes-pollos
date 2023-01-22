import req from "express/lib/request";
import { getConnection, sql, queriestotalgastos } from "../../database";

export const getTotalGastos = async (req,res)=> {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriestotalgastos.getConsultaTotalGastos);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
        return pru.gt
        })
        res.send(prueba); 
    
};
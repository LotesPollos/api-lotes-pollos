import req from "express/lib/request";
import { getConnection, sql, queriestotalganancianeta } from "../../database";

export const getTotalGananciaNeta = async (req,res)=> {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriestotalganancianeta.getConsultaTotalGananciaNeta);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
        return pru.gn
        })
        res.send(prueba); 
    
};
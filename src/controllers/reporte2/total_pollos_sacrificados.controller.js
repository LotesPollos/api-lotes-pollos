import req from "express/lib/request";
import { getConnection, sql, queriestotalpollossacrificados } from "../../database";

export const getTotalPollosSacrificados = async (req,res)=> {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriestotalpollossacrificados.getConsultaTotalPollosSacrificados);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
        return pru.tps
        })
        res.send(prueba); 
    
};
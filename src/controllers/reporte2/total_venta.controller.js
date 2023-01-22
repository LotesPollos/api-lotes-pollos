import req from "express/lib/request";
import { getConnection, sql, queriestotalventa } from "../../database";

export const getTotalVenta = async (req,res)=> {
    const{ year } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Year', year)
    .query(queriestotalventa.getConsultaTotalVenta);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
        return pru.suma
        })
        res.send(prueba); 
    
};
import req from "express/lib/request";
import { getConnection, sql, queriesgraficamortalidadtotal } from "../../database";

export const getGraficaMortalididadTotal = async (req,res)=> {
    const{ id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(queriesgraficamortalidadtotal.getConsultaGraficaMortalidadTotal);
    console.log(result);
    const prueba = result.recordset.map(pru =>{
        return pru.j
        })
        res.send(prueba); 
    
};






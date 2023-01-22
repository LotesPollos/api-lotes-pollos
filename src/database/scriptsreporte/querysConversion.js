export const queriesconversion = {
    getConsultaConversion: 
"select Conversion from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote INNER JOIN  Produccion_venta pv ON  pv.Id_ref_lote_venta = lv.Id_lote_venta_total WHERE  Id_lote = @Id"
}
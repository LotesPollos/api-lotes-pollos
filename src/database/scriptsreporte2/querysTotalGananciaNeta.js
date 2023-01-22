export const queriestotalganancianeta = {
    getConsultaTotalGananciaNeta : 
"select CASE WHEN sum(Ganancia_neta) IS NULL THEN 0 ELSE sum(Ganancia_neta) END  gn  from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote  INNER JOIN  Produccion_venta pv ON  pv.Id_ref_lote_venta = lv.Id_lote_venta_total  WHERE  year(Fecha_terminacion_lote_sistema) = @Year And Estado_lote = 'Terminado'",
}
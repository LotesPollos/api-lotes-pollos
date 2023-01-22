export const queriestotalventa = {
    getConsultaTotalVenta : 
"select   SUM( lp.Total_venta) suma from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote INNER JOIN  Lote_ventas_registro lp ON  lp.Id_ref_lote_venta = lv.Id_lote_venta_total where year(Fecha_venta) = @Year And Estado_lote = 'Terminado'"
}
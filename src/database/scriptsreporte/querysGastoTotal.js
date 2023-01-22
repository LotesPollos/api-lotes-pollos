export const queriesgastototal = {
    getConsultaGastoTotal: 
    "select sum(vrd.Sumat) gt from (select SUM(gv.Cantidad * gv.Precio) Sumat from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote INNER JOIN  Gastos_ventas gv ON  gv.Id_ref_lote_venta = lv.Id_lote_venta_total WHERE  Id_lote = @Id group by Id_lote Union all SELECT SUM(gp.Cantidad*gp.Precio)  Sumat from Lotes inner join Lote_produccion lp on  lp.Id_ref_lote =  Id_lote inner JOIN  Gastos_produccion gp ON  gp.Id_ref_lote_produccion = lp.Id_lote_produccion WHERE  Id_lote = @Id group by Id_lote) vrd",
    
}
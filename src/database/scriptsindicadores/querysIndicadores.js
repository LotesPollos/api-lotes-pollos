export const queriesindicadores = {

    getConsultaIndicadorSacrificio:
    "select sum(Cantidad_pollos)sacrificio from Lotes inner join Lote_produccion lp on  lp.Id_ref_lote =  Id_lote INNER JOIN  Reg_sacrificio_pollo rsp ON  rsp.Id_ref_lote_produccion = lp.Id_lote_produccion WHERE  Id_lote = @Id",

    getConsultaIndicadorMortalidad:
    "SELECT ((SUM(Cantidad_pollos_muertos) *100)/Cantidad_inicial_pollos) mort from Lotes inner join Lote_produccion on Id_ref_lote = Id_lote INNER JOIN Reg_produccion_mortalidad on Id_ref_lote_produccion = Id_lote_produccion where Id_lote= @Id group by Cantidad_inicial_pollos ",

    getConsultaIndicadorPollosVendidos:
    "select sum(Cantidad_pollos)total from Lotes inner join Lote_venta lv on  lv.Id_ref_lote =  Id_lote inner join Lote_ventas_registro  lvr ON  lvr.Id_ref_lote_venta = lv.Id_lote_venta_total where Id_lote=@Id",
}
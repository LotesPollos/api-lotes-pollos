export const queriesvalidacion = {

    getConsultalCantidadDisponibleMortalidad:
    "select (Lote_produccion.Cantidad_inicial_pollos - case  when Sum(rpm.Cantidad_pollos_muertos) IS null then 0 else sum(rpm.Cantidad_pollos_muertos) end - case when rsp.Cantidad_pollos IS null then 0 else rsp.Cantidad_pollos end ) CANTIDAD_DIPONIBLE_MORTALIDAD from Lote_produccion left join Reg_produccion_mortalidad rpm on  rpm.Id_ref_lote_produccion =  Id_lote_produccion left join (select Id_ref_lote_produccion Id_ref_lote_produccion, Sum(Cantidad_pollos) Cantidad_pollos from Reg_sacrificio_pollo where Id_ref_lote_produccion= @Id group by Id_ref_lote_produccion) rsp on  rsp.Id_ref_lote_produccion = Id_lote_produccion WHERE  Id_lote_produccion = @Id group by Lote_produccion.Cantidad_inicial_pollos, rsp.Cantidad_pollos",

    getConsultalRangoFecha:
    "SELECT DATEDIFF(DAY, (select Fecha_entrada_pollos FROM  Lote_produccion WHERE Lote_produccion.Id_lote_produccion = @Id), @Fecha)rango;",

    getConsultalCantidadDisponibleVenta:
    " select(case when SUM(rsp.Cantidad_pollos) IS NULL then 0 else SUM(rsp.Cantidad_pollos) end - case when lvr.Cantidad_pollos is null then 0 else lvr.Cantidad_pollos end ) disponible_venta from Reg_sacrificio_pollo rsp INNER JOIN Lote_produccion LP ON  rsp.Id_ref_lote_produccion = LP.Id_lote_produccion inner JOIN Lote_venta lv ON LP.Id_ref_lote = lv.Id_ref_lote left join ( select Id_ref_lote_venta Id_ref_lote_venta,SUM(Cantidad_pollos) Cantidad_pollos from Lote_ventas_registro  group by Id_ref_lote_venta) lvr on lvr.Id_ref_lote_venta = lv.Id_lote_venta_total where lv.Id_lote_venta_total= @Id group by lvr.Cantidad_pollos",

    getConsultalRecuperarContrasena:
    "select * from Usuarios where Nombre_usuario = @Usuario and Identificacion = @Documento",

    getConsultalRecuperarUsuario:
    "select * from Usuarios where Correo_usuario=@Correo  and Identificacion=@Documento"
}
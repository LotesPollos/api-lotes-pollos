export const queriesgraficamortalidad = {
    getConsultaGraficaMortalidad: 
"declare @Total_pollos_muertos DECIMAL(18,2) ,@total_no_muertos DECIMAL(18,2) , @total_muertos DECIMAL(18,2),@Cantidad_inicial_pollos DECIMAL(18,2) set @Total_pollos_muertos =( select SUM(Cantidad_pollos_muertos) tpm FROM Reg_produccion_mortalidad where FORMAT(Fecha_reg_mortalidad,'yyyy')= @Year) set @Cantidad_inicial_pollos = (select SUM(Cantidad_inicial_pollos)cip from Lote_produccion where FORMAT(Fecha_entrada_pollos,'yyyy')= @Year)set @total_no_muertos = @Total_pollos_muertos * 100/@Cantidad_inicial_pollos set @total_muertos = 100-@Total_pollos_muertos * 100/@Cantidad_inicial_pollos select @total_no_muertos as total_muertos,@total_muertos as total_muertos",
}
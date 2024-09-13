<script>
        //Entrada dos numeros
         const dias = Number (prompt("Digite os dias de viagem?  "))
         const horas = Number (prompt("Digite os horas de viagem?   "))
        
        //calculo de dias para minutos
         const calculo1 = dias * 1440
        //calculo de horas para minutos
         const calculo = calculo1 + horas * 60

         alert ("resultado dias: " + calculo)
         




</script>

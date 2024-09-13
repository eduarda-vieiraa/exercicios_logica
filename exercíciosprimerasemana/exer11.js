<script>
       const preco = Number (prompt ("Digite o valor do produto: "))
       const desconto = preco * 15/100
       const precoDesc = preco - desconto
       const parcelado = preco / 3

       alert ("Valor da compra R$: " + preco)
       alert ("Valor com descontoR$: " + precoDesc)  
       alert ("ou em 3x de R$: "+ parcelado)

       




</script>

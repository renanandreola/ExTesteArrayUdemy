var produtos = new Array('camisa', 'calça', 'cueca', 'sapato');
  

produtos.push('teste', 'teste', 'lençol', 'coberta');

for( i = 0; i < produtos.length; i++) {
    document.body.append("PRODUTOS: " + produtos);
    break
}
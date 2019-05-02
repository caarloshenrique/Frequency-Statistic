$(document).ready(function(){

    function countElements(arr) {
        var a = [], b = [], prev;
        arr.sort();
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length-1]++;
            }
            prev = arr[i];
        }
        return [a, b];
    }
  
    $('#form').on('submit', function(e){
       e.preventDefault();
      var sum = 0;
      var elements = document.getElementById("form").elements;
      var numbers = [];
      
      for (var i = 0, element; element = elements[i++];) {
          if(element.type != "submit" && element.value != ""){
              numbers.push(element.value);
              sum += parseInt(element.value);
          }     
      }
      
      console.log("vetor-> " + numbers);
      console.log("quantidade-> " + numbers.length);
      console.log("soma-> " + sum);
      console.log("media-> " + sum/numbers.length);
      
      var result = countElements(numbers);
      console.log("numeros-> " + result[0]);
      console.log("quantidades-> " + result[1]);
      
      var quantidadeElementsDif = 0;
      for (var i = 0; i < result[0].length; i++) {
              quantidadeElementsDif++;
      }
      //media;
      /*cont = 0;*/
      /*for(var i = 0; i < numbers[0].length; i++){
        var mean = cont[i]/numbers.length;
      }*/
      
      //desvio padrao;
      /*cont = 0;
      for(var i = 0; i < numbers[0].length; i++){
        var desvio = numbers[i] - mean;
        cont += desvio * desvio;
      }*/
      var maior = 0;
      for (var i = 0; i < result[0].length; i++) {
        if (result[1][i] > maior){
          maior = result[0][i];
        }
      }
      
      function median(numbers) {
          var half = Math.floor(numbers.length/2);
          if(numbers.length % 2)
            return numbers[half];
          else
        return (numbers[half-1] + numbers[half]) / 2.0;
      }
      
      
      var populacional = 0;
      var padrao = 0;
      var desvio = 0;
      for (var i = 0; i < result[0].length; i++){
        padrao = (Math.pow((result[0][i] - (sum/numbers)), 2))
	    desvio += padrao
      }
      var populacional = Math.sqrt(desvio/numbers);
      
      var amostral = 0;
      var padrao = 0;
      var desvio = 0;
      for (var i = 0; i < result[0].length; i++){
        padrao = (Math.pow((result[0][i] - (sum/numbers)), 2))
	    desvio += padrao
      }
      var amostral = Math.sqrt(desvio/(numbers - 1));
      
      console.log("Quantidades de Elementos Diferentes = " + quantidadeElementsDif);
      
      $("#resultado").append("<p> Quantidades de Elementos Diferentes: " + quantidadeElementsDif + "</p>");
      $("#resultado").append("<p> Soma: " + sum + "</p>");
      $("#resultado").append("<p> Média: " + sum/numbers.length + "</p>");
      $("#resultado").append("<p> Mediana: " + median(numbers) + "</p>");
      $("#resultado").append("<p> Moda: " + maior + "</p>");
      $("#resultado").append("<p> Variancia Populacional: " + populacional + "</p>");
      $("#resultado").append("<p> Variancia Amostral: " + amostral + "</p>");
      
      
      console.log("soma-> " + sum);
      console.log("media-> " + sum/numbers.length);
      
      $("#tbody").empty();
      var tbody = document.getElementById('tbody');
      for (var i = 0; i < result[0].length; i++) {
          var tr = "<tr>";
          tr += "<td>" + result[0][i] + "</td>" + "<td>" + result[1][i] + "</td>" + "<td>" + result[1][i]/10 + "</td>" + "<td>" + result[1][i]*10 + "</td>" + "</tr>";
          tbody.innerHTML += tr;
      }
    });
});






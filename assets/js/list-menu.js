$(document).ready(function(){
    read_list_menu()
});

function read_list_menu() {
    var url = script_url+"?action=list-menu";
   $.getJSON(url, function (json) {
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
            let nama = json.records[i].Nama;
            let harga = json.records[i].Harga;
            let menu = json.records[i].Menu;
            let bahan = json.records[i].Bahan;
      
            var x = document.getElementById("list-menu");
      
            if(menu=='yes'){
              x.innerHTML +=
              "<tr>" +
                "<td>" + nama + "</td>" +
                "<td>" + harga + "</td>" +
                "<td>" + "<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\""+harga+"\" data-nama=\""+nama+"\" data-bahan=\""+bahan+"\">Add To Cart</a>" + "</td>" +
              "</tr>";
            }else{
              x.innerHTML +=
              "<tr id=\""+harga+"\" class=\"table-info\">"+
                "<th colspan=\"3\">"+nama+"</th>"+
              "</tr>";
            }
      
          }
          
          generatz()

          $(".load-list").remove();
            // // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            // var divContainer = document.getElementById("showData");
            // divContainer.innerHTML = "";
            // divContainer.appendChild(table);
            // document.getElementById("loader").style.visibility = "hidden";
            // $("#re").css("visibility","visible");
    });
}

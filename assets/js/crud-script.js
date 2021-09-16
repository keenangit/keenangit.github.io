
function save() {
    $(".cd-cart__checkout").remove();
    $(".cd-cart__footer").html('<a href="#0" class="cd-cart__checkout"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></a>')

    var listNama =[]; 
    var listHarga =[]; 
    var listQty =[];
    var listBahan =[];

    var user = $( "#nama-p" ).val();
    var catatan = $( "#catatan" ).val();

        $('.cd-cart__product').each(function(){
            var nama = this.getAttribute('data-nama')
            var harga = this.getAttribute('data-harga')
            var bahan = this.getAttribute('data-bahan')
            var productId = this.getAttribute('data-productId')
            var qty = $('#cd-product-'+productId+' :selected').text()

            listNama.push(nama)
            listHarga.push(harga)
            listQty.push(qty)
            listBahan.push(bahan)

        }); 
        console.log(listNama) 
        console.log(listHarga) 
        console.log(listQty)
        console.log(listBahan)

        var url = script_url+"?callback=ctrlq&nama="+listNama.join()+"&harga="+listHarga.join()+"&qty="+listQty.join()+"&user="+user+"&catatan="+catatan+"&bahan="+listBahan.join()+"&action=insert";

        console.log(url)

        var request = jQuery.ajax({
            crossDomain: true,
            url: url ,
            method: "GET",
            dataType: "jsonp"
        });
}
  
  
  // Make an AJAX call to Google Script
  function insert_value() {
    
	$("#re").css("visibility","hidden");
	 document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');

    var id1=	$("#id").val();
	var name= $("#name").val();
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=insert";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }
  
  function update_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	
	
var id1=	$("#id").val();
	var name= $("#name").val();
	
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=update";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

	
  }

  
 
  
  
  function delete_value(){
	$("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
    var id1=	$("#id").val();
	var name= $("#name").val();
	
	
    var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&action=delete";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }


  
  
  // print the returned data
  function ctrlq(e) {
  
    alert(e.result)
    location.reload();
    // $(".cd-cart__footer").css("backgroud-color","green")
    
	// $("#re").html(e.result);
	// $("#re").css("visibility","visible");
	//read_value();
	// location.reload();

  }
  
  

  
function read_value() {

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

		

        var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
	
		cell1.innerHTML = "<b>ID</b>";
		cell2.innerHTML = "<b>Name</b>";
        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
				var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = json.records[i].ID;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].NAME;
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
		document.getElementById("loader").style.visibility = "hidden";
		$("#re").css("visibility","visible");
    });
	}
  
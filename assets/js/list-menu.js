$(document).ready(function(){
    read_list_menu()
});

function refreshMenu(){
  localStorage.removeItem("list-menu");
  window.location.reload();
}

function read_list_menu() {
    var url = script_url+"?action=list-menu-realtime";

    if (typeof(Storage) !== "undefined") {
      if(localStorage.getItem("list-menu")!=null){
        generateList(JSON.parse(localStorage.getItem("list-menu")))
      } else{
        console.log("halah")
        $.getJSON(url, function (json) {
          console.log(json)
          localStorage.setItem("list-menu", JSON.stringify(json));
          generateList(json)
        });
      }
    } else {
      x.innerHTML += "Sorry, your browser does not support Web Storage...";
    }
}

function generateList(json){
  var x = document.getElementById("list-menu");

  for (var i = 0; i < json.records.length; i++) {
    let nama = json.records[i].Nama;
    let harga = json.records[i].Harga;
    let menu = json.records[i].Menu;
    let bahan = json.records[i].Bahan;
    
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
}


var TRange=null;

function searchMenu () {
  var str = jQuery("#in-search-menu").val();
   if (parseInt(navigator.appVersion)<4) return;
   var strFound;
   if (window.find) {
  
    // CODE FOR BROWSERS THAT SUPPORT window.find
  
    strFound=self.find(str);
    if (!strFound) {
     strFound=self.find(str,0,1);
     while (self.find(str,0,1)) continue;
    }
   }
   else if (navigator.appName.indexOf("Microsoft")!=-1) {
  
    // EXPLORER-SPECIFIC CODE
  
    if (TRange!=null) {
     TRange.collapse(false);
     strFound=TRange.findText(str);
     if (strFound) TRange.select();
    }
    if (TRange==null || strFound==0) {
     TRange=self.document.body.createTextRange();
     strFound=TRange.findText(str);
     if (strFound) TRange.select();
    }
   }
   else if (navigator.appName=="Opera") {
    alert ("Opera browsers not supported, sorry...")
    return;
   }
   if (!strFound) alert ("String '"+str+"' not found!")
   return;
}
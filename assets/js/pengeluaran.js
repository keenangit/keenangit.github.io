var script_url = "https://script.google.com/macros/s/AKfycbyOnqGhY7FQ6EEFz4SR7-kxpHYvuBv2kmi1s5mrXwGVjpLKbCjTT6OlNGf4dXUgSwn0/exec";

// Make an AJAX call to Google Script
function save_credit() {

    $("#b1").remove();
    $("#loader").html('<a href="#0" class="cd-cart__checkout"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></a>')

    var desc=	$("#desc").val();
    var price= $("#price").val();


    var url = script_url+"?callback=ctrlq&desc="+desc+"&price="+price+"&action=insert-credit";

    var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "jsonp"
});

}
function ctrlq(e) {
    alert(e.result)
    location.reload();
}
menu_list_array = ["Chicken Pizza",
                  "Veg Supreme Pizza",
                  "Extra Cheese chicken Pizza",
                   "Extra Chicken pizza",
                   "Extra Chicken Tandoori pizza"

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+'<li>' +menu_list_array[i] +  '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var 1=0;i<menu_list_array.lenght;i++){

    htmldata=htmldata+'<div class="card">'+'<img src="Images/pizzaImg.png"/>' +menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
$(document).ready(function(){
    var playerDetails=JSON.parse(localStorage.getItem("playerDetails"));
    $(".player-icon").attr("src",playerDetails.photo);
    $(".player-name").html(playerDetails.Name);
    $(".player-team").html(playerDetails.Team);
    $(".player-status").html(playerDetails.pLayingStatus);
    $(".player-role").html(playerDetails.Role);
    $(".player-price").html(playerDetails.Price);
    
})
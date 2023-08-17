
$(document).ready(function(){
    console.log('DOM loaded');
// $('#but').click(function(){
//     // $('#lorem').toggle(1000);
//     $('#lorem').slideToggle(1000);
// })
$('#but').click(function(){
    $('#lorem').animate({
        // opacity:0.3,
        height:'150px',
        width: '550px'
    
    },1000)
})


})
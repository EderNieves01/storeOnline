$(document).ready(function(){

    const productsArray = [];

    $("#button").click(function(e){
        e.preventDefault();
        const UserObj = {
            Password: $('.password').val(),
            email: $('.emailLogin').val(),
        }
        console.log(UserObj.Password, UserObj.email)
        localStorage.setItem(UserObj.Password,JSON.stringify(UserObj));
        localStorage.getItem(UserObj.Password);
        $(".password").val("");
        $(".emailLogin").val("");
        swal("Ok", "Registered correctly" , "success")
    })
    
    $('.buttonAdd').click(function(){

        const objProduct = {
            idProduct: $(this).closest('.card').find('.card-header h3').text(),
            NameProduct: $(this).closest('.card').find('.card-header h6').text(),
            priceProduct: $(this).closest('.card').find('.price').text(),
            img: $(this).closest('.card').find('img').attr("src"),
            cantidad: 1
        }
        productsArray.push(objProduct);
        swal("!OK!", "Add to cart" , "success")

        // const miValor = objProduct.idProduct;
        // let contador = 0;
        // $.each(productsArray, function(index, cant) {
            
        //     if(cant.idProduct === miValor){
        //       contador++
        //     }
        //     console.log(cant.idProduct + " " + contador);
        // })
        
        // productsArray.objProduct.cantidad = "eder";

$('#carrito').empty();
productsArray.forEach(Element => {
   
    $('#carrito').append(`
           
                  <tr id="${Element.idProduct}">
                    <td >${Element.idProduct}</td>
                    <td id="NameProduct">${Element.NameProduct}</td>
                    <td id="PriceProduct">${Element.priceProduct}</td>
                    <td id="ImgProduct"> <img class="" src="${Element.img}" style="width: 50px; height: auto" alt=""></td>
                    <td id="PriceProduct" class="text-center">${Element.cantidad}</td>
                    <td><button type="button" class="btn btn-danger btn-sm btnDelete" >eliminar</button></td>
                  </tr>  </br>
                      
            `);
            $('.btnDelete').click(function () {
                const id = $(this).closest('tr').attr('id');
                $(this).closest('tr').remove();
                
                const index = productsArray.findIndex(user => user.id == id);
                console.log(id)
                if (index !== -1) {
                    let newarray = productsArray.splice(index, 1);
                  
                    console.log(newarray)
                }
            })

})

})
function Decline() {
    swal("Thanks", "Your buys has been realiced", 'success');
}

$('.btnBuy').click(function(){
    if(localStorage.length > 0){
      delete productsArray;
    $('#carrito').empty();
    console.log(productsArray); 
    $('#exampleModal').modal('hide');
    Decline();
        // swal("!OK!", "Add to cart" , "success")
        swal("!OK!", "your purchase has been made" , "success")
    }else{ 
            swal("!User not found!", "you need to register to buy" , "warning")
    }
    
})

});

const users = JSON.parse(localStorage.getItem('users'))

$(".place").on("input", function () {
    if (
      $("#name").val().length >= 2 &&
      $("#password").val().length >= 2 
    ) {
      $(".btn").attr("disabled", false);
    } else {
      $(".btn").attr("disabled", true);
    }
});

$('form').on('submit', function(event){
    event.preventDefault()
    let userExist = userd.some(
        
        user.some((user) => user.name === $('#name').val() && user.password === $('password').val())

    );
    if(userExist){
        localStorage.setItem('currentUser', $('name').val())
        $('.place').val('')
        location.href = '../../main.html'
    }else{
        alert(['yout password or name is incorrect'])
    }

})
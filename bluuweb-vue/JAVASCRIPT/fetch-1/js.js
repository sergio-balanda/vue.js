console.log('inicio...');

var formulario = document.getElementById('form');
var alerta = document.getElementById('alert');

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e);

    var datos = new FormData(formulario);
    console.log(datos);
    console.log(datos.get('name'));
    

    fetch('index.php', {
        method: 'POST',
        body: datos
    }).then(res=>res.json())
        .then(data=>{
            console.log("data response: "+ data);
            if(data=='success'){
               alerta.innerHTML = 
               `
               <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>${data}!</strong> You should check in on some of those fields below.
                    <button type="submit" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
               `
            }else{
                alerta.innerHTML = 
                `
                <div class="alert alert-danger alert-dismissible mt-2 mb-3" data-auto-dismiss="2000">
                     <strong>${data}!</strong> You should check in on some of those fields below.
                     <button type="submit" class="close" data-dismiss="alert" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                     </button>
                 </div>
                `
            }
        });
    
});

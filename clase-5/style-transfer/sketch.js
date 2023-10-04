// Configurar imagen de entrada mediante un selector
let inputLoaded = false
document.getElementById('input-file').addEventListener('change', (e) => {
    if(e.target.files[0]){
        document.getElementById('input-image').src = URL.createObjectURL(e.target.files[0])
        inputLoaded = true
    }
})

// Carga de modelo de style transfer
let modelLoaded = false
const style = ml5.styleTransfer('./models/wave', () => {
    modelLoaded = true
})

document.getElementById('transfer').addEventListener('click', () => {
    if(inputLoaded && modelLoaded){
        style.transfer(document.getElementById('input-image'), (err, result) => {
            document.getElementById('output-image').src = result.src
        })
    }
    else {
        if(!inputLoaded) alert('No se ha cargado la imagen de entrada.')
        else if(!modelLoaded) alert('El modelo no se ha cargado por completo.')
    }
})


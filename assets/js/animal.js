import animales from "./consulta.js"


class Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        
        let Nombre= nombre;
        let Edad= edad;
        let Img= img;
        let Comentarios= comentarios;
        let Sonido= sonido;

        this.getNombre=()=>Nombre;
        this.getEdad=()=>Edad;
        this.getImg=()=>Img;
        this.getSonido=()=>Sonido;
        this.getComentarios=()=>comentarios;
        this.setComentarios= (comentarios)=> (Comentarios = comentarios);
    }
    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return this.getImg();
    }
    
    set Comentarios(comentario){
        return this.getComentarios(comentario);
    }
    get Sonido(){
        return this.getSonido();
    }
}

 
class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Rugir(){
        return `./assets/sounds/${this.Sonido}`
    }
};
 
class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Aullar(){
        return `./assets/sounds/${this.Sonido}`
    }
};

class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Gruñir(){
        return `./assets/sounds/${this.Sonido}`
    }
};

class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Sisear(){
        return `./assets/sounds/${this.Sonido}`
    }
    
};

class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }
    Chillido(){
        return `./assets/sounds/${this.Sonido}`
    }  
};

let Animales=document.getElementById('animal')
let animalesregistro=[];
const preview=document.getElementById('preview');

Animales.addEventListener('change', async ()=>{
    const al = await animales.getData();
    const animalSeleccionado=Animales.value
    console.log(al);
    const imagenesAlTemplate= al.find((p)=> p.name==animalSeleccionado);
    let img=`./assets/imgs/${imagenesAlTemplate.imagen}`
    console.log(img)
    preview.innerHTML= `<img src="${img}" style="width: 200px; height: 200px;">`
});

document.getElementById('btnRegistrar').addEventListener("click", async()=>{
    const al = await animales.getData();
    const animalSeleccionado=Animales.value
    console.log(al);
    const imagenesAlTemplate= al.find((p)=> p.name==animalSeleccionado);
    let img=`./assets/imgs/${imagenesAlTemplate.imagen}`
    console.log(img)
    const sonidosAlTemplate= al.find((p)=> p.name==animalSeleccionado);
    let sonido=`${sonidosAlTemplate.sonido}`
    console.log(sonido)
    let nombre=  document.getElementById('animal');
    let edad= document.getElementById('edad');
    let comentarios= document.getElementById('comentarios')
    let nuevoAnimal;
    if (nombre.value=="Leon"){
        nuevoAnimal= new Leon(
            nombre.value,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
    }else if (nombre.value=="Lobo") {
        nuevoAnimal= new Lobo(
            nombre.value,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        
    }else if (nombre.value=="Oso") {
        nuevoAnimal= new Oso(
            nombre.value,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        
    }else if (nombre.value=="Serpiente") {
        nuevoAnimal= new Serpiente(
            nombre.value,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        
    }else if (nombre.value=="Aguila") {
        nuevoAnimal= new Aguila(
            nombre.value,
            edad.value,
            img,
            comentarios.value,
            sonido
        );
        
    }
    if (nombre.value && comentarios.value && edad.value) {
        animalesregistro.push(nuevoAnimal);
        nombre.selectedIndex=0;
        edad.selectedIndex=0;
        comentarios.value=""
        preview.innerHTML="";
        reloadTable()
    }else{
        alert('Faltan datos por llenar')
    }
    console.log(animalesregistro)

});  

const reloadTable = () => {
    let ingresarAnimal=document.getElementById('Animales');
    ingresarAnimal.innerHTML="";
    animalesregistro.forEach((p, i) => {
        ingresarAnimal.innerHTML+=`
        <div class="card" style="width: 150px; height: 200px; ">
            <img src="${p.getImg()}" class="card-img-top" style="width: 150px;height: 170px;" onclick="modalanimal('${i}')"   data-toggle="modal" data-target="#exampleModal"">
            <div  class="icons" style="height: 30px;" onclick="sonidoAnimal('${i}')">
                <div class="card bg-secondary" style="height: 30px;" >
                    <i class="fas fa-volume-up  text-white " style="font-size: 30px;" ></i>
                </div>
            </div>
        </div>`
    });

}  

window.modalanimal=(i)=>{
    const animales=animalesregistro[i]
    let modalbody=document.getElementsByClassName('animales')[0];
    if (animales.getNombre()=="Leon"){
        modalbody.innerHTML=` 
        <img src="${animales.getImg()}" style="width: 150px; height: 200px;" ></img> <br>
        <p class="text-white text-center"><b>${animales.getEdad()}<br> Comentarios</b><br>
        ${animales.getComentarios()}</p>`
        
    }else if(animales.getNombre()=="Aguila"){
        modalbody.innerHTML=` 
        <img src="${animales.getImg()}" style="width: 150px; height: 200px;" ></img> <br>
        <p class="text-white text-center"><b>${animales.getEdad()}<br> Comentarios</b><br>
        ${animales.getComentarios()}</p>`
        
    }else if(animales.getNombre()=="Oso"){
        modalbody.innerHTML=` 
        <img src="${animales.getImg()}" style="width: 150px; height: 200px;" ></img> <br>
        <p class="text-white text-center"><b>${animales.getEdad()}<br> Comentarios</b><br>
        ${animales.getComentarios()}</p>`

    }else if(animales.getNombre()=="Serpiente"){
        modalbody.innerHTML=` 
        <img src="${animales.getImg()}" style="width: 150px; height: 200px;"></img> <br>
        <p class="text-white text-center"><b>${animales.getEdad()}<br> Comentarios</b><br>
        ${animales.getComentarios()}</p>`

    }else if(animales.getNombre()=="Lobo"){
        modalbody.innerHTML=` 
        <img src="${animales.getImg()}" style="width: 150px; height: 200px;" ></img> <br>
        <p class="text-white text-center"><b>${animales.getEdad()}<br> Comentarios</b><br>
        ${animales.getComentarios()}</p>`
        
    }
    reloadTable();
}    

window.sonidoAnimal=(i)=>{
    const animales= animalesregistro[i];
    let audio=document.getElementById('player')
    let nuevosonido;
    if (animales.getNombre()=="Leon"){
        nuevosonido= animales.Rugir()
        audio.setAttribute('src',nuevosonido);
        console.log(nuevosonido);
        
    }else if(animales.getNombre()=="Aguila"){
        nuevosonido= animales.Chillido()
        audio.setAttribute('src',nuevosonido);
        console.log(nuevosonido);
        
    }else if(animales.getNombre()=="Oso"){
        nuevosonido= animales.Gruñir()
        audio.setAttribute('src',nuevosonido);
        console.log(nuevosonido);

    }else if(animales.getNombre()=="Serpiente"){
        nuevosonido= animales.Sisear()
        audio.setAttribute('src',nuevosonido);
        console.log(nuevosonido);

    }else if(animales.getNombre()=="Lobo"){
        nuevosonido= animales.Aullar()
        audio.setAttribute('src',nuevosonido);
        console.log(nuevosonido);
     }
     reloadTable();
}     
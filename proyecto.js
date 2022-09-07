class Animal{
    constructor(name,age,weight,color){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.color = color;
    }

}

class Dog extends Animal{
    constructor(name,age,weight,color,raza){
        super(name,age,weight,color);
        this.raza = raza;
        this.info = `Perro\nnombre: ${name}\nedad: ${age} años\npeso: ${weight}KG\ncolor: ${color}\nraza: ${raza}`;
    }

    verInfo(){
        return this.info;
    }
}

const toto = new Dog("toto",3,4,"negro","caniche");
const huesos = new Dog("huesos",7,5,"marron","galgo");
const linda = new Dog("linda",10,9,"blanco","maltes");
const lazzie = new Dog("lazzie",6,12,"blanco y marron","collie");
const coco = new Dog("coco",12,7,"negro","mestizo");
const lulu = new Dog("lulu",8,3,"blanco","caniche toys");
const lee = new Dog("lee",8,3,"blanco","caniche toys");



let dogs = [toto,huesos,linda,lazzie,coco,lee,lulu];

// controladores de texto y numero------------------------------------------------------

function chooseNumber(){
    let election = parseInt(prompt("GUARDERIA DE PERROS\n1-----------VER INFORMACION DE TODOS LOS PERROS\n2-----------BUSCAR PERRO POR SU NOMBRE\n3-----------BUSCAR POR RAZA\n4-----------SACAR PERRO DE LA GUARDERIA\n5-----------CANTIDAD DE PERROS\n6-----------SALIR"));
    while(isNaN(election)){
        election = parseInt(prompt("GUARDERIA DE PERROS\n1-----------VER INFORMACION DE TODOS LOS PERROS\n2-----------BUSCAR PERRO POR SU NOMBRE\n3-----------BUSCAR POR RAZA\n4-----------SACAR PERRO DE LA GUARDERIA\n5-----------CANTIDAD DE PERROS\n6-----------SALIR"));
    }
    return election;
}


function introText(newText){
    while(!isNaN(newText)){
        newText = prompt("lo ingresado no es correcto, ingrese un texto");
    } 
    return newText;
}

// -------------------------------------------------------------------------------------------------
const information = () => {dogs.forEach((e)=> alert(e.verInfo()));}
const cantDog = () => {return dogs.length}; 

function seachName(newName){
    let seach = dogs.some((e)=>e.name == newName);
    if(seach){
        let findSeach = dogs.find((el)=>el.name == newName);
        return findSeach.verInfo();
    } else{
        return "no se encontro ningun perro con ese nombre";
    }
}
function removeDog(nameDog){
        let seachNameDog = dogs.some((e) => e.name == nameDog);
        if(seachNameDog){
            let findDog = dogs.find((el)=> el.name == nameDog);
            let numberDog = parseInt(dogs.indexOf(findDog));
            dogs.splice(numberDog,1);
            return `el perro de nombre: ${findDog.name} fue eliminado correctamente`;
        } else {
            return "el nombre de perro que ingreso no es correcto";
        }
}

function seachRace(race){
    let seachRaceDog = dogs.some((e)=> e.raza == race);
    if(seachRaceDog){
        let dogsRace = dogs.filter((el) => el.raza == race);
        for(let puppies of dogsRace){
            doggies.push(puppies.name);
        }
    }


}

let doggies = []
let bool = true;
let nameDog,resulString,seachDog;

while(bool != false){
    let result = chooseNumber();
    
    switch(result){
        case 1:
            information();
            break;
        case 2:
            nameDog = prompt("Ingrese nombre del perro que desea buscar");
            resulString = introText(nameDog);
            seachDog = seachName(resulString);
            if(isNaN(seachDog)){
                alert(seachDog);
            }
            break;
        case 3:
            nameDog = prompt("Ingrese el nombre de la raza que desea buscar:");
            resulString = introText(nameDog);
            seachRace(resulString);
            if(doggies.length == 0){
                alert("no se encontro ningun perro de la raza que busca");
            } else{
                alert(`los siguientes perros pertenecen a esa raza: ${doggies.join("-")}`)
                doggies = [];
            }
            break;
        case 4:
            nameDog = prompt("Ingrese el nombre del perro que desea sacar:");
            resulString = introText(nameDog);
            seachDog = removeDog(resulString);
            alert(seachDog);
            break;
        case 5:
            let cant = cantDog();
            alert(`en esta guarderia hay ${cant} perros`);
            break;
        case 6:
            bool = false;
            break;
        default:
            break;
    }

}



const boneesProducts = [
    {id:1, name: "RAINBOW TEE", price: 32, size: "S", img: "./rainbowTee.png"},
    {id:2, name: "BONEES DIAS TEE", price: 35, size: "M", img: "./boneesDiasTee.png"},
    {id:2, name: "KOH LANTA TEE", price: 40, size: "L", img: "./kohLantaTee.png"},
    {id:4, name: "BOX BONEES TEE", price: 38, size: "M", img: "./boneesBoxTee.png"},
    {id:5, name: "BONEES TOTT BAG", price: 16, size: "S", img: "./boneesTotBag.png"},
    {id:6, name: "COFFEE SURF TEE", price: 35, size: "L", img: "./coffeeSurfTee.png"}
];

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(boneesProducts)
        }, 2000)
    })
}
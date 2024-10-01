const boneesProducts = [
    {id:"1", name: "RAINBOW TEE", stock: 4, price: 32, size: "S", img: "../rainbowTee.png", idCat: "tees", detail: "HAND PAINTED. Ultra Heavy Cotton Box Tee. 100% Cotton, Single Jersey, 300g."},
    {id:"2", name: "IBIZA LILA TOTE BAG", stock: 2, price: 18, size: "S", img: "../ToteLila.jpg",  idCat: "bags", detail: "HAND PAINTED. Lilac. 100 % Cotton, 290g. SIZE: 44,5cm x 44,5cm x 10,5cm."},
    {id:"3", name: "BOX BONEES TEE", stock: 5, price: 38, size: "M", img: "../boneesBoxTee.png",  idCat: "tees", detail: "HAND PAINTED. Ultra Heavy Cotton Box Tee. 100% Cotton, Single Jersey, 300g."},
    {id:"4", name: "KOH LANTA TEE", stock: 2, price: 40, size: "L", img: "../kohLantaTee.png",  idCat: "tees", detail: "HAND PAINTED. Single stitch fabric Tee. 100% Cotton, Single Jersey, 240g."},
    {id:"5", name: "BONEES TOTT BAG", stock: 5, price: 16, size: "S", img: "../boneesTotBag.png",  idCat: "bags", detail: "HAND PAINTED. Black. 100 % Cotton, 290g. SIZE: 44,5cm x 44,5cm x 10,5cm."},
    {id:"6", name: "BONEES DIAS TEE", stock: 6, price: 35, size: "M", img: "../boneesDiasTee.png",  idCat: "tees",detail: "HAND PAINTED. Single stitch fabric Tee. 100% Cotton, Single Jersey, 240g."}
];

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(boneesProducts)
        }, 500)
    })
}

export const getOneProduct = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const product = boneesProducts.find (item => item.id === id)
            resolve(product)
        }, 500)
    })
}

export const getProductsByCat = (idCategory) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const product = boneesProducts.filter(item => item.idCat === idCategory)
            resolve(product)
        }, 500)
    })
}
const products = [
    {
        id: 1,
        name: 'Venom',
        price: 2000,
        category: 'marvel',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/gbg1-8073945d1648ae9cd916396784122915-1024-1024.jpg',
        stock: 12,
        description:'Remera Venom Tapa Comics'
    },
    {
        id: 2,
        name: 'Back to the Future',
        price: 2000,
        category: 'geek',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/ase21-654cead3faea5034b516317088161190-1024-1024.jpg',
        stock: 9,
        description:'Remera Planos Back to the Future'
    },
    {
        id: 3,
        name: 'R2-D2',
        price: 2000,
        category: 'geek',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/edsx1-5ce5b142897052db7d16324981388043-1024-1024.jpg',
        stock: 15,
        description:'Remera Arturito R2D2 Star Wars'
    },
    {
        id: 4,
        name: 'Tortugas Ninja',
        price: 2000,
        category: 'retro',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/uiyi1-dc8b200175229c375516458113370231-1024-1024.jpg',
        stock: 19,
        description:'Remera TMNT - Tortugas Ninja'
    },
    {
        id: 5,
        name: 'Eva 01',
        price: 2000,
        category: 'anime',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/ebb1-c5aabb09bc1f7c6e9216252437767669-1024-1024.jpg',
        stock: 12,
        description:'Remera Evangelion - EVA 01'
    },
    {
        id: 6,
        name: 'Attack on Titan',
        price: 2000,
        category: 'anime',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/578/485/products/12221-f7fa3d260d966b738b16395077466613-1024-1024.jpg',
        stock: 17,
        description:'Remera Attack on Titan - Shingeki no Kyojin'
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(id)))
        }, 2000)
    })
}
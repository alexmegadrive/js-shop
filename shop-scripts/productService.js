// console.log(data)



class ProductService {

    constructor(products=[]) {
        this.products = products
    }


        filterBy(search ='') {
            if (!search.trim()) return data
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            })
            }

        toHTML() {
                  
            }
        
        getById(id) {
            return this.products.find( product =>{
                return product.id === id
            })
        }
            getByIndex(index) {
                return this.products[index]
            }
}

function toHTMLCard(product) { 
   
}

class HTMLService {
    paintProduct(product) {
        return `
        <li data-id="${product.id}">
            <img src="${product.image}" title="${product.title}" />
            <small>${product.title}</small>
            <small><strong>${product.price}</strong></small>
        </li>`
    }

    paintProducts(products = []) {
        return  products.map(this.paintProduct).join('')

    }
    paintCartItem(item) {
        return `
        <li data-type="remove" data-id="${item.id}">
        (${item.amount})
        ${item.title}
        <strong>${item.price}</strong>
        </li>
        `
    }


    paintCart( { items, totalPrice} ) {
        if (!items || items.length === 0  ) {
            return `<p>Корзина пуста</p>`
        }
        return  `
        <ul class="cart-lst">
        ${ items.map(this.paintCartItem).join('') }
        </ul>
        <hr />
        <p class="info">
        <span> Общая цена ${totalPrice}$</span>
        <bullon data-type="clear" class="clear">Очистить</button>
        </p>
        `
    
    }

}
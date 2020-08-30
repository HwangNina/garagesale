

const productList = {
    products: [
        {
            name: 'White T-shirts',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81vzc0ciKwL._AC_UL1500_.jpg',
            price: 3.99
        },
        {
            name: 'Grey T-shirts',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0051/4802/products/I__octocat__Code_2.0_Mock_GithubShop-M1_600x600.jpg?v=1563297789',
            price: 3.95
        },
        {
            name: 'Pink Dress',
            imageUrl: 'https://m.media-amazon.com/images/I/71k6SqpoCYL._SR500,500_.jpg',
            price: 8.99
        },
        {
            name: 'Jeans',
            imageUrl: 'https://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/9/69732249-1-f.jpg',
            price: 4.95
        },
        {
            name: 'A Book',
            imageUrl: 'https://www.thepaperstore.com/mm5/graphics/00000001/001325/001325_1000491545_NoColor.jpg',
            price: 2.99
        },
        {
            name: 'A Lipstick',
            imageUrl: 'https://images.ctfassets.net/wlke2cbybljx/6QLItVWaR3INrE5B8MMObK/79854007d3f3ed8a40a1e4d7e0c21e12/pillow-talk-packshot.png?w=500&h=500&fit=fill&fm=jpg&bg=rgb%3Affffff',
            price: 0.99
        }
    ],
    render() {
        const renderArea = document.getElementById('app');
        const itemList = document.createElement('ul');
        itemList.className = 'item-list';//css
        for(const product of this.products){
            const itemElement = document.createElement('li');
            product.imageUrl.className = 'item-image'//css
            itemElement.className = 'each-item';//css
            itemElement.innerHTML = `
            <div class="product-item">
                <img class="product-image" src="${product.imageUrl}" alt="${product.name}">
                <div class="product-item-content">
                <h3>${product.name}</h3>
                <h4>\$${product.price}</h4>
                <button>Add to Cart!</button>
                </div>
            </div>
            `;
            itemList.appendChild(itemElement);
        }
        renderArea.appendChild(itemList);
    }
}

productList.render();
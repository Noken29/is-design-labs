import {products} from './products'
import Product from './products'

let productsCurrentState : Product[] = products

productsView(products)

function productsView(productsJson : Product[]) {
    let productsDiv = document.querySelector('.products')
    productsDiv.innerHTML = ''
    productsJson.forEach(e => productHtmlFromEntry(e))
}

function productHtmlFromEntry(productJson : Product) {
    let productsDiv = document.querySelector('.products')
    let productDiv = document.createElement('div')
    productDiv.className = 'product'
    // Image
    let productImageDiv = document.createElement('div')
    productImageDiv.className = 'product-image'
    let image = document.createElement('img')
    image.src = 'img/' + productJson.image
    image.alt = productJson.name
    productImageDiv.appendChild(image)
    productDiv.appendChild(productImageDiv)

    // Title
    let productName = document.createElement('h3')
    productName.className = 'product-name'
    productName.innerText = productJson.name
    productDiv.appendChild(productName)

    // Description
    let productDescription = document.createElement('p')
    productDescription.className = 'product-description'
    productDescription.innerText = productJson.description
    productDiv.appendChild(productDescription)

    // Price
    let productPrice = document.createElement('p')
    productPrice.className = 'product-price'
    productPrice.innerText = '$' + productJson.price
    productDiv.appendChild(productPrice)

    // Add to cart button
    let button = document.createElement('button')
    button.className = 'add-to-cart-button'
    button.innerText = 'Add to cart'
    button.type = 'button'
    productDiv.appendChild(button)
    productsDiv.appendChild(productDiv)
}

// @ts-ignore
document.querySelector('#apply-button')['onclick'] = function () {
    // @ts-ignore
    let productType = document.querySelector('#product-type')['value']
    // @ts-ignore
    let minPrice = parseFloat(document.querySelector('#min-price')['value'])
    // @ts-ignore
    let maxPrice = parseFloat(document.querySelector('#max-price')['value'])
    if (isNaN(minPrice)) minPrice = 0
    if (isNaN(maxPrice)) maxPrice = 999999999
    let applyPriceFilter = minPrice < maxPrice
    let filteredProducts : Product[] = productsCurrentState.filter(e => e.type === productType || productType === 'all')
    if (applyPriceFilter)
        filteredProducts = filteredProducts.filter(e => e.price > minPrice && e.price < maxPrice)
    productsCurrentState = filteredProducts
    productsView(productsCurrentState)
}

// @ts-ignore
document.querySelector('#search-button')['onclick'] = function () {
    // @ts-ignore
    let searchQuery : string = document.querySelector('#search-input')['value']
    let searchParams = searchQuery.toLowerCase().trim().split(/\s+/)
    console.log(searchParams)
    let filteredProducts = products.filter(e => {
        let nameField = e.name.toLowerCase().trim()
        let descriptionField = e.description.toLowerCase().trim()
        return searchParams.some(e => nameField.includes(e) || descriptionField.includes(e))
    })
    productsCurrentState = filteredProducts
    productsView(productsCurrentState)
}
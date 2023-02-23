'use strict'

import {produtos} from "./produtos.js"

console.log(produtos[5].name)

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card__price')
    preco.textContent = `R$:${produto.price}`


    card.append(img, titulo, descricao, preco)
    return card

}



const carregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = produtos.map( criarCard )

    console.log(cards)
    container.replaceChildren(...cards)
}
carregarProdutos()
carregarProdutos()
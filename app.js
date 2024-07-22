const url = "http://localhost:3000/burgers"

document.addEventListener("DOMContentLoaded", () => {
   fetchBurger()
  });
  function fetchBurger() {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        const burger = document.querySelector('.content');
        data.map(data =>{
            const food = document.createElement('div')
            food.className ='food'

        const image = document.createElement('img')
        image.src = data.image
        image.className ='image'

        const name = document.createElement('h2')
        name.textContent = data.name

        const desc = document.createElement('p')
        desc.textContent = data.desc

        const price = document.createElement('h3')
        price.textContent = `Price: $ ${data.price}`

        const category = document.createElement('h3')
        category.textContent = data.category

        const button = document.createElement('button')
        button.textContent = 'Buy now'
        button.className ='button'

        food.appendChild(image)
        food.appendChild(name)
        food.appendChild(desc)
        food.appendChild(price)
        food.appendChild(category)
        food.appendChild(button)




        burger.appendChild(food)

        

        })
    })
  }
  

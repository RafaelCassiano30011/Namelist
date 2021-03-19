const $nameList = document.querySelector('.name-list')
const nameList = ['Marcos', 'Vinicius', 'Gaby', 'Jonathan', 'Rafael', 'Eric', 'Cadu']

for (let i = 0; i < nameList.length; i++) {
    const name = nameList[i]

    const li = document.createElement('li')
    li.textContent = `${name}`

    $nameList.appendChild(li)

}
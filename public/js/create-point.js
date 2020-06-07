function populeteUFs(){
    const ufSelect = document.querySelector('select[name=uf]')
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
    .then(states => {
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
        }
    })
}
populeteUFs()
function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateinput = document.querySelector("input[name=state]")
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateinput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.disabled = true //estou bloqueando o campo a cada consulta
    citySelect.innerHTML= '' //estou limpando o campo a cada consulta
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option> `
        }
        citySelect.disabled = false 
    })
}
document.querySelector('select[name=uf]')
    .addEventListener("change", getCities)

var cadaster = document.querySelector('button.good-work')
    .addEventListener("click", goodWork => { 
        //ajustar
        alert('Muito bem! Vocâ cadastrou um novo local.')
    })
//items de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")
    for(const item of itemsToCollect){
        item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')
var selectedItems = []
//adicionando e removendo classes
function handleSelectedItem(event){
    const itemLi = event.target
        itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id 
    //verifique se existe item selecionado
    //se sim, pegar os items selecionados
    const alreadySelected = selectedItems.findIndex(item => {
            return item == itemId
    })
    //se já estiver selecionado, tirar da seleção 
    if(alreadySelected >= 0 ){
        const filteredItems = selectedItems.filter(item =>  {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }else{
        selectedItems.push(itemId)
    }
    //se não tiver selecionado, adicione a selação
    console.log(selectedItems)
    //atualize o campo escondido(input type="hidden")com os items selecionados
    collectedItems.value = selectedItems
}


const list = document.querySelector('.post-container')
const backBtn = document.querySelector('#btnLogout')

document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('Posts')
    
    if(data){
        const parsedData = JSON.parse(data);
        parsedData.forEach(item =>{
            let id = item.id
            let content = item.Content
            const listItem = document.createElement("p");
            listItem.textContent = `${id}: ${content}`;
            list.appendChild(listItem)
        })

    }
})

backBtn.addEventListener('click', () => {
    localStorage.removeItem('Posts')
    localStorage.removeItem('ID')
    window.location.href = '../page/login.html'
})
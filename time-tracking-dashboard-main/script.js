const section = document.querySelector('.caxa2')

window.addEventListener("DOMContentLoaded",()=>{
    caixas()
})

function caixas(){
    let promise = fetch("data.json")
    .then((data)=>{
        return data.json()
    })
    .then((iten)=>{
        let displayMenu = iten.map((info)=>{
            return ` <section class="caxa2 ${info.box}">
            <div class="const">
            <img class="icon" src=${info.img} alt="">

            <article class="terceiro">
              <div class="cabecalho">
                <!-- semana -->
                <article class="title">
                  <p>${info.title}</p>
                  <button>
                    <img src="./images/three_dots_icon_159804.svg" width="30" height="30" alt="">
                  </button>
                </article>
      
                <h1>
                  ${info.current}hrs
                </h1>
                <p class="horas">Last week - ${info.previous}hrs </p>
              </div>
      
            </article>
      </div>

          </section>`
        })
        displayMenu = displayMenu.join("")
        section.innerHTML = displayMenu
    })
    .catch((error)=> console.log('Error' + error))
}
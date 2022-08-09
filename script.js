
const portfolioWorks = document.getElementById("portfolio-works")
const portfolioLabs = document.getElementById("portfolio-multimedia")

function main() {
    setPortf()
    setPortfNav();
    portfolioWorks.style.display = "none";
}

function setPortf(){
  const portfItemsNodeList = document.querySelectorAll('#portfolio-works .portfolio-item')
  const portfItems = Array.from(portfItemsNodeList)

  portfItems.map( el => {
    // console.log(el)
    const mainItem = el.children[0]
    const hoverItem = el.children[1]

    el.addEventListener("mouseover", evt => {
      mainItem.classList.add('d-none');
      hoverItem.classList.remove('d-none');
    })

    el.addEventListener("mouseout", evt => {
      mainItem.classList.remove('d-none');
      hoverItem.classList.add('d-none');
    })
  })
}

function setPortfNav(){

  const featLabsInit= document.querySelectorAll('.portfolio-nav--labs')
  const featLabsArr = Array.from(featLabsInit)
  featLabsArr.map( li =>{
    li.addEventListener("click", evt => {
      portfolioWorks.style.display = "none";
      portfolioLabs.style.display = "";
    })
  })


  const featWorksInit= document.querySelectorAll('.portfolio-nav--works')
  const featWorksArr = Array.from(featWorksInit)
  featWorksArr.map( li =>{
    li.addEventListener("click", evt => {
      portfolioWorks.style.display = "";
      portfolioLabs.style.display = "none";
    })
  })

}



window.addEventListener("load", main)

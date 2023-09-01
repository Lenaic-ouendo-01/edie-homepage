const observer = new IntersectionObserver((entries) => {
  for(const entry of entries) {
    // console.log(
         //Pour récupérer un élément
    //   entry.target,
         //Pour suivre la visibilité d'un élément il faudra utiliser le isIntersecting 
    //   entry.isIntersecting
    // )

    //Si l'élément (isIntersecting) est à true alors on appliquera l'animation définie
    if(entry.isIntersecting) {
      entry.target.animate([
        {transform: 'translateY(50%)', opacity: 0},
        {transform: 'translateY(0%)', opacity: 1},
      ], {
        duration: 1000
      })

      //Pour déclancher l'élément qu'une seule fois (arrêter l'observation et tout ce qui s'y applique comme animation)
      observer.unobserve(entry.target)
    }

  }
},{
  //Pour élagir la porté du ViewPort. C'est en quelque sorte pour dire que l'élément sera visible lorsqu'on sera dans la zone du Viewport définit  
  //rootMargin: '50px 50px 50px 50px'

  //Pour spécifier qu'il faut qu'au moins 50% de l'élément soit visible avant de l'afficher
  // threshold: .1
})

const observerX = new IntersectionObserver((entries) => {
  for(const entry of entries) {

    if(entry.isIntersecting) {
      entry.target.animate([
        {transform: 'translateX(-100%)', opacity: 0},
        {transform: 'translateX(0%)', opacity: 1},
      ], {
        duration: 1000
      })
      observerX.unobserve(entry.target)
    }

  }
},{
    // threshold: .1 
})

const observerC = new IntersectionObserver((entries) => {
  for(const entry of entries) {

    if(entry.isIntersecting) {
      entry.target.animate([
        {transform: 'scale(0)', opacity: 0},
        {transform: 'scale(1)', opacity: 1},
      ], {
        duration: 1000
      })
      observerC.unobserve(entry.target)
    }

  }
},{
    // threshold: .1 
})

observer.observe(document.querySelector('.vu-1'))
observer.observe(document.querySelector('.vu-2'))
observer.observe(document.querySelector('.vu-3'))
observer.observe(document.querySelector('.vu-4'))
observer.observe(document.querySelector('.vu-5'))
observer.observe(document.querySelector('.vu-6'))
observer.observe(document.querySelector('.vu-7'))
observer.observe(document.querySelector('.vu-8'))
observer.observe(document.querySelector('.vu-9'))
observerX.observe(document.querySelector('.vuX-1'))
observerX.observe(document.querySelector('.vuX-2'))
observerC.observe(document.querySelector('.vuC-1'))

//Pour déconnecter tous les observers
// observer.disconnect()

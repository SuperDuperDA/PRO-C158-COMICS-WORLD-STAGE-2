AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectorItemId:{
            default:"",
            type: "string"
        }
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handlePostersList: function(){
        const id = this.el.getAttribute("id")
        const posters_id = ["captain-aero-poster","outer-space-poster","spiderman-poster","superman-poster"]

        if (posters_id.includes(id)){
            const poster_container = document.querySelector("#posters-container")
            poster_container.setAttribute("cursor-listener", {selectorItemId:id})
            this.el.setAttribute("material", {color:"#0077CC", opacity:1})
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", () => {
          this.handlePostersListState()
        })
    },
    handleMouseLeaveEvents : function(){
        this.el.addEventListener("mouseleave", () =>{
          const {selectorItemId} = this.data
          if(selectorItemId){
            const el = document.querySelector(`#${selectorItemId}`)
            const id = el.getAttribute("id")
            if(id == selectorItemId){
              el.setAttribute("material", {color: "white", opacity:1})
            }
          }
        })
      }
})
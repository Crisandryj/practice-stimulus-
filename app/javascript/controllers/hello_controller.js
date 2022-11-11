import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  
  static targets = ["hide", "highlight"]
  static classes = ["toggle", "highlight"]

toggle (){
  this.hideTargets.forEach((element) => {
    element.classList.toggle(this.toggleClass)
  })
}

highlight (){
  this.highlightTarget.classList.toggle(this.highlightClass)
  }


}

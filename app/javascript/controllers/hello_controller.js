import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["hide"]
  static classes = ["toggle"]

toggle (){
  this.hideTargets.forEach((element) => {
    element.classList.toggle(this.toggleClass)
  })
}


}

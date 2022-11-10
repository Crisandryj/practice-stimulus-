import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static classes = [ "supported" ]


  toggle() {
    this.element.classList.add(this.supportedClass)
  }

}

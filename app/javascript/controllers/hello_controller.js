import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "hide" ]
  static classes = ["primary"]
  // static classes = [ "display" ]


  toggle() {
    this.hideTarget.classList.toggle(this.primaryClass) }
}

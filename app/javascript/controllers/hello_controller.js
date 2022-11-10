import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "items" ]
  static values = { index: { type: Number, default: 1 } }

  indexValueChanged() {
  this.showCurrentItem()
  }

  next() {
  this.indexValue++
  }

  showCurrentItem() {
    this.itemTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })

  connect() {
    this.element.textContent = "Hello World!"
  }

}

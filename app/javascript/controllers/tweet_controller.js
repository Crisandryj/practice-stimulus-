import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["output", "feild"]
  static values = {
    characterCount: Number,
  }

  connect (){
    this.change()
  }

  change () {
    let length = this.feildTarget.value.length
    this.outputTarget.textContent = `${length} characters`
  }



}

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["feild", "output"]
  static values = {
    textCounter:Number
  }

change () {
  let length = this.feildTarget.value.length
  this.outputTarget.textContent = `${280 - length} characters left`
}

connect() {
  this.change()
}




}

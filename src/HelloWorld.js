import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      bool: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    if(this.counter == 10){
      this.bool = true;
    }else{
      this.bool = false;
    }
    this.shadowRoot.querySelector('#userInput').value = this.counter;
  }
  __decrement() {
    if(this.counter != 0){
      this.counter -= 1;
    }
    if(this.counter == 10){
      this.bool = true;
    }else{
      this.bool = false;
    }
    this.shadowRoot.querySelector('#userInput').value = this.counter;
  }
  
  __setCounter(){

     this.counter = parseInt(this.shadowRoot.querySelector('#userInput').value, 10);
     console.log("counter val: " + this.counter);
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <h3> Nr. <input id="userInput" @change="${this.__setCounter}" type="number" value=${this.counter}><br><br></h3>
      ${this.bool ?
        html `<button style="background-color:#D324D2;" @click=${this.__increment}>increment</button>
              <button style="background-color:#D324D2;" @click=${this.__decrement}>decrement</button>` :
        html `<button @click=${this.__increment}>increment</button>
              <button @click=${this.__decrement}>decrement</button>`
        
      }
    `;
  }
  
}
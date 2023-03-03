// https://neumorphism.io/

export const basicButtonStyleset = CSS.set`
  :root {
    appearance: none;
    padding: 6px 12px;
    border-radius: 0em;
    color: #24292e;
    border: solid #c5c9cc 0.05em;
    background-repeat: expand;
    background-color: #c5c9cc;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3ClinearGradient id='a' x2='0' y2='1'%3E%3Cstop stop-color='%23fafbfc'/%3E%3Cstop offset='90%25' stop-color='%23eff3f6'/%3E%3C/linearGradient%3E%3Crect width='100%' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E");
  }

  :root>* {
    margin: * 0;
  }

  :root:hover {
    background-color: #e6ebf1;
    background-position: -.5em;
    border-color: #9fa4a9;
    border-color: rgba(27,31,35,.35);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3ClinearGradient id='a' x2='0' y2='1'%3E%3Cstop stop-color='%23f0f3f6'/%3E%3Cstop offset='90%25' stop-color='%23e6ebf1'/%3E%3C/linearGradient%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E");
  }

  :root:hover:active {
    background-color: #e9ecef;
    border-color: #a1a4a8;
    border-color: rgba(27,31,35,.35);
    box-shadow: inset 0 .15em .3em rgba(27,31,35,.15);
    background-image: none
  }

  :root:disabled {
    background-color: #e0e2e5;
    background-image: none;
    color: #bebebe;
  }
`;

export const Button = function (props, kids) {
  return (
    <button styleset={basicButtonStyleset} {...props}>
      {kids}
    </button>
  )
}

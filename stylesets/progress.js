// apply to <progress></progress> element
export const basicProgressStyleset = CSS.set`
  :root {
    appearance: none;
    display: block;
    height: 0.5em;
    width: *;
    border-radius: 0em;
    border: solid #c5c9cc 0.05em;
    background-repeat: expand;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3ClinearGradient id='a' x2='0' y2='1'%3E%3Cstop stop-color='%23fafbfc'/%3E%3Cstop offset='90%25' stop-color='%23eff3f6'/%3E%3C/linearGradient%3E%3Crect width='100%' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E");
  }

  :root::marker {
    width: length(progress-percent);
    background-repeat: expand;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3ClinearGradient id='a' x2='0' y2='1'%3E%3Cstop stop-color='%23e5e6e8'/%3E%3Cstop offset='90%25' stop-color='%23e6ebf1'/%3E%3C/linearGradient%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E");
  }
`
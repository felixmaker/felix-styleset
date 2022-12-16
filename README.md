# Felix's Styleset for [Sciter.JS](https://gitlab.com/sciter-engine/sciter-js-sdk)

Felix's Styleset is an easy-to-use component toolkit for Sciter.JS. 
**WARNING**: Felix's Styleset is on original development stage. It maybe have breaking change in next version.

## How to use? (Preview)

Example: use felix styleset to decorate a Reactor component.

```javascript
import * as styleset from "styleset";
const Button = function () {
  return (
    <button styleset={styleset.basicButtonStyleset}>Hello Button</button>
  )
}
document.body.append(<Button />)
```

## Current Roadmap

### Features

 - [ ] Easy to use
 - [ ] Stable API
 - [ ] Components
 - [ ] Customizable

### To-do list

#### Stage 1

 - [x] Button
 - [ ] Label
 - [ ] Progress
 - [ ] Checkbox
 - [ ] Text Field
 - [ ] Select

#### Stage 2

 - [ ] Dialog
 - [ ] List
 - [ ] Table
 - [ ] Typography
 - [ ] Link
 - [ ] Menu
 - [ ] Panel

#### More

 - [ ] Badge
 - [ ] Icons
 - [ ] Tooltip
 - [ ] Card
 - [ ] Breadcrumbs 
 - [ ] Pagination
 

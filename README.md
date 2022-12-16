# Felix's Styleset for [Sciter.JS](https://gitlab.com/sciter-engine/sciter-js-sdk)

Felix's Styleset is an very easy-to-use component toolkit for Sciter.JS users. It's on original stage of development, maybe it has breaking change in next version.

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

### Stage 2

 - [ ] Dialog
 - [ ] List
 - [ ] Table
 - [ ] Typography
 - [ ] Link
 - [ ] Menu
 - [ ] Panel

### More

 - [ ] Badge
 - [ ] Icons
 - [ ] Tooltip
 - [ ] Card
 - [ ] Breadcrumbs 
 - [ ] Pagination
 
## How to use Felix's styleset? (Preview)

```javascript
import * as styleset from "styleset";
const Button = function () {
  return (
    <button styleset={styleset.basicButtonStyleset}>Hello Button</button>
  )
}
document.body.append(<Button />)
```
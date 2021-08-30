# TS Components
Reusable components which allows you to customise components and can be easily installed through `npm`. 

## What I want to achieve
1. write in `Typescript`
2. Copy the component interface style from `ant design`
3. components can be customized by `props`
4. test each components by `Jest` + `Enzyme`
5. publish in `npm` allows me to reuse them in the future
6. use `prettier` as code formatter. I don't use `estlint` in this stage
7. `commitlint` formate each `commit message`
8. use `husky` + `lint-staged` to create a `pre-commit hook`, that force `prettier` to check the code formate.

## `npm`
You can install via `npm i gary-components`. npm address please click :point_right: https://www.npmjs.com/package/gary-components  
There are five components: `Button` `Icon` `AutoComplete` `Input` `Menu` and `Upload`.
Just `import` the component you need, for example
```
import Button from 'gary-component'
```

## Button
![1](https://user-images.githubusercontent.com/72715709/131286861-f3c3fe57-2d44-44c1-bd63-6c57c99d0b0d.gif) 
| props | required | type | description | params |
| --- | --- | --- | --- | --- |
| className | no | String | customized className | --- |
| disabled | no | boolean | if the butoon avaliable | `true` or `false` |
| size | no | String | decide the button size | `lg` or `sm` |
| btnType | no | String | buttom color |  `primary` `default` `danger` `link` |
| href | no | String | click to link |  --- |
#### how to use
```
<Button>Default</Button>
<Button btnType="primary">Primary</Button>
<Button btnType="danger">Danger</Button>
<Button btnType="link" href="www.google.com.au">Link</Button>
<Button disabled>disabled</Button>
<Button size="lg">Large Button</Button>
<Button size="sm">Small Button</Button>
```

## Icon
![2](https://user-images.githubusercontent.com/72715709/131287989-8ffac5b8-09e9-4335-9c52-a2fe65c62d5f.gif)
| props | required | type | description | params |
| --- | --- | --- | --- | --- |
| theme | no | String | icon color | `primary` `secondary` `success` `info` `warning` `danger` `light` `dark` |
#### how to use
I used `react-fontawesome` as icon library
```
<Icon icon="coffee" size="2x" />
<Icon icon="coffee" size="2x" theme="primary" />
<Icon icon="coffee" size="2x" theme="secondary" />
<Icon icon="coffee" size="2x" theme="success" />
<Icon icon="coffee" size="2x" theme="info" />
<Icon icon="coffee" size="2x" theme="warning" />
<Icon icon="coffee" size="2x" theme="danger" />
<Icon icon="coffee" size="2x" theme="light" />
<Icon icon="coffee" size="2x" theme="dark" />
```

## Menu
horizontal mode  
![3](https://user-images.githubusercontent.com/72715709/131288508-baf37300-0429-4a5f-a5a6-fb256b6a3c88.gif)  
vertical mode  
![4](https://user-images.githubusercontent.com/72715709/131288783-397256e6-97bf-412a-b0bd-07e11362127b.gif)  
| props | required | type | description | params |
| --- | --- | --- | --- | --- |
| defaultIndex | no | String | decide the menu item will be highlighted | `0` `1` `2` |
| className | no | String | customized className | --- |
| mode | no | String | menu mode | `horizontal` or `vertical` |
| style | no | String | css style |  --- |
| onSelect | no | function | a callback function that will be triggered when click |  --- |
| defaultOpenSubMenus | no | string[] | decide which sub menu will be opened  |  --- |
#### how to use
```
Horizontal mode
<Menu>
  <MenuItem>cool link</MenuItem>
  <MenuItem>cool link 2</MenuItem>
  <SubMenu title="dropdown">
    <MenuItem>dropdown 1</MenuItem>
    <MenuItem>dropdown 2</MenuItem>
  </SubMenu>
  <MenuItem>cool link 3</MenuItem>
</Menu>
```
```
Vertical mode
<Menu mode="vertical" defaultOpenSubMenus={['2']} defaultIndex="3">
  <MenuItem>cool link</MenuItem>
  <MenuItem>cool link 2</MenuItem>
  <SubMenu title="dropdown">
    <MenuItem>dropdown 1</MenuItem>
    <MenuItem>dropdown 2</MenuItem>
  </SubMenu>
  <MenuItem>cool link 3</MenuItem>
</Menu>
```

## input
![WeChat Screenshot_20210830155219](https://user-images.githubusercontent.com/72715709/131291645-cae171ef-943f-4c15-a795-7d73454ae46f.png)
#### how to use
| props | required | type | description | params |
| --- | --- | --- | --- | --- |
| disabled | no | boolean | if the input avaliable | --- |
| size | no | String | size of the input component | `lg` `sm` |
| icon | no | String | react-fontawesome iconProps | --- |
| prepend | no | String | the prepend context |  --- |
| append | no | String | the append context |  --- |
| onChange | no | function | callback function when input value change  |  --- |
#### how to use
```
<Input placeholder="default"></Input>
<Input placeholder="disabled" disabled></Input>
<Input placeholder="prepend" prepend="www."></Input>
<Input placeholder="append" append=".com"></Input>
<Input placeholder="with Icon" icon="coffee"></Input>
<Input placeholder="large font size" size="lg"></Input>
<Input placeholder="small font size" size="sm"></Input>
```

## Autocomplete
it allows user to use keyboard to select the search result
![5](https://user-images.githubusercontent.com/72715709/131292466-c9a9c9ce-6973-444f-8da6-8fca4e85d96c.gif)
| props | required | type | description | params |
| --- | --- | --- | --- | --- |
| fetchSuggestions | yes | string[] or Promise | the first 10 results will be displayed | --- |
| onSelect | no | function | a callback function when select an item | --- |
| renderOption | no | function | customized render style, it should return a `ReactElement`| --- |
#### how to use
```
// I used github api as an example
const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items)
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }))
    })
}
<AutoComplete
  fetchSuggestions={handleFetch}
/>

```
#### Optimisation
I created two `customised hooks` to optimise the user experience.  
`useClickOutside`: when user click outside it will close all the search result.  
`useDebounce`: search action will only happened after user doesn't key in new value in 0.3 second.

## Upload
it allows user drage the file over to upload.
![6](https://user-images.githubusercontent.com/72715709/131293507-83accdcc-5f65-47b4-a232-2e992a8b19a9.gif)
| props | required | type | description | params |
| --- | --- | --- | --- | --- |
| action | yes | string | a RESTful API allows user to upload file  | --- |
| beforeUpload | no | function | a callback function that the return result will be pass to next stage | --- |
| onProgress | no | function | a callback function that will be triggered when uploading file | --- |
| onSuccess | no | function | a callback function that will be triggered when upload successed |  --- |
| onError | no | function | a callback function that will be triggered when upload failed |  --- |
| onChange | no | function | callback function when user change the uploaded file  |  --- |
| onRemove | no | function | callback function when user remove the uploaded file  |  --- |
| headers | no | [key: string]: any | any HTTP headers  |  --- |
| name | no | string | the text will be set in `formData.append(name, file)`  |  --- |
| data | no | [key: string]: any | any extra data will be `append` in `formData`  |  --- |
| accept | no | string | decide which type of file will be accepted in `input`  |  --- |
| multiple | no | boolean | decide if multiple files is allowed in `inpu`  |  --- |
| drag | no | boolean | if drage files to upload is disabled |  --- |
#### how to use
```
<Uploa>
  action="https://run.mocky.io/v3/91d6540d-a509-4dc0-bb3f-32b55a56a6d5"
  onChange={() => handleChange()}
  onRemove={() => handleRemove()}
  name="fileName"
  multiple
  drag>
  <Icon icon="upload" size="5x" theme="secondary" />
  <br />
  <p>Drag file over to upload</p>
</Upload>
```



import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import AutoComplete from './Components/AutoComplete'

import Button from './Components/Button/button'
import Icon from './Components/Icon/icon'
import Input from './Components/Input'
import Menu from './Components/Menu/menu'
import MenuItem from './Components/Menu/menuItem'
import SubMenu from './Components/Menu/subMenu'
import Upload from './Components/Upload'
library.add(fas)

function App() {
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

  return (
    <div className="App" style={{ width: '80vw', margin: 'auto' }}>
      <div className="button-section">
        <Button>Button</Button>
        <Button btnType="primary">Button</Button>
        <Button btnType="danger">Button</Button>
        <Button btnType="link" href="www.google.com.au">
          Button
        </Button>
        <Button disabled>Button</Button>
        <Button size="lg">Button</Button>
        <Button size="sm">Button</Button>
      </div>

      <div className="icon-section">
        <Icon icon="coffee" size="2x" />
        <Icon icon="coffee" size="2x" theme="primary" />
        <Icon icon="coffee" size="2x" theme="secondary" />
        <Icon icon="coffee" size="2x" theme="success" />
        <Icon icon="coffee" size="2x" theme="info" />
        <Icon icon="coffee" size="2x" theme="warning" />
        <Icon icon="coffee" size="2x" theme="danger" />
        <Icon icon="coffee" size="2x" theme="light" />
        <Icon icon="coffee" size="2x" theme="dark" />
      </div>

      <div className="menu-section">
        <Menu>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
        <Menu mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
      </div>

      {/* <div className="input-section">
        <Input placeholder="default"></Input>
        <Input placeholder="disabled" disabled></Input>
        <Input placeholder="prepend" prepend="www."></Input>
        <Input placeholder="append" append=".com"></Input>
        <Input placeholder="with Icon" icon="coffee"></Input>
        <Input placeholder="large font size" size="lg"></Input>
        <Input placeholder="small font size" size="sm"></Input>
      </div>

      <div>
        <AutoComplete
          fetchSuggestions={handleFetch}
          // onSelect={action('selected')}
          //renderOption={renderOption}
        />
      </div>

      <div>
        <Upload
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          // action = "https://jsonplaceholder.typicode.com/posts"
          action="https://run.mocky.io/v3/91d6540d-a509-4dc0-bb3f-32b55a56a6d5"
          // onChange={() => handleChange()}
          // onRemove={() => handleRemove()}
          name="fileName"
          multiple
          drag>
          <Icon icon="upload" size="5x" theme="secondary" />
          <br />
          <p>Drag file over to upload</p>
        </Upload>
      </div>

      <div>
        <Icon icon="coffee" size="2x" theme="dark" />
        {() => {
          console.log('ok')
        }}
      </div> */}
    </div>
  )
}

export default App

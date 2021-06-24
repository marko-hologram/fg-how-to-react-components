import './App.css';
import { Tabs } from './components/Tabs/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tabs.Nav>
          <Tabs.NavItem>Tab 1</Tabs.NavItem>
          <Tabs.NavItem>Tab 2</Tabs.NavItem>
          <Tabs.NavItem>Tab 3</Tabs.NavItem>
        </Tabs.Nav>
        <Tabs.Data>
          <Tabs.TabContent>Tab 1 has this data</Tabs.TabContent>
          <Tabs.TabContent>
            <button>Random Button</button>
          </Tabs.TabContent>
          <Tabs.TabContent>
            <Tabs>
              <Tabs.Nav>
                <Tabs.NavItem>Tab 1</Tabs.NavItem>
                <Tabs.NavItem>Tab 2</Tabs.NavItem>
                <Tabs.NavItem>Tab 3</Tabs.NavItem>
              </Tabs.Nav>
              <Tabs.Data>
                <Tabs.TabContent>1</Tabs.TabContent>
                <Tabs.TabContent>2</Tabs.TabContent>
                <Tabs.TabContent>3</Tabs.TabContent>
              </Tabs.Data>
            </Tabs>
          </Tabs.TabContent>
        </Tabs.Data>
      </Tabs>
    </div>
  );
}

export default App;

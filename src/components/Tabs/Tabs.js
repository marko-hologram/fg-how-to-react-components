import { Children, cloneElement, createContext, useContext, useMemo, useState } from 'react';

const TabsContext = createContext();

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const providerValue = useMemo(() => {
    const changeTab = (index) => {
      setActiveTab(index);
    };

    return {
      activeTab,
      changeTab,
    };
  }, [activeTab]);

  return (
    <TabsContext.Provider value={providerValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsNav = ({ children }) => {
  return (
    <div>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          ...child.props,
          index,
        });
      })}
    </div>
  );
};

const TabsNavItem = ({ children, index }) => {
  const { changeTab } = useContext(TabsContext);

  return (
    <button type="button" onClick={() => changeTab(index)}>
      {children}
    </button>
  );
};

const TabsData = ({ children }) => {
  return (
    <div>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          ...child.props,
          index,
        });
      })}
    </div>
  );
};

const TabsTabContent = ({ children, index }) => {
  const { activeTab } = useContext(TabsContext);

  return activeTab === index && <div>{children}</div>;
};

Tabs.Nav = TabsNav;
Tabs.NavItem = TabsNavItem;
Tabs.Data = TabsData;
Tabs.TabContent = TabsTabContent;

import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Some  content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for Tab 3</div>,
    },
    {
        label: "Tab 3",
        content: <div>This is content for Tab 3</div>,
      },
      {
        label: "Tab 3",
        content: <div>This is content for Tab 3</div>,
      },
      {
        label: "Tab 4",
        content: <div>This is content for Tab 4</div>,
      },
      {
        label: "Tab 5",
        content: <div>This is content for Tab 5</div>,
      },
      {
        label: "Tab 6",
        content: <div>This is content for Tab 6</div>,
      },
      {
        label: "Tab 7",
        content: <div>This is content for Tab 7</div>,
      },
      {
        label: "Tab 8",
        content: <div>This is content for Tab 8</div>,
      },
              
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}

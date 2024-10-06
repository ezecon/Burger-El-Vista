import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import All from "./All";
   
  export function Products() {
    const data = [
      {
        label: "ALL",
        value: "all",
        desc: <All/>,
      },
      {
        label: "OTHERS",
        value: "others",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
    ];
   
    return (
      <Tabs value="all">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab className="text-[goldenrod] font-bold font-playwrite-gb-s" key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }
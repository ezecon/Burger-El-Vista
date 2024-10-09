import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import All from "./All";
import { isTokenExpired } from "../../Components/Hook/tokenUtils";
import { useToken } from "../../Components/Hook/useToken";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
   
  export function Products() {

    const { token, removeToken } = useToken();
    const navigate = useNavigate()
    
    useEffect(()=>{
      if (isTokenExpired(token)) {
        console.log("Token has expired. Logging out...");
        removeToken(); 
        navigate('/login')
      } else {
        console.log("Token is still valid.");
      }
    })




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
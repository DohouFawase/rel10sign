import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { useState } from "react";
import Cape from "./components/cape";
import Evente from "./components/evente"
import Chill from "./components/chill";
import Shot from "./components/shot";
import PicNic from "./components/picnic";


export default function Porfolio() {
  const [activeTab, setActiveTab] = useState("affiche");

  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
        className="rounded-none border-b text-blue-400  bg-transparent p-0"
        indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-600  ",
          }}
        >
          <Tab value="affiche" onClick={() => setActiveTab("affiche")} className=" text-sm">
           CAPEB
          </Tab>

          <Tab value="flyers" onClick={() => setActiveTab("flyers")} className=" text-sm">
           Flyers
          </Tab>
          <Tab value="chill" onClick={() => setActiveTab("chill")} className=" text-sm">
            Chill
          </Tab>
          <Tab value="evente" onClick={() => setActiveTab("evente")} className=" text-sm">
           Evente 
          </Tab>

          <Tab value="pic-nic" onClick={() => setActiveTab("pic-nic")} className=" text-sm">
            PIC-NIC 
          </Tab>
        </TabsHeader>

        <TabsBody>
          <TabPanel value="affiche">
          <Cape />
          </TabPanel>
          <TabPanel value="flyers">
          <Evente />
          
          </TabPanel>
          <TabPanel value="chill">
          <Chill
 />
         
          </TabPanel>

          <TabPanel value="evente">
          <Shot />
         
          </TabPanel>

          <TabPanel value="pic-nic">
          <PicNic />

          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
}

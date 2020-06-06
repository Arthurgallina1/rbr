import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PerfilSorteiosAtivos from "../PerfilSorteiosAtivos";

export default () => (
    <Tabs>
        <TabList>
            <Tab>Sorteios</Tab>
            <Tab>Histórico</Tab>
        </TabList>

        <TabPanel>
            <PerfilSorteiosAtivos />
        </TabPanel>
        <TabPanel>
            <h2>Any content 2</h2>
        </TabPanel>
    </Tabs>
);

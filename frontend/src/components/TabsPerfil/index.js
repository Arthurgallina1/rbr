import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PerfilSorteiosAtivos from "../PerfilSorteiosAtivos";
import PerfilHistorico from "../PerfilHistorico";

export default () => (
    <Tabs>
        <TabList>
            <Tab>Ativos</Tab>
            <Tab>Histórico</Tab>
        </TabList>

        <TabPanel>
            <PerfilSorteiosAtivos />
        </TabPanel>
        <TabPanel>
            <PerfilHistorico />
        </TabPanel>
    </Tabs>
);

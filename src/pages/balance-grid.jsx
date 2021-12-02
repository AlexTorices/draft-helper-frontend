import React, { useEffect, useState } from "react";
import { ChampionGrid } from "../components/champion-grid";
import { FooterLol } from "../components/footer";
import { ChampionForm } from "../components/forms/champion-form";
import { SynergyForm } from "../components/forms/synergy-form";
import { LolHeader } from "../components/header";

export function BalanceGrid() {


    return (
        <div>
            <LolHeader></LolHeader>
            <ChampionGrid title="WTF"/>
            <ChampionForm />
            <div style={{height:"100px"}}></div>
            <SynergyForm />
            <FooterLol></FooterLol>
        </div>
    )

}
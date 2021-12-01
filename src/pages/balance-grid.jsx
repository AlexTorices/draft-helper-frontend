import React from "react";
import { ChampionGrid } from "../components/champion-grid";
import { FooterLol } from "../components/footer";
import { LolHeader } from "../components/header";
export function BalanceGrid() {

    const champions = [
        {
            id : 1,
            name : "Ashe",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Ashe.png"
        },
        {
            id : 2,
            name : "Diana",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Diana.png"
        },
        {
            id : 3,
            name : "Sivir",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Sivir.png"
        },
        {
            id : 4,
            name : "Ahri",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Ahri.png"
        },
        {
            id : 5,
            name : "Alistar",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Alistar.png"
        },
        {
            id : 6,
            name : "Brand",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Brand.png"
        },
        {
            id : 7,
            name : "Caitlyn",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Caitlyn.png"
        },
        {
            id : 8,
            name : "Corki",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Corki.png"
        },
        {
            id : 9,
            name : "Ekko",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Ekko.png"
        },
        {
            id : 10,
            name : "Elise",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Elise.png"
        },
        {
            id : 11,
            name : "Fizz",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Fizz.png"
        },
        {
            id : 12,
            name : "Gwen",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Gwen.png"
        },
        {
            id : 13,
            name : "Irelia",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Irelia.png"
        },
        {
            id : 14,
            name : "Kled",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Kled.png"
        },
        {
            id : 15,
            name : "Nami",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Nami.png"
        },
        {
            id : 16,
            name : "Pyke",
            imgUrl : "https://opgg-static.akamaized.net/images/lol/champion/Pyke.png"
        }
    ]

    return (
        <div>
            <LolHeader></LolHeader>
            <ChampionGrid champions={champions} title="WTF"/>
            <FooterLol></FooterLol>
        </div>
    )

}
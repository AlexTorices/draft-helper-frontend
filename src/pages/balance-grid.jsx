import React from "react";
import { ChampionGrid } from "../components/champion-grid";

export function BalanceGrid() {

    const champions = [
        {
            id : 1,
            name : "Ashe",
            imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwVALTU4XGlhm9-dmuS13_SSHMIgY3SjrSw&usqp=CAU"
        },
        {
            id : 2,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 3,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 4,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 5,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 6,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 7,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 8,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 9,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 10,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 11,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 12,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 13,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 14,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 15,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        },
        {
            id : 16,
            name : "Diana",
            imgUrl : "https://avatarfiles.alphacoders.com/210/210077.jpg"
        }
    ]

    return (
            <ChampionGrid champions={champions} title="WTF"/>
    )

}
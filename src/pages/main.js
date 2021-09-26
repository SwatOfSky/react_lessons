import React from "react";
import Header from "../components/header/header";
import Search from "../components/search/search";
import Content from "../components/content/content";
import Clock from "../components/header/Clock";

export default function Main() {
    return <main>
     <Header />
     <Clock date={new Date()}/>
     <Search />
     <Content />
    </main>
}
import React from "react";
// import SearchExampleStandard from "./components/Search_box";
import Table from "./components/Table"

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="header">Hello World!</h1>
                <Table />
                {/* <SearchExampleStandard /> */}
            </div>
        );
    }
}
// dataArea.js is within main.js
import React, { Component } from 'react'
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

// empty array
export default class DataArea extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        { name: "", width: "10%" },
        { name: "NAME", width: "10%" },
        { name: "PHONE", width: "20%" },
        { name: "EMAIL", width: "20%" },
        { name: "D.O.B.", width: "10%" }
    ]

    // function to sort by first name
    handleSort = heading => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            })
        } else {
            this.setState({
                order: "descend"
            })
        }
        
        // this function sorts array and displays new results
        const compareFunction = (a, b) => {
            if (this.state.order === "ascend") {
                // Account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // Numerically
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                // Account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // Numerically
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }

        }

        const sortedUsers = this.state.filteredUsers.sort(compareFunction);
        this.setState({ filteredUsers: sortedUsers });
    }

    
    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            // Merge data together, then see if user input is anywhere inside
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }
    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    // nav.js and dataTable.js are both within dataArea.js
    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <DataTable
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}
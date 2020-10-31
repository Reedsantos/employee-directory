import React, { Component } from 'react'
import "../styles/DataArea.css";

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

        const compareFunction = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
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
};

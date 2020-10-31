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
    }
}

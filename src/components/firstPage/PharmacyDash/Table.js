import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardHeader, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "./_dummyData";

class Table extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    };
  }

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`;
    return (
      <NavLink strict to={id}>
        {" "}
        {cell}{" "}
      </NavLink>
    );
  }

  render() {
    return (
      <div className='animated'>
        <Card>
          <CardHeader>
            <i className='icon-menu'></i>Medicines Table{" "}
          </CardHeader>
          <CardBody>
            <BootstrapTable
              data={this.table}
              version='4'
              striped
              hover
              pagination
              search
              options={this.options}
            >
              <TableHeaderColumn
                dataField='name'
                dataSort
                dataFormat={this.nameFormat}
              >
                Medicine
              </TableHeaderColumn>
              <TableHeaderColumn isKey dataField='class'>
                Class
              </TableHeaderColumn>
              <TableHeaderColumn dataField='age' dataSort>
                Quantity
              </TableHeaderColumn>
              <TableHeaderColumn dataField='expiringDay' dataSort>
                ExpiringDay
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Table;

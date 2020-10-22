import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import MaterialTable from "material-table";
import { getLogs } from "./Graphql";
import { client } from "../index";
import { Refresh } from "@material-ui/icons";
import { useQuery } from "@apollo/client";

const tableColumnConfig = [
  {
    title: "ID",
    field: "id",
  },
  {
    title: "Time",
    field: "time",
  },
  {
    title: "Calculation",
    field: "calculation",
  },
];

const remoteData = (query) => {
  console.log("Query object - ", query);
  return client
    .query({
      query: getLogs,
    })
    .then((res) => {
      return {
        data: res.data.logs,
        page: query.page,
        totalCount: 10,
      };
    });
};

const Table = (id) => {
  const tableRef = React.createRef();
  const [tableData, setTableData] = useState([]);

  const { loading, error, data, refetch } = useQuery(getLogs);

  if (loading) return <p>Loading...</p>;

  const updateData = () => {
    refetch();
    setTableData(data);
    tableRef.current && tableRef.current.onQueryChange();
  };
  if (error) return <p>Error :{error}</p>;

  return (
    <div>
      <MaterialTable
        tableRef={tableRef}
        columns={tableColumnConfig}
        data={remoteData}
        title="History"
        style={{
          backgroundColor: "transparent",
          borderColor: "#039be5",
          color: "#6cacc5",
        }}
        options={{
          headerStyle: {
            backgroundColor: "transparent",
            color: "#6cacc5",
            borderColor: "#039be5",
          },
          pageSize: 10,
          toolbar: true,
          paging: false,
          search: false,
        }}
        actions={[
          {
            icon: () => (
              <IconButton>
                <Refresh />
              </IconButton>
            ),
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => updateData(),
          },
        ]}
      />
    </div>
  );
};

export default Table;

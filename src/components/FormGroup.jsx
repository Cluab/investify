import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Upper = styled.div`
  flex-direction: column;
`;

const Lower = styled.div``;

const Table = styled.table``;

const FormGroup = ({ data }) => {
  const [status, setStatus] = useState("approved"); // "approved" as initial status, can be "approved" or "pending"

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const isActive = (buttonStatus) => {
    return status === buttonStatus ? "active" : "";
  };

  const filteredData = data.filter((info) => {
    if (status === "approved") return info.status === "approved";
    if (status === "pending") return info.status === "pending";
    return false;
  });

  return (
    <Container>
      <Upper>
      <Button
  text={"Approved"}
  onClick={() => handleStatusChange("approved")}
  active={status === "approved"}
/>
<Button
  text={"Pending"}
  onClick={() => handleStatusChange("pending")}
  active={status === "pending"}
/>
      </Upper>
      <Lower>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Form Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((info) => (
              <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.accountName}</td>
                <td>{info.date}</td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Lower>
    </Container>
  );
};

export default FormGroup;

'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GetAppIcon from '@mui/icons-material/GetApp';
import Link from 'next/link';
import Button from './Button';
import { primary } from '@/styles/variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  margin-top: 10px;
  gap: 20px;
`;

const Upper = styled.div`
  flex-direction: column;
  padding-top: 20px;
`;

const Lower = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border: none;
`;

const TableHead = styled.thead`
  background-color: ${primary};
  color: white;
`;

const TableBody = styled.tbody`
color: black;
`;
const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
`;

const EditContainer = styled.div`
  background-color: ${primary};
  border-radius: 1px;
  padding: 8px;
  padding-bottom: 0;
`;
const SeeContainer = styled.div`
  color: ${primary};
  border-radius: 1px;
  padding: 8px;
  padding-bottom: 0;
`;
const DownloadContainer = styled.div`
  background-color: rgba(220, 172, 0, 1);
  border-radius: 1px;
  padding: 8px;
  padding-bottom: 0;
`;

const FormGroup = ({ data }) => {
  const [status, setStatus] = useState('approved'); // "approved" as initial status, can be "approved" or "pending"

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const isActive = (buttonStatus) => (status === buttonStatus ? 'active' : '');

  const filteredData = data.filter((info) => {
    if (status === 'approved') return info.status === 'approved';
    if (status === 'pending') return info.status === 'pending';
    return false;
  });

  return (
    <Container>
      <Upper>
        <Button
          text="Approved"
          onClick={() => handleStatusChange('approved')}
          active={status === 'approved'}
        />
        <Button
          text="Pending"
          onClick={() => handleStatusChange('pending')}
          active={status === 'pending'}
        />
      </Upper>
      <Lower>
        <Table align="center">
          <TableHead>
            <tr>
              <th align="center">ID</th>
              <th align="center">Form Title</th>
              <th align="center">Date</th>
              <th align="center">Action</th>
            </tr>
          </TableHead>
          <TableBody align="center">
            {filteredData.map((info) => (
              <tr key={info.id}>
                <td align="center">{info.id}</td>
                <td align="center">{info.accountName}</td>
                <td align="center">{info.date}</td>
                <td align="center">
                  <ActionContainer>
                    <EditContainer><Link href={`details/${info.id}`}><EditIcon /></Link></EditContainer>
                    <SeeContainer><VisibilityIcon /></SeeContainer>
                    <DownloadContainer><GetAppIcon /></DownloadContainer>
                  </ActionContainer>
                </td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </Lower>
    </Container>
  );
};

export default FormGroup;

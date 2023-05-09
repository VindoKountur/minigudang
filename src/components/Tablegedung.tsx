"use client";
import React, { useState } from "react";
import { Table, Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import Pagination from "./Pagination";

import { TGedung } from "../lib/types";

const TableGedung = ({ dataGedung }: { dataGedung: TGedung[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(7);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="text-black">
      <Breadcrumb className="py-2">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Gedung</Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full">
        <Table className="bg-white w-full">
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Nama</Table.HeadCell>
            <Table.HeadCell>No. Telp</Table.HeadCell>
            <Table.HeadCell>Alamat</Table.HeadCell>
            <Table.HeadCell>Kapasitas</Table.HeadCell>
            <Table.HeadCell>Lokasi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {dataGedung
              .slice(
                currentPage * itemPerPage - itemPerPage,
                currentPage * itemPerPage
              )
              .map((gedung, idx) => (
                <Table.Row key={idx} className="">
                  <Table.Cell className="whitespace-nowrap font-medium">
                    {currentPage * itemPerPage - itemPerPage + (idx + 1)}
                  </Table.Cell>
                  <Table.Cell>{gedung.id}</Table.Cell>
                  <Table.Cell>{gedung.name}</Table.Cell>
                  <Table.Cell>{gedung.phone_number}</Table.Cell>
                  <Table.Cell>{gedung.address}</Table.Cell>
                  <Table.Cell>{gedung.allowed_capacity}</Table.Cell>
                  <Table.Cell>
                    {`Lat : ${gedung.latitude}, \nLong : ${gedung.longitude}`}
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
      <Pagination
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        totalItems={dataGedung.length}
        paginate={paginate}
      />
    </div>
  );
};

export default TableGedung;

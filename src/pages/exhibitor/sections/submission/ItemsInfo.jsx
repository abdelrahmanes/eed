/* eslint-disable react/prop-types */
import { Flex, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";

function ItemsInfo({ data }) {
  const [savedData, setSavedData] = useState({});
  useEffect(() => {
    setSavedData(JSON.parse(localStorage.getItem("data")));
  }, []);
  return (
    <Flex className="flex-col p-10 bg-white rounded-lg shadow-lg">
      <Flex className="justify-between w-full border-b border-primary">
        <Text className="pb-4 text-2xl font-semibold text-primary">
          Items information
        </Text>
        <Text className="pb-4 text-2xl font-semibold ">
          Total Price:{" "}
          <span className=" text-primary">{savedData.totalPrice} L.E</span>
        </Text>
      </Flex>
      <table className="table">
        <thead>
          <tr className="h-20 border-b border-black">
            <th className="text-left">Item Name</th>
            <th className="text-center">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {savedData &&
            savedData?.items?.map((item) => {
              return (
                <tr
                  key={item.item_id}
                  className="table-row h-20 border-b border-neutral-200"
                >
                  <td className="">
                    {data?.find((x) => x.id === item.item_id)?.name}
                  </td>
                  <td className="font-bold text-center">{item.quantity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Flex>
  );
}

export default ItemsInfo;

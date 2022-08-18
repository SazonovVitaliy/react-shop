import React, { FC } from "react";
import { IDevice } from "../types";
import DeviceCard from "./DeviceCard";
interface IDeviceListProps {
  devices: IDevice[];
}
const DevicesList: FC<IDeviceListProps> = ({ devices }) => {
  return (
    <div className="device-list">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DevicesList;

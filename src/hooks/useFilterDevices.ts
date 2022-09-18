import { useMemo } from "react";
import { IDevice, IFilter } from "../types";

export const useFilterDevicesByType = (devices: IDevice[], filter: IFilter) => {
  const sortedDevices = useMemo(() => {
    if (filter.type) {
      return [...devices].filter((devices) => devices.type === filter.type);
    }
    return devices;
  }, [devices, filter.type]);
  return sortedDevices;
};

export const useFilterDevices = (devices: IDevice[], filter: IFilter) => {
  const sortedDevices = useFilterDevicesByType(devices, filter);
  const sortedAndSearchedDevices = useMemo(() => {
    return sortedDevices.filter((device) =>
      device.model.toLowerCase().includes(filter.query)
    );
  }, [sortedDevices, filter.query]);
  return sortedAndSearchedDevices;
};

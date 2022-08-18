import { useMemo } from "react";

//export const useFilterDevices = ( devices, type) ={
//	const filterDevices = useMemo(()=>{
//		if(type){
//			return [...devices].filter(devices=>devices.type===type)
//		}
//		return devices
//	}, [devices, type])
//	return filterDevices
//}

//export const useDevices = (devices, type, brand) => {
//	const filterDevices = useFilterDevices( devices, brand)
//	const filteredTypeBrend = useMemo(()=>{
//		return filterDevices.filter(device=>device.brand===brand)
//	},[filterDevices,brand])
//	return filterDevices
//}

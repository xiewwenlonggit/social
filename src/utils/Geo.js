import React from 'react';
import { PermissionsAndroid, Platform } from "react-native";
import { init, Geolocation } from "react-native-amap-geolocation";
import { useToast } from 'native-base';
const useGeo = () => {
    const Toast = useToast();
    const initGeo = async () => {
        if (Platform.OS === "android") {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)

        }
        await init({
            ios: "cc7d3bdcc6c391887c985616b8fef6d8",
            android: "cc7d3bdcc6c391887c985616b8fef6d8"
        })
        return Promise.resolve();
    }
    const GetCurrentPosition = async () => {
        return new Promise(resolve => {
            Geolocation.getCurrentPosition(({ coords }) => {
                resolve(coords)
            }, reject)
        })
    }
    const getCityByLocation = async () => {
        Toast.show({ title: "努力获取中" })
        const { longitude, latitude } = await GetCurrentPosition();
        const res = await axios.get("https://restapi.amap.com/v3/geocode/regeo", {
            // key  高德地图中第一个应用的key
            params: { location: `${longitude},${latitude}`, key: "ae624e90becaba1baf1d24729bfbf0ea", }
        });
        Toast.close();
        return Promise.resolve(res.data);
    }
    return { initGeo, GetCurrentPosition, getCityByLocation }
};

export default useGeo;

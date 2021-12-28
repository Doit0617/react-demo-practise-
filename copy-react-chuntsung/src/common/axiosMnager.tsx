import React from "react";
import axios from 'axios';


// 路由配置文件
export const instance = axios.create({
    baseURL: 'http://10.18.62.19:8000',
    timeout: 1000,
});








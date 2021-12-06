import React from "react";
import * as Mock from 'mockjs';

export interface IBoardfake {
    list:
    {

        id: string
        title: string
        data: string
    }[]
}

export const boardFakeData: IBoardfake = Mock.mock(
    {
        'list|8': [
            {
                id: '@increment',
                title: '@cword(10,20)',
                data: '@data(yyyy-mm-dd)'
            }]
    });
export function BoardFakeData() {
    return Mock.mock(
        {
            'list|8': [
                {
                    id: '@increment',
                    title: '@cword(10,20)',
                    data: '@data(yyyy-mm-dd)'
                }]
        });;
}

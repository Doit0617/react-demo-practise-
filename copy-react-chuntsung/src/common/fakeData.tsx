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


export interface IProjectData {
    list: [
        {
            id: number,
            projectName: string,
            teacher: string,
            score: number,
            state: string
            other: string
        }]

}

export const projectData: IProjectData = Mock.mock(
    {
        'list|100': [
            {
                id: '@increment',
                projectName: '@cword(2,10)',
                teacher: '@cword(2,3)',
                score: '@integer(1,100)',
                'state|1': ['未开始', '进行中', '已结束'],
                other: "详情",
            }]
    });




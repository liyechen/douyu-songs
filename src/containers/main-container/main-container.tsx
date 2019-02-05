import * as React from 'react'
import { MusicList } from './music-list'
import styled from 'styled-components'

const electron = eval('require')("electron")
const ipcRenderer = electron.ipcRenderer

// Module to control application life.

export class MainContainer extends React.Component {

    data = [
        'Racing car sprays',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfiress.',
    ];

    // ipcRenderer = electron.ipcRenderer
    constructor(props: {}) {
        super(props)
        ipcRenderer.on('socket_data', (e: any, data: any) => {
            console.log(e, data)
        })
    }


    render() {
        return  (
            <WindowDiv>
                <MusicList
                    data={this.data}
                ></MusicList>
            </WindowDiv>
        )
    }
}

const WindowDiv = styled.div`
    background: #34343e;
`

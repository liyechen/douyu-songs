import * as React from 'react'
import { MusicList } from './music-list'
import styled from 'styled-components'

const electron = eval('require')("electron")
const ipcRenderer = electron.ipcRenderer

// Module to control application life.

export class MainContainer extends React.Component {

    musicList: string[] = ['first songs']

    // ipcRenderer = electron.ipcRenderer
    constructor(props: {}) {
        super(props)
        this.state = {
            musicList: this.musicList
        }
        ipcRenderer.on('socket_data', (e: any, data: any) => {
            this.musicList.push(data)
            this.setState({
                musicList: this.musicList
            })
        })
    }


    render() {
        return  (
            <WindowDiv>
                <MusicList
                    data={this.musicList}
                ></MusicList>
            </WindowDiv>
        )
    }
}

const WindowDiv = styled.div`
    background: #34343e;
    height: 328px;
`

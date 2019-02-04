import * as React from 'react'
import { MusicList } from './music-list'
import styled from 'styled-components'

export class MainContainer extends React.Component {

    data = [
        'Racing car sprays',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

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

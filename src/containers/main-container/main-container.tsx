import * as React from 'react'
import { MusicList } from './music-list'

export class MainContainer extends React.Component {

    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    render() {
        return  (
            <MusicList
                data={this.data}
            ></MusicList>
        )
    }
}

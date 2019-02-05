import * as React from 'react'
import { List } from 'antd'
import { MusicListItem } from './music-list-item'

interface MusicListProps {
    data: any[]
}

export class MusicList extends React.Component <MusicListProps>{
    
    renderItem(item: any, idx: number) {
        return (
            <List.Item>
                <MusicListItem
                    name={`${item}`}
                    isPlaying={idx === 0}
                >
                </MusicListItem>
            </List.Item>
        )
    }

    render() {
        return (
            <List
                bordered
                dataSource={this.props.data}
                renderItem={this.renderItem}
            />
        )
    }
}
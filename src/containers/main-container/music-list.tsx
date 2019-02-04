import * as React from 'react'
import { List } from 'antd'
import { MusicListItem } from './music-list-item'

interface MusicListProps {
    data: any[]
}

export class MusicList extends React.Component <MusicListProps>{
    
    renderItem(item: any) {
        return (
            <List.Item>
                <MusicListItem name={`${item}`}>
                </MusicListItem>
            </List.Item>
        )
    }

    render() {
        return (
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.props.data}
                renderItem={this.renderItem}
            />
            
        )
    }
}
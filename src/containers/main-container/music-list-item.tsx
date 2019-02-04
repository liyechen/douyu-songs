import * as React from 'react'

interface MusicListItemProps {
    name: string
}

export class MusicListItem extends React.Component <MusicListItemProps> {

    render() {
        return <div>{this.props.name}</div>
    }
}
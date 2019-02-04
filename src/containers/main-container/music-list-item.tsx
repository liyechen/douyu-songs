import * as React from 'react'
import styled from 'styled-components'

interface MusicListItemProps {
    name: string
    isPlaying: boolean
}

export class MusicListItem extends React.Component <MusicListItemProps> {

    render() {
        return (
            <ListItemDiv
                isPlaying={this.props.isPlaying}
            >
                {this.props.name}
            </ListItemDiv>
        )
    }
}

interface ListItemDivProps {
    isPlaying: boolean
}

const ListItemDiv = styled.div<ListItemDivProps>`
    font-size: 30px;
    padding: 10px 20px;
    color: ${props => props.isPlaying ? 'red' : 'white'};
`
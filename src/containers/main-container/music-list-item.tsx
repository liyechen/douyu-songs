import * as React from 'react'
import styled from 'styled-components'

interface MusicListItemProps {
    name: string
}

export class MusicListItem extends React.Component <MusicListItemProps> {

    render() {
        return (
            <ListItemDiv>{this.props.name}</ListItemDiv>
        )
    }
}

const ListItemDiv = styled.div`
    height: 50px;
`
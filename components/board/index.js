import React, { Component } from 'react'
import PropTypes from 'prop-types'
import range from 'lodash.range'

import Column from '../columns'

const buildCells = columId => {
  return range(6).map(i => {
    return {
      id: `${columId}-${i}`,
      state: 'empty',
    }
  })
}

const boardData = range(7).map(i => {
  return {
    id: i,
    isFull: false,
    cells: buildCells(i),
  }
})

class Board extends Component {
  state = {
    move: 'red',
  }

  toggleMove = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment,
    }))
  }

  handleMove = colId => {
    console.log('HANDLE MOVE', colId)
    // grab that columns cells
    // get the bottom most empty cell
    // set it to the current move
    // toggle the move
    // check if column is full
  }

  render() {
    return (
      <>
        <div className="board">
          <h3>{`Current move: ${this.state.move}`}</h3>
          {boardData.map(col => {
            return (
              <Column
                key={col.id}
                id={col.id}
                cells={col.cells}
                handleMove={this.handleMove}
              />
            )
          })}
        </div>
        <style jsx>{`
          .board {
            display: flex;
          }
        `}</style>
      </>
    )
  }
}

export default Board

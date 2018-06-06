import React, { Component } from 'react'
import PropTypes from 'prop-types'
import values from 'lodash.values'
import filter from 'lodash.filter'

import Column from '../columns'

class Board extends Component {
  state = {
    move: 'red',
    data: this.props.data,
  }

  toggleMove = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment,
    }))
  }

  handleMove = colId => {
    console.log('HANDLE MOVE', colId)
    console.log(this.state.data)

    const clickedCol = this.state.data[colId]
    const emptyCells = filter(clickedCol.cells, cell => cell.state == 'empty')
    console.log('clickedCOL', emptyCells)
    const bottomCell = emptyCells[emptyCells.length - 1]
    const updatedCell = {
      ...bottomCell,
      state: this.state.move,
    }

    console.log('updatedCell', updatedCell)
    // grab that columns cells
    // get the bottom most empty cell
    // set it to the current move
    // toggle the move
    // check if column is full
  }

  render() {
    console.log('data', this.state.data)
    return (
      <>
        <div className="board">
          <h3>{`Current move: ${this.state.move}`}</h3>
          {values(this.state.data).map(col => {
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

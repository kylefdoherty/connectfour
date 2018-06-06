import Board from '../components/board'
import range from 'lodash.range'

const buildCells = columId => {
  return range(6).reduce((obj, i) => {
    const id = `${columId}-${i}`
    const cell = {
      id,
      state: 'white',
    }
    obj[id] = cell
    return obj
  }, {})
}

const boardData = range(7).reduce((obj, i) => {
  obj[i] = { id: i, isFull: false, cells: buildCells(i) }
  return obj
}, {})

const ConnectFourContainer = () => (
  <>
    <div className="connectfour-container">
      <div className="connectfour-content">
        <Board data={boardData} />
      </div>
    </div>
    <style jsx>{`
      .connectfour-content {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;
      }
    `}</style>
  </>
)

export default ConnectFourContainer

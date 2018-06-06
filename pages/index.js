import Board from '../components/board'

const ConnectFourContainer = () => (
  <>
    <div className="connectfour-container">
      <div className="connectfour-content">
        <Board />
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

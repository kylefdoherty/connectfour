import Cell from '../components/cell'

const ConnectFourContainer = () => (
  <>
    <div className="connectfour-container">
      <div className="connectfour-content">
        <Cell />
      </div>
    </div>
    <style jsx>{`
      .connectfour-content {
        background: honeydew;
        width: 60%;
        margin: auto;
      }
    `}</style>
  </>
)

export default ConnectFourContainer

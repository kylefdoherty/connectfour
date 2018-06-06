import PropTypes from 'prop-types'
import classNames from 'classnames'

const Cell = ({ position, state, hover }) => {
  const circleClasses = classNames({
    'cell-content': true,
    hover: hover,
  })

  return (
    <>
      <div className="cell-container">
        <div className={circleClasses} />
      </div>
      <style jsx>{`
        .cell-container {
          height: 100px;
          width: 100px;
          background: #f2c94c;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cell-content {
          height: 80%;
          width: 80%;
          background: ${state};
          border-radius: 50%;
        }
        .hover {
          border: 1px solid red;
          background: #fdc6c6;
        }
      `}</style>
    </>
  )
}

Cell.propTypes = {
  position: PropTypes.number,
  state: PropTypes.string,
  hover: PropTypes.bool,
}

Cell.defaultProps = {
  state: 'white',
  position: 0,
  hover: false,
}

export default Cell

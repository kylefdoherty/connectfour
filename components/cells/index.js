import PropTypes from 'prop-types'
import classNames from 'classnames'

const Cell = ({ state, hover, id }) => {
  const circleClasses = classNames({
    'cell-content': true,
    hover: hover,
  })

  return (
    <>
      <div className="cell-container">
        <div className={circleClasses}>{id}</div>
      </div>
      <style jsx>{`
        .cell-container {
          height: 80px;
          width: 80px;
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
  state: PropTypes.string,
  hover: PropTypes.bool,
}

Cell.defaultProps = {
  state: 'white',
  hover: false,
}

export default Cell

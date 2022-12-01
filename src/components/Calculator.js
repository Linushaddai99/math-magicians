import React from 'react';
import Button from './button';
import calculate from './logic.js/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next, operation } = this.state;

    const handleClick = (event) => {
      const results = calculate({ total, next, operation }, event.target.innerHTML);

      this.setState({
        total: results.total,
        next: results.next,
        operation: results.operation,
      });
    };

    return (
      <div className="calculator-div">
        <div className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <Button content="AC" handleClick={handleClick} />
        <Button content="+/-" handleClick={handleClick} />
        <Button content="%" handleClick={handleClick} />
        <Button content="÷" classes="orange" handleClick={handleClick} />
        <Button content="7" handleClick={handleClick} />
        <Button content="8" handleClick={handleClick} />
        <Button content="9" handleClick={handleClick} />
        <Button content="x" classes="orange" handleClick={handleClick} />
        <Button content="4" handleClick={handleClick} />
        <Button content="5" handleClick={handleClick} />
        <Button content="6" handleClick={handleClick} />
        <Button content="-" classes="orange" handleClick={handleClick} />
        <Button content="1" handleClick={handleClick} />
        <Button content="2" handleClick={handleClick} />
        <Button content="3" handleClick={handleClick} />
        <Button content="+" classes="orange" handleClick={handleClick} />
        <Button content="0" classes="zero" handleClick={handleClick} />
        <Button content="." handleClick={handleClick} />
        <Button content="=" classes="orange" handleClick={handleClick} />
      </div>
    );
  }
}

export default Calculator;

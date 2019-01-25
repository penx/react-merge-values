/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import MergeValues from ".";

export const Uncontrolled = ({ onChange }) => (
  <MergeValues onChange={onChange} keys={["day", "month", "year"]}>
    {inputs => (
      <form title="Form">
        <div>
          <label>
            Day: <input name="day" {...inputs.day} />
          </label>
        </div>
        <div>
          <label>
            Month: <input name="month" {...inputs.month} />
          </label>
        </div>
        <div>
          <label>
            Year: <input name="year" {...inputs.year} />
          </label>
        </div>
      </form>
    )}
  </MergeValues>
);

class Controlled extends React.Component {
  state = {};

  render() {
    const { day, month, year } = this.state;
    return (
      <>
        <MergeValues
          onChange={value => this.setState(value)}
          keys={["day", "month", "year"]}
          value={this.state}
        >
          {inputs => (
            <>
              <div>
                <label>
                  Day: <input {...inputs.day} />
                </label>
              </div>
              <div>
                <label>
                  Month: <input {...inputs.month} />
                </label>
              </div>
              <div>
                <label>
                  Year: <input {...inputs.year} />
                </label>
              </div>
            </>
          )}
        </MergeValues>
        <pre title="Result">
          Your birthday is {day}/{month}/{year}
        </pre>
      </>
    );
  }
}

export const controlled = <Controlled />;

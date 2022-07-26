import React from 'react'
import { Link } from 'react-router-dom'
import './LetterSelectors.styles.css'

type Props = {}
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];


const LetterSelectors = (props: Props) => {

  const renderLetters = letters.map((letter, i) => (
    <React.Fragment>
      {i === letters.length - 1 ? (
        <Link
          className="link"
          to={`/recipes/letter/${letters[i]}`}
          key={i}
          id={letters[i]}
        >
          <span className="letter">{letter}</span>
        </Link>
      ) : (
        <React.Fragment key={i}>
          <Link
            className="link"
            to={`/recipes/letter/${letters[i]}`}
            key={i}
            id={letters[i]}
          >
            <span className="letter">{letter}</span>
          </Link>
          <span className="dash"> / </span>
        </React.Fragment>
      )}
    </React.Fragment>
  ));

  return (
    <div className="alpha">
      <h2 className="title">Browse By Letter</h2>
      <div className="letters">{renderLetters}</div>
    </div>
  );
}

export default LetterSelectors

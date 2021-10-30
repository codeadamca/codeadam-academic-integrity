import React from "react";

function TermList(props) {

  const content = props.terms.map((term, index) =>
    <p key={index}>
      <strong>{term.name}:</strong>
      &nbsp;
      {term.definition}
    </p>
  );

  return (
    <div className="TermList w3-padding-32">

      <div className="ca-container-600 w3-center">
          
        <h2 className="w3-text-red w3-center">Glossary of Terms</h2>

        {content}
      
      </div>

    </div>
  );
  
}

export default TermList;

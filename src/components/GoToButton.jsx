import React from "react";

function GoToButton({destination, goToPage}) {
  return (
    <div
      className="go_to_button"
      onClick={() => goToPage(destination)}
    >
      Go To {destination}
    </div>
  );
}

export default GoToButton;

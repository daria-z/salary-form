import { SyntheticEvent, useState } from "react";

import { AiOutlineInfoCircle, AiOutlineCloseCircle } from "react-icons/ai";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (
  <Popover id="popover-basic">
      МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
  </Popover>
);

function PopoverComponent() {
  const [isPoppverVisible, toggleIcon] = useState(false);
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <OverlayTrigger
      trigger={isPoppverVisible ? "click" : ["hover", "focus"]}
      placement="bottom-start"
      overlay={popover}
      onToggle={toggleIcon}
    >
      <button className="round-button" onClick={handleClick}>
        {isPoppverVisible ? (
          <AiOutlineCloseCircle className="button-icon" type="button" />
        ) : (
          <AiOutlineInfoCircle
            className="button-icon"
            data-bs-toggle="popover"
          />
        )}
      </button>
    </OverlayTrigger>
  );
}

export default PopoverComponent;

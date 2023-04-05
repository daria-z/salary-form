import { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { AiOutlineInfoCircle, AiOutlineCloseCircle } from "react-icons/ai";

export const Popup: React.FC = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  return (
    <OverlayTrigger
    trigger={isPopoverVisible ? ["click", "focus"] : ["hover", "focus"]}
    placement="bottom-start"
    onToggle={setIsPopoverVisible}
      overlay={
        <Popover>
          МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
        </Popover>
      }
    >
      <button className="popover-button">
        {isPopoverVisible ? (
          <AiOutlineCloseCircle className="popover-button-icon" />
        ) : (
          <AiOutlineInfoCircle className="popover-button-icon" />
        )}
      </button>
    </OverlayTrigger>
  );
};

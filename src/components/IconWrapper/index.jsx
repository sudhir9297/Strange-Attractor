import React from "react";

function IconWrapper({
  children,
  tooltip,
  toolTipStyle,
  handleClick,
  showTooltip,
}) {
  return (
    <div className="group mx-2.5 my-0 cursor-pointer relative p-1.5 w-8 h-8 flex flex-col items-center justify-center rounded bg-black/10 ">
      <div
        className="w-full h-full flex flex-col items-center justify-center "
        onClick={handleClick}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          id="tooltip"
          className="truncate z-2 rounded invisible absolute left-[120%] bg-black/10 text-white px-1.5 py-1 text-center text-xs group-hover:visible"
          style={{ ...toolTipStyle }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}

export default IconWrapper;

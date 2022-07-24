import React from "react";
import { ColorSwatch, Swap, attractor, colorList } from "../../constants";
import { IconWrapper } from "../../components";

function CanvasOptions({
  colorDropDown,
  handleColorDropDown,
  handleColorClicked,
  attractorDropDown,
  handleAttractorDropdown,
  handleAttractorClicked,
}) {
  return (
    <div className="absolute top-2 left-0 z-30 w-full flex ">
      <div className="relative">
        <IconWrapper
          tooltip={"Change Background"}
          showTooltip={!colorDropDown}
          handleClick={() => handleColorDropDown(!colorDropDown)}
          toolTipStyle={{ left: "0px" }}
        >
          {ColorSwatch({ fill: "#ffffff" })}
        </IconWrapper>
        {colorDropDown && (
          <div className="absolute h-fit top-[35px] left-[10px] bg-black/50 text-white text-center py-2 rounded">
            {colorList.map((color, index) => (
              <div
                key={index}
                className="flex items-flex justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleColorClicked(color.color)}
              >
                <i
                  className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[${}]"
                  style={{ background: color.color }}
                />
                <span className="truncate">{color.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <IconWrapper
          tooltip={"Change Attractor"}
          showTooltip={!attractorDropDown}
          handleClick={() => handleAttractorDropdown(!attractorDropDown)}
          toolTipStyle={{ left: "0px" }}
        >
          {Swap({ fill: "#ffffff" })}
        </IconWrapper>
        {attractorDropDown && (
          <div className="absolute h-fit top-[35px] left-[10px] bg-black/50 text-white text-center py-1 rounded">
            {attractor.map((o, index) => (
              <div
                key={index}
                className="flex items-flex justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleAttractorClicked(o)}
              >
                <span className="truncate">{o.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CanvasOptions;

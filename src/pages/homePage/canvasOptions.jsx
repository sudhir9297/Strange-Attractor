import React from "react";
import { ColorSwatch, ScreenShot } from "../../constants";
import { IconWrapper } from "../../components";

function CanvasOptions({
  colorDropDown,
  handleColorDropDown,
  handleColorClicked,
}) {
  return (
    <div className="absolute top-2 left-0 z-30">
      <div className="flex flex-col items-center justify-center">
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
              <div
                className="flex items-flex justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleColorClicked("#E5E5E7")}
              >
                <i className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[#E5E5E7]" />
                <span className="truncate">Swiss Coffee</span>
              </div>
              <div
                className="flex items-center justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleColorClicked("#dbdac6")}
              >
                <i className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[#dbdac6]" />
                <span className="truncate">Link Water</span>
              </div>
              <div
                className="flex items-center justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleColorClicked("#807c74")}
              >
                <i className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[#807c74]" />
                <span className="truncate">Friar Gray</span>
              </div>
              <div
                className="flex items-center justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleColorClicked("#5b6069")}
              >
                <i className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[#5b6069]" />
                <span className="truncate">Shuttle Gray</span>
              </div>
              <div
                className="flex items-center justify-start text-base my-2 mx-2 cursor-pointer"
                onClick={() => handleColorClicked("#302d31")}
              >
                <i className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[#302d31]" />
                <span className="truncate">Baltic Sea</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CanvasOptions;

import React from "react";
import { Swap, attractor, GithubIcon, colorList } from "../../constants";
import { IconWrapper } from "../../components";

function CanvasOptions({
  handleColorClicked,
  attractorDropDown,
  handleAttractorDropdown,
  handleAttractorClicked,
}) {
  return (
    <div className="absolute top-0 left-0 z-30 h-full flex flex-col justify-between py-2">
      <div className="relative">
        <IconWrapper
          tooltip={"Change Attractor"}
          showTooltip={!attractorDropDown}
          handleClick={() => handleAttractorDropdown(!attractorDropDown)}
        >
          {Swap({ fill: "#ffffff" })}
        </IconWrapper>
        {attractorDropDown && (
          <div className="absolute h-fit top-[0px] left-[80%] bg-black/50 text-white text-center py-1 rounded">
            {attractor.map((o, index) => (
              <div
                key={index}
                className="flex items-flex justify-start text-base my-2 mx-2 cursor-pointer "
                onClick={() => handleAttractorClicked(o)}
              >
                <span className="truncate select-none">{o.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="h-fit top-[35px] left-[10px] mx-2.5  text-white text-center py-2 rounded">
          {colorList.map((color, index) => (
            <div
              key={index}
              className="flex items-flex justify-start group  my-0 cursor-pointer relative p-1.5  items-center rounded "
              onClick={() => handleColorClicked(color.color)}
            >
              <i
                className="w-[25px] h-[25px] mr-2 rounded-full cursor-pointer flex items-center justify-center  bg-[${}]"
                style={{ background: color.color }}
              />
              <span className="truncate z-2 invisible text-xs  absolute left-[100%] bg-black/10 px-1.5 py-1 text-white rounded group-hover:visible">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <IconWrapper tooltip={"GithubRepo"} showTooltip={true}>
        <a
          href="https://github.com/sudhir9297/Strange-Attractor"
          target="_black"
        >
          {GithubIcon({ fill: "#ffffff" })}
        </a>
      </IconWrapper>
    </div>
  );
}

export default CanvasOptions;

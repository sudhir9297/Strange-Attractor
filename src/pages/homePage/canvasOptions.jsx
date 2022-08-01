import React from "react";
import {
  Swap,
  attractor,
  GithubIcon,
  colorList,
  DotIcon,
  LineIcon,
} from "../../constants";
import { IconWrapper } from "../../components";

function CanvasOptions({
  handleColorClicked,
  attractorDropDown,
  handleAttractorDropdown,
  handleAttractorClicked,
  useDot,
  handleSwitchAttractor,
  currentAttractor,
  backgroundColor,
}) {
  return (
    <div className="absolute top-0 left-0 z-30 h-full flex flex-col justify-between py-2">
      <div className="flex flex-col">
        <div className="relative">
          <IconWrapper
            tooltip={"Change Attractor"}
            showTooltip={!attractorDropDown}
            handleClick={() => handleAttractorDropdown(!attractorDropDown)}
          >
            {Swap({ fill: "#ffffff" })}
          </IconWrapper>
          {attractorDropDown && (
            <div className="absolute h-fit top-[0px] left-[100%] bg-black/50 text-white text-center py-0 rounded">
              {attractor.map((o, index) => (
                <div
                  key={index}
                  className={`flex items-flex justify-start text-base py-1 px-2 cursor-pointer rounded ${
                    currentAttractor.id === o.id && "bg-black text-white"
                  }`}
                  onClick={() => handleAttractorClicked(o)}
                >
                  <span className="truncate select-none">{o.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {useDot ? (
          <div className="py-2 px-0">
            <IconWrapper
              tooltip={"Show Tube Attractor"}
              showTooltip={true}
              handleClick={handleSwitchAttractor}
            >
              {LineIcon({ fill: "#ffffff" })}
            </IconWrapper>
          </div>
        ) : (
          <div className="py-2 px-0">
            <IconWrapper
              tooltip={"Show Dot Attractor"}
              showTooltip={true}
              handleClick={handleSwitchAttractor}
            >
              {DotIcon({ fill: "#ffffff" })}
            </IconWrapper>
          </div>
        )}
      </div>

      <div>
        <div className=" w-fit h-fit mx-2 bg-black/10 text-white text-center rounded flex items-center justify-center flex-col">
          {colorList.map((color, index) => (
            <div
              key={index}
              className="w-fit h-fit group cursor-pointer relative p-1.5 "
              onClick={() => handleColorClicked(color.color)}
            >
              <i
                className={`w-[25px] h-[25px] rounded-full cursor-pointer flex items-center justify-center ${
                  backgroundColor === color.color &&
                  "outline outline-offset-1 outline-1 outline-black/50 "
                }`}
                style={{ background: color.color }}
              />
              <span className="truncate z-2 invisible text-xs  absolute top-2 left-[120%] bg-black/10 px-1.5 py-1 text-white rounded group-hover:visible">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <IconWrapper tooltip={"Github Repo"} showTooltip={true}>
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

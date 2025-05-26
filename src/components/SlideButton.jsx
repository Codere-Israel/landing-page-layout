import { observer } from "mobx-react";
import React, { useState, useEffect, useRef } from "react";
import myStore from "../mobX/myStore";

const isTouchDevice = "ontouchstart" in document.documentElement;

const SlideButton = observer(
  ({ regis, onSuccess, onFailure, text, text_unlocked }) => {
    const slider = useRef(null);
    const container = useRef(null);

    const [unlocked, setUnlocked] = useState(false);

    const sliderLeft = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const containerWidth = useRef(0);
    const unmounted = useRef(false);

    useEffect(() => {
      containerWidth.current = container.current.clientWidth - 50;

      const handleDrag = (e) => {
        if (unmounted.current || unlocked) return;
        if (isDragging.current) {
          if (isTouchDevice) {
            sliderLeft.current = Math.min(
              Math.max(0, e.touches[0].clientX - startX.current),
              containerWidth.current
            );
          } else {
            sliderLeft.current = Math.min(
              Math.max(0, e.clientX - startX.current),
              containerWidth.current
            );
          }
          updateSliderStyle();
        }
      };

      const handleStopDrag = () => {
        if (unmounted.current || unlocked) return;
        if (isDragging.current) {
          isDragging.current = false;
          if (sliderLeft.current > containerWidth.current * 0.65) {
            window.location.href = regis;
            sliderLeft.current = containerWidth.current;
            if (onSuccess) onSuccess();
            onSlideSuccess();
          } else {
            sliderLeft.current = 0;
            if (onFailure) onFailure();
          }
          updateSliderStyle();
        }
      };

      if (isTouchDevice) {
        document.addEventListener("touchmove", handleDrag);
        document.addEventListener("touchend", handleStopDrag);
      } else {
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", handleStopDrag);
      }

      return () => {
        unmounted.current = true;
        if (isTouchDevice) {
          document.removeEventListener("touchmove", handleDrag);
          document.removeEventListener("touchend", handleStopDrag);
        } else {
          document.removeEventListener("mousemove", handleDrag);
          document.removeEventListener("mouseup", handleStopDrag);
        }
      };
    }, [unlocked, regis, onSuccess, onFailure]);

    const updateSliderStyle = () => {
      if (!slider.current || unlocked || unmounted.current) return;
      slider.current.style.left = sliderLeft.current + 50 + "px";
    };

    const startDrag = (e) => {
      if (unmounted.current || unlocked) return;
      isDragging.current = true;
      if (isTouchDevice) {
        startX.current = e.touches[0].clientX;
      } else {
        startX.current = e.clientX;
      }
    };

    const onSlideSuccess = () => {
      if (container.current) {
        container.current.style.width = container.current.clientWidth + "px";
      }
      setUnlocked(true);
    };

    const reset = () => {
      if (unmounted.current) return;
      setUnlocked(false);
      sliderLeft.current = 0;
      updateSliderStyle();
    };

    const getText = () => {
      return unlocked ? text_unlocked || "UNLOCKED" : text || "SLIDE";
    };

    return (
      <div className="ReactSwipeButton">
        <a href={regis} rel="nofollow">
          <div
            className={
              "rsbContainer " + (unlocked ? "rsbContainerUnlocked" : "")
            }
            ref={container}
          >
            <div
              className="rsbcSlider"
              ref={slider}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
            >
              <span className="rsbcSliderCircle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  fill="none"
                  viewBox="0 0 28 28"
                  stroke="currentColor"
                >
                  <path strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="rsbcText _shine">{myStore.component?.ctaText}</div>
          </div>
          <div
            style={{ color: myStore.component?.disclaimer?.color || "#ffffff" }}
            className={`text-center text-[2.5vw] pt-1`}
          >
            {myStore.component?.disclaimer?.text}
          </div>
        </a>
      </div>
    );
  }
);

export default SlideButton;

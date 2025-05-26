import React, { useRef, useState, useEffect } from "react";
import { REGIS_URL } from "../helper/consts";
import myStore from "../mobX/myStore";
import { observer } from "mobx-react";

const isTouchDevice = "ontouchstart" in document.documentElement;

const SlideButton = observer(() => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [unlocked, setUnlocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0);
  const containerWidth = useRef(0);
  const unmounted = useRef(false);

  const updateSliderStyle = (left) => {
    if (!sliderRef.current || unlocked) return;
    sliderRef.current.style.left = left + 50 + "px";
  };

  const handleDrag = (e) => {
    // if (unmounted.current || unlocked || !isDragging) return;

    let currentX = isTouchDevice ? e.touches[0].clientX : e.clientX;
    let newLeft = Math.min(
      Math.max(0, currentX - startX),
      containerWidth.current
    );
    setSliderLeft(newLeft);
    updateSliderStyle(newLeft);
  };

  const stopDrag = () => {
    // if (unmounted.current || unlocked || !isDragging) return;

    setIsDragging(false);

    if (sliderLeft > containerWidth.current * 0.55 && sliderLeft) {
      window.location.href = REGIS_URL;

      setSliderLeft(containerWidth.current);
      handleSuccess();
    } else {
      setSliderLeft(0);
    }

    updateSliderStyle(
      sliderLeft > containerWidth.current * 0.55 ? containerWidth.current : 0
    );
  };

  const handleSuccess = () => {
    if (containerRef.current) {
      containerRef.current.style.width =
        containerRef.current.clientWidth + "px";
    }
    setUnlocked(true);
  };

  const startDrag = (e) => {
    // if (unmounted.current || unlocked) return;

    setIsDragging(true);
    const x = isTouchDevice ? e.touches[0].clientX : e.clientX;
    setStartX(x);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        containerWidth.current = containerRef.current.clientWidth - 50;
      }
    };
    updateWidth();

    const dragListener = isTouchDevice ? "touchmove" : "mousemove";
    const endListener = isTouchDevice ? "touchend" : "mouseup";

    document.addEventListener(dragListener, handleDrag);
    document.addEventListener(endListener, stopDrag);
    window.addEventListener("resize", updateWidth);

    return () => {
      document.removeEventListener(dragListener, handleDrag);
      document.removeEventListener(endListener, stopDrag);
      window.removeEventListener("resize", updateWidth);
      unmounted.current = true;
    };
  }, [isDragging, sliderLeft, unlocked]);

  return (
    <div className="ReactSwipeButton">
      <a href={REGIS_URL} rel="nofollow">
        <div
          className={`rsbContainer ${unlocked ? "rsbContainerUnlocked" : ""}`}
          ref={containerRef}
        >
          <div
            className="rsbcSlider"
            ref={sliderRef}
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
          <div className="rsbcText shine">{myStore.component?.ctaText}</div>
        </div>
      </a>
      <div
        style={{ color: myStore.component?.disclaimer?.color || "#ffffff" }}
        className={`text-center text-[2.5vw] pt-1`}
      >
        {myStore.component?.disclaimer?.text}
      </div>
    </div>
  );
});

export default SlideButton;

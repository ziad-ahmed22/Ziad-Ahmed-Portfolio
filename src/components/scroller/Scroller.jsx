import { useRef } from "react";
import styles from "./scroller.module.css";

const Scroller = () => {
  const scroller = useRef();

  window.onscroll = () => {
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    scroller.current.style.width = `${(scrollTop / height) * 100}%`;
  };

  return <div ref={scroller} className={styles.scroller}></div>;
};

export default Scroller;

import s from "./Loader.module.css";
import loader from "./loader.png";

export const Loader = () => (
  <img src={loader} alt="loader" className={s.loader} />
);

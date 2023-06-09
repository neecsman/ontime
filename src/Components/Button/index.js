import style from "./button.module.scss";

import React from "react";

const Button = ({
  children,
  primary,
  profile,
  xl,
  tarifs,
  auth,
  cancel,
  repeat,
  onClick,
}) => {
  return primary ? (
    <button onClick={onClick} className={style.primary}>
      {children}
    </button>
  ) : profile ? (
    <button onClick={onClick} className={style.profile}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.0001 0.599854C7.84879 0.599854 8.66272 0.936995 9.26284 1.53711C9.86296 2.13723 10.2001 2.95116 10.2001 3.79985C10.2001 4.64855 9.86296 5.46248 9.26284 6.06259C8.66272 6.66271 7.84879 6.99985 7.0001 6.99985C6.1514 6.99985 5.33747 6.66271 4.73736 6.06259C4.13724 5.46248 3.8001 4.64855 3.8001 3.79985C3.8001 2.95116 4.13724 2.13723 4.73736 1.53711C5.33747 0.936995 6.1514 0.599854 7.0001 0.599854ZM7.0001 8.59985C10.5361 8.59985 13.4001 10.0319 13.4001 11.7999V13.3999H0.600098V11.7999C0.600098 10.0319 3.4641 8.59985 7.0001 8.59985Z"
          fill="#FFD057"
        />
      </svg>
    </button>
  ) : xl ? (
    <button onClick={onClick} className={style.xl}>
      {children}
    </button>
  ) : tarifs ? (
    <button onClick={onClick} className={style.tarifs}>
      {children}
    </button>
  ) : auth ? (
    <button onClick={onClick} className={style.auth}>
      {children}
    </button>
  ) : cancel ? (
    <button onClick={onClick} className={style.cancel}>
      {children}
    </button>
  ) : repeat ? (
    <button onClick={onClick} className={style.repeat}>
      {children}
    </button>
  ) : (
    <button onClick={onClick} className={style.secondary}>
      {children}
    </button>
  );
};

export default Button;

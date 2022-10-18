import React from "react";

export default function Status({
  size = "2.4rem",
  fill = "none",
  color = "#06C270",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM10.7423 13.9429L15.9576 8.48201C16.2437 8.18245 16.7184 8.17153 17.018 8.45761C17.3175 8.74369 17.3285 9.21844 17.0424 9.51799L11.3122 15.518C11.0274 15.8163 10.5552 15.8286 10.2552 15.5455L6.98533 12.4608C6.68404 12.1765 6.67021 11.7019 6.95446 11.4006C7.2387 11.0993 7.71337 11.0854 8.01467 11.3697L10.7423 13.9429Z"
        fill={color}
      />
    </svg>
  );
}

export const SuccessIcon = ({ size = "2.4rem", color = "#06C270" }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ verticalAlign: "middle" }}
    >
      <path
        fill={color}
        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      />
    </svg>
  );
};

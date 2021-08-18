export const RightToLeftLine = ({ strokeDasharray, strokeWidth }) => <svg
  width={192}
  height={192}
  viewBox="0 0 192 192"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 190L190 2"
    stroke="currentColor"
    strokeWidth={strokeWidth || 3}
    strokeLinecap="round"
    strokeDasharray={strokeDasharray || "5 10"}
  />
</svg>
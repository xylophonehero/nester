export const StraightPath = ({ strokeDasharray, strokeWidth }) => <svg
  width={4}
  height={125}
  viewBox="0 0 4 125"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 123L2.00001 2"
    stroke="currentColor"
    strokeWidth={strokeWidth || 3}
    strokeLinecap="round"
    strokeDasharray={strokeDasharray || "5 10"}
  />
</svg>

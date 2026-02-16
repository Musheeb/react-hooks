import { memo } from "react";

function Search2({ onChange }) {
  //   console.log("Search 2 rendered");
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search2);

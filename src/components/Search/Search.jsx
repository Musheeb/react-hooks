import { memo } from "react";

function Search(props) {
  //   console.log("Search rendered");
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(Search);

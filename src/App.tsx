import { useState } from "react";
import Select from "./Select";
const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "fOURSTH", value: 4 },
];

function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[1]
  );

  return (
    <>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </>
  );
}

export default App;

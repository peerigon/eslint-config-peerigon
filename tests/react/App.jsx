import { useEffect, useRef } from "react";

export function App() {
  for (let j = 0; j < 10; j++) {
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      console.log(j);
      // eslint-disable-next-line react-compiler/react-compiler
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src="some-image.jpg" />
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      {"Hello world"}
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function doesntWorkWithHmr() {}

export function InvalidRefAccessDuringRender() {
  const ref = useRef(null);
  // eslint-disable-next-line react-compiler/react-compiler
  const value = ref.current;
  return value;
}

// eslint-disable-next-line react/jsx-no-undef
<Hello name="John" />;

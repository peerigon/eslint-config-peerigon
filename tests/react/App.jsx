export function App() {
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

// eslint-disable-next-line react/jsx-no-undef
<Hello name="John" />;

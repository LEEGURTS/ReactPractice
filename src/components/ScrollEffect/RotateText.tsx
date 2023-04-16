interface RotateTextProps {
  barText: string;
  className?: string;
}

const RotateText: React.FunctionComponent<RotateTextProps> = ({
  barText,
  className,
}) => {
  return (
    <div className={"font-pretendard flex flex-col items-center " + className}>
      <p>I</p>
      {Array.from(barText)
        .map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                transform: "rotate(-90deg)",
                fontSize: "1em",
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          );
        })
        .reverse()}
      <p>I</p>
    </div>
  );
};

export default RotateText;

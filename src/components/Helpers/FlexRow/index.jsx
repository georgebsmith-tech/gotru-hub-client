export const FlexRow = ({ children }) => {
  return (
    <div className="flex" style={{ columnGap: "2vw" }}>
      {children}
    </div>
  );
};

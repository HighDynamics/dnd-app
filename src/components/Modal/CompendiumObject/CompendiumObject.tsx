const CompendiumObject = ({
  property,
  value,
}: {
  property: string;
  value: string;
}) => {
  function formatProperty(string: typeof property) {
    switch (string) {
      case "name":
      case "school":
      case "subSchool":
      case "descriptor":
        return "";
      case "description":
        return <hr className="blackHR" />;
      default:
        const spacedProperty = string.replace(/([A-Z])/g, " $1").trim();
        return spacedProperty + ": ";
    }
  }
  const formatValue = (string: typeof property) => {
    switch (string) {
      case "subSchool":
        return "(" + value + ")";
      case "descriptor":
        return "[" + value + "]";
      case "range":
        switch (true) {
          case /^\s*close\s*$/i.test(value):
            return "Close (25 ft. + 5 ft./2 levels)";
          case /^\s*medium\s*$/i.test(value):
            return "Medium (100 ft. + 10 ft./level)";
          case /^\s*long\s*$/i.test(value):
            return "Long (400 ft. + 40 ft./level)";
          default:
            return value;
        }
      case "weight":
        return value + " lbs.";
      default:
        return value;
    }
  };
  const formattedProperty = formatProperty(property);
  const formattedValue = formatValue(property);

  return (
    <>
      {property !== "id" && property !== "isSrd" && (
        <div className={"infoSheetContent " + property}>
          <span className="property">{formattedProperty}</span>
          <span className="value">{formattedValue}</span>
        </div>
      )}
    </>
  );
};
export default CompendiumObject;

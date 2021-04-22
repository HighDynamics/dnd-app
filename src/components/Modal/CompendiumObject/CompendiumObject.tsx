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
      {property !== "id" && (
        <div className={"infoSheetContent " + property}>
          <span className="property">{formattedProperty}</span>
          <span className="value">{formattedValue}</span>
        </div>
      )}
    </>
  );
};
export default CompendiumObject;

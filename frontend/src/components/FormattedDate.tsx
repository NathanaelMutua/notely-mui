import React from "react";

interface FormattedDateProps {
  isoDate: string;
}

// accepts the isoData as a prop then returns
const FormattedDate: React.FC<FormattedDateProps> = ({ isoDate }) => {
  const date = new Date(isoDate);
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <span>{formatted}</span>;
};

export default FormattedDate;

import React from "react";

interface FeedbackToastProps {
  type: "success" | "error" | "loading";
  message: string;
}

const FeedbackToast: React.FC<FeedbackToastProps> = ({ type, message }) => {
  const style = {
    success: { color: "green" },
    error: { color: "red" },
    loading: { color: "blue" }
  }[type];

  return <div style={style}>{message}</div>;
};

export default FeedbackToast;

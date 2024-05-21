import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, subject, message
}) => (
  <div>
    <h1>{name}</h1>
    <h2> {subject} </h2>
    <h3> {message} </h3>
  </div>
);

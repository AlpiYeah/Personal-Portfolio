import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, subject, message, email
}) => (
  <div>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <h3> {subject} </h3>
    <h4> {message} </h4>
  </div>
);

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const sendMail = async () => {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Test Mail",
        message: "<h3>Hello from React 🚀</h3>",
      }),
    });

    const data = await res.json();

    if (data.success) alert("Mail Sent!");
    else alert("Mail Failed");
  };

  return (
    <div style={{ padding: "40px" }}>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendMail}>Send</button>
    </div>
  );
}

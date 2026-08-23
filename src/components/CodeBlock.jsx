import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({
  code,
  language = "javascript",
  filename = "code",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="code-block">
      <div className="code-block-header">

        <div className="code-window-controls">
          <span className="code-dot red"></span>
          <span className="code-dot yellow"></span>
          <span className="code-dot green"></span>
        </div>

        <span className="code-filename">
          {filename}
        </span>

        <button
          className="code-copy-btn"
          onClick={handleCopy}
        >
          {copied ? "✓ Copied" : "📋 Copy"}
        </button>

      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
            margin: 0,
            padding: "28px 22px",
            background: "transparent",
            fontSize: "14px",
            lineHeight: "1.7",
        }}
        codeTagProps={{
            style: {
            background: "transparent",
            padding: 0,
            margin: 0,
            },
        }}
        wrapLongLines
        >
        {code}
        </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;



// <CodeBlock
//   filename="first_call.py"
//   language="python"
//   code={`# pip install python-dotenv
// from dotenv import load_dotenv
// from openai import OpenAI

// load_dotenv()

// client = OpenAI()

// response = client.chat.completions.create(
//     model="gpt-4o-mini",
//     messages=[
//         {"role": "user", "content": "Hello!"}
//     ]
// )

// print(response.choices[0].message.content)
// `}
// />


// <CodeBlock
//   filename="UserService.java"
//   language="java"
//   code={`@Cacheable("users")
// public User getUser(Long id) {
//     return userRepository.findById(id)
//         .orElseThrow();
// }`}
// />


// <CodeBlock
//   filename="App.jsx"
//   language="javascript"
//   code={`const developer = {
//   name: "Vikram Hankare",
//   role: "Backend Engineer",
//   stack: "Java + Spring Boot"
// };`}
// />
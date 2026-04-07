export default function Message({ role, content }: any) {
  const isUser = role === "user";

  // limpieza de texto
  const cleanText = content
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/###/g, "")
    .replace(/##/g, "");

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-6 py-4 rounded-2xl max-w-xl shadow-sm leading-relaxed ${
          isUser
            ? "bg-[#C9A15D] text-white"
            : "bg-white text-[#1A1A1A]"
        }`}
      >
        {cleanText.split("\n").map((line: string, i: number) => (
          <p key={i} className="mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

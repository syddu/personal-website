import { useState } from "react";

const AskTutor = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:8000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: question }),
      });

      const data = await res.json();
      setResponse(data.answer || "No response received.");
    } catch (err) {
      setResponse("Error contacting tutor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4 bg-background p-6 rounded-xl shadow-md">
      <form onSubmit={handleAsk} className="flex flex-col gap-4">
        <label className="font-mono text-foreground text-sm sm:text-base">
          Ask a question about MIT 6.3900:
        </label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. What is logistic regression?"
          className="w-full p-3 rounded-md bg-foreground text-background font-mono"
          rows={4}
        />
        <button
          type="submit"
          className="bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition"
          disabled={loading || !question.trim()}
        >
          {loading ? "Asking..." : "Ask Tutor"}
        </button>
      </form>

      {response && (
        <div className="mt-4 font-mono text-sm text-foreground whitespace-pre-wrap">
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default AskTutor;
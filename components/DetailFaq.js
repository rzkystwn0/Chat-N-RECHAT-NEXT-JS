export default function DetailFaq({ question, answer }) {
  return (
    <details className="open:bg-sky-600 shadow-xl shadow-blue-500/50 transition-all open:text-white px-8 py-4 rounded-lg cursor-pointer my-6">
      <summary className="open:text-white">
        <p className="inline-block text-black/80 DM-Sans text-lg tracking-wider">{question}</p>
        <hr className="my-3" />
      </summary>

      <p className="SourceSans text-base">
          {answer}
      </p>
    </details>
  );
}

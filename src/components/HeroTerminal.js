import React, { useState } from 'react';
import { FaTerminal, FaCheck, FaCopy } from 'react-icons/fa';

const codeSnippets = {
  'agent_runner.py': {
    filename: 'agent_runner.py',
    lines: [
      { num: 1, type: 'comment', content: '# Hybrid RPA Execution Agent' },
      { num: 2, type: 'code', content: 'from enterprise_bot import SlotScheduler, AuthHMAC' },
      { num: 3, type: 'code', content: '' },
      { num: 4, type: 'code', content: 'def execute_slot_booking(manifest_batch):' },
      { num: 5, type: 'code', content: '    token = AuthHMAC.sign(manifest_batch.client_id)' },
      { num: 6, type: 'code', content: '    scheduler = SlotScheduler(credentials=token)' },
      { num: 7, type: 'code', content: '    ' },
      { num: 8, type: 'code', content: '    result = scheduler.reserve_dock(' },
      { num: 9, type: 'code', content: '        facility="DNATA_TERMINAL_2",' },
      { num: 10, type: 'code', content: '        strategy="EARLIEST_SLOT"' },
      { num: 11, type: 'code', content: '    )' },
      { num: 12, type: 'code', content: '    return {"status": "SUCCESS", "slot_id": result.id}' },
    ],
    status: 'RPA Agent Active · 100% manual entry eliminated',
  },
  'rag_pipeline.py': {
    filename: 'rag_pipeline.py',
    lines: [
      { num: 1, type: 'comment', content: '# Semantic RAG Grading Pipeline' },
      { num: 2, type: 'code', content: 'from langchain_core.rag import RAGChain' },
      { num: 3, type: 'code', content: 'from vectorstore import FAISSIndex' },
      { num: 4, type: 'code', content: '' },
      { num: 5, type: 'code', content: 'async def evaluate_student_submission(exam_data):' },
      { num: 6, type: 'code', content: '    rubric = FAISSIndex.retrieve(exam_data.topic, k=4)' },
      { num: 7, type: 'code', content: '    chain = RAGChain(model="gemini-pro", rubric=rubric)' },
      { num: 8, type: 'code', content: '    ' },
      { num: 9, type: 'code', content: '    score, feedback = await chain.grade(exam_data.answers)' },
      { num: 10, type: 'code', content: '    validated = BLEURT.validate(feedback, threshold=0.88)' },
      { num: 11, type: 'code', content: '    return {"grade": score, "feedback": validated.text}' },
    ],
    status: 'RAG Pipeline Ready · BLEURT validated',
  },
};

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState('agent_runner.py');
  const [copied, setCopied] = useState(false);

  const snippet = codeSnippets[activeTab];

  const handleCopy = () => {
    const rawText = snippet.lines.map(l => l.content).join('\n');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero-terminal" role="region" aria-label="Interactive Code Terminal">
      <div className="hero-terminal__header">
        <div className="hero-terminal__controls">
          <span className="dot dot--close" />
          <span className="dot dot--min" />
          <span className="dot dot--max" />
        </div>
        <div className="hero-terminal__tabs">
          {Object.keys(codeSnippets).map(tab => (
            <button
              key={tab}
              type="button"
              className={`hero-terminal__tab ${activeTab === tab ? 'hero-terminal__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <FaTerminal className="tab-icon" />
              <span>{tab}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="hero-terminal__copy-btn"
          onClick={handleCopy}
          title="Copy snippet"
          aria-label="Copy snippet to clipboard"
        >
          {copied ? <FaCheck className="copy-icon copied" /> : <FaCopy className="copy-icon" />}
        </button>
      </div>

      <div className="hero-terminal__body">
        <pre className="hero-terminal__code">
          <code>
            {snippet.lines.map(line => (
              <div key={line.num} className="code-line">
                <span className="line-num">{line.num}</span>
                <span className={`line-content ${line.type === 'comment' ? 'code-comment' : ''}`}>
                  {line.content}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="hero-terminal__footer">
        <span className="status-indicator">
          <span className="status-indicator__dot" />
          <span className="status-indicator__text">{snippet.status}</span>
        </span>
      </div>
    </div>
  );
}

import { useState } from 'react';
import './App.css';
import { Questions } from './QueAns';

function App() {
  const [ans, setAns] = useState(Questions[0].id);
  const [modal, setModal] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  return (
    <>
      <button className='faqbtn' onClick={() => setModal(true)}>FAQs</button>
      <div
        className={`modaloverlay ${modal ? 'activemodal' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className={`modaldiv ${modal ? 'activemodal' : ''}`}>
          <div className='faq'>
            <h1>Frequently Asked Questions (FAQs)  
              <span onClick={() => setModal(false)}>❌</span>
            </h1>
            <div className='faqOuter'>
              {Questions.map((faqitems) => {
                return (
                  <div className='faqItems' key={faqitems.id}>
                    <h2 onClick={() => setAns(faqitems.id)}>{faqitems.question}</h2>
                    <p className={ans === faqitems.id ? 'activeans' : ''}>{faqitems.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';

const ContactForm = () => {
  return (
    <section className="section container">
      <h2 className="text-center">여행 문의</h2>
      <form style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '16px' }}>
          <label>이름</label>
          <input type="text" className="card" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label>이메일</label>
          <input type="email" className="card" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label>문의 내용</label>
          <textarea className="card" rows="5" style={{ width: '100%' }}></textarea>
        </div>
        <button type="submit" className="btn">보내기</button>
      </form>
    </section>
  );
};

export default ContactForm;
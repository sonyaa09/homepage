import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    { name: '이정민', quote: '맞춤 여행 정말 최고였어요! 덕분에 가족과 좋은 추억 만들었어요.' },
    { name: 'Anna Smith', quote: 'Wonderful experience in Korea! Thank you Net Tour!' },
  ];

  return (
    <section className="section container">
      <h2 className="text-center">고객 후기</h2>
      {testimonials.map((item, i) => (
        <div key={i} className="card">
          <p>"{item.quote}"</p>
          <p style={{ fontWeight: 'bold', marginTop: '12px' }}>- {item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default TestimonialSection;
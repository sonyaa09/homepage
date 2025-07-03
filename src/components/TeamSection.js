import React from 'react';

const TeamSection = () => {
  const team = [
    { name: '홍길동', role: '투어 기획자' },
    { name: '김영희', role: '문화 체험 전문가' },
    { name: '박철수', role: '고객 상담 매니저' },
  ];

  return (
    <section className="section container">
      <h2 className="text-center">Net Tour 팀</h2>
      {team.map((member, idx) => (
        <div key={idx} className="card">
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
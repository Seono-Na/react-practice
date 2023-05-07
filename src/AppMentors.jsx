import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: "서노",
    title: "개발자",
    mentors: [
      {
        name: "존",
        title: "시니어개발자",
        id: "01001",
      },
      {
        name: "제임스",
        title: "시니어개발자",
        id: "01002",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        }}
      >
        멘토의 이름 바꾸기
      </button>
    </div>
  );
}

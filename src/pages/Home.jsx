import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarStyles.css";

function Home() {
  const [date, setDate] = useState(new Date()); // 선택된 날짜
  const [notes, setNotes] = useState({}); // 날짜별 메모 저장
  const [input, setInput] = useState(""); // 입력값

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setInput(notes[selectedDate.toDateString()] || ""); // 기존 메모 불러오기
  };

  const handleSaveNote = () => {
    setNotes({ ...notes, [date.toDateString()]: input });
    alert("메모가 저장되었습니다!");
  };

  return (
    <div className='calendar-container'>
      <h1 style={{ textAlign: "center" }}>📅 날짜 선택 및 메모</h1>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) =>
          view === "month" && date.toDateString() === new Date().toDateString()
            ? "highlight-today"
            : ""
        }
      />

      <h2>{date.toDateString()}의 메모</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='메모를 입력하세요.'
        rows={4}
      />
      <br />
      <button onClick={handleSaveNote}>저장하기</button>
    </div>
  );
}

export default Home;

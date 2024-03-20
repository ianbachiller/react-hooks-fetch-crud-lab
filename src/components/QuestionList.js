import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [ questions, setQuestions ] = useState([])

  function handleDeleteItem(deletedItem) {
    const updatedItems = questions.filter((item) => item.id !== deletedItem.id );
    setQuestions(updatedItems)
  }
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then(qs => setQuestions(qs))
  }, [])
  const allQuestions = questions.map(q => (
          <QuestionItem key={q.id} question={q} onDeleteItem={handleDeleteItem} />
          ))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions}</ul>
    </section>
  );
}

export default QuestionList;

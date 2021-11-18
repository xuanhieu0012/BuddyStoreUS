import React,{useState, useEffect} from "react";

function QuestionList(){
    const [questionData, setQuestionData] = useState(null)
    const [toggleQuestion, setToggleQuestion] = useState(false)
    useEffect(() =>{
        fetch('/question_from_customers')
        .then(res => res.json())
        .then(questions => setQuestionData(questions))
    },[toggleQuestion])
    function handleDeleteQuestion(id){
        fetch(`/question_from_customers/${id}`,{
            method: 'DELETE'
        })
        setToggleQuestion(toggleQuestion => !toggleQuestion)
    }
    const displayQuestion = questionData === null ? null : questionData.map(question => <div key={question.id} className="each-question-container">
        <div className='question-id'>
            <h3>{question.id}</h3>
        </div>
        <div className='question-name'>
            <h3>{question.name}</h3>
        </div>
        <div className='question-email'>
            <h3>{question.email}</h3>
        </div>
        <div className="question-description">
            <p>{question.description}</p>
        </div>
        <button onClick={() =>handleDeleteQuestion(question.id)}>Solve</button>
    </div>)
    return <div className="question-container">
        {questionData === null || questionData.length === 0? <h2>You don't have any questions from customers</h2> :<div className="header-question-list">
            <div className="question-list-id">
                <h2>ID</h2>
            </div>
            <div className="question-list-name">
                <h2>Name</h2>
            </div>
            <div className='question-list-email'>
                    <h2>Email</h2>
            </div>
            <div className="question-list-description">
                <h2>Description</h2>
            </div>
        </div>}
        {displayQuestion}
    </div>
}

export default QuestionList;
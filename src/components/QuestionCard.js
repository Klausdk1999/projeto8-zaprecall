export default function QuestionCard({ index, object, setState}) {
    return(
        <div  className="card beige" onClick={()=>setState(index,"answer")}>
            <h2>{object.question}</h2>
            <img src="./media/setinha.png" alt="seta" />     
        </div>
    )
}
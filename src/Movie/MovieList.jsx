import Movietem from "./Movietem";

const MovieList = ({data ,onDel,onEdit}) => {
    return (
        <div className="con2">
            <p>
                <span className="total">
               <span className="firstSpan">장르</span><span>제목</span><span>주인공</span><span>개봉일</span><span>관리</span>
               
                </span>
            </p>        
            <ul className="list">
               {
               data.map(item => <Movietem key ={item.id} item={item} onEdit={onEdit} onDel={onDel} /> )
               }
               </ul>
        </div>
    );
};

export default MovieList;
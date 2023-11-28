const MovieItem = ({item, onDel,onEdit}) => {   
    const {id,genre, title, hero, date} = item
    return (
        <li>
            <p><span>{genre}</span></p>
            <p><span>{title}</span></p>
            <p><span>{hero}</span></p>
            <p><span>{date}</span></p>
            <p><span></span><button onClick={()=> onEdit(id)}>수정</button><button onClick={()=> onDel(id)}>삭제</button></p>

           
        </li>
    );
};

export default MovieItem;
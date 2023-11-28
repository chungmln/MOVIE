const MovieForm = ({changeInput,onSubmit,Movie,textRef,isEdit}) => {
    const {genre, title, hero, date} = Movie
    

    return (
        
        <div className="box con1">
            <form onSubmit={onSubmit}>
                
                <p>
                    <label htmlFor="">장르</label>
                    <input placeholder="장르를 입력하시오" type="text" value={genre} name="genre" onChange={changeInput} ref={textRef} />
                </p>
                <p>
                    <label htmlFor="">제목</label>
                    <input  placeholder="제목을 입력하시오" type="text" value={title} name="title" onChange={changeInput} ref={textRef}  />
                </p>
                <p>
                    <label htmlFor="">주인공</label>
                    <input placeholder="주인공을 입력하시오" type="text" value={hero} name="hero" onChange={changeInput} ref={textRef}  />
                </p>
                <p>
                    <label htmlFor="">개봉일</label>
                    <input type="date" value={date} name="date"  onChange={changeInput} ref={textRef}  />
                </p>
                <p>
                    <button type="submit">
                    {  isEdit ? '수정':'등록' }
                    </button>
                </p>
            </form>
        </div>
    );
};

export default MovieForm;
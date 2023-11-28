import './style.scss'
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { useEffect, useRef, useState } from 'react';

const Movie = () => {
    const [data,setData] = useState([])
    const [Movie, setMovie] = useState({
        genre: '', title: '', hero: '', date:0
    })



    const [isEdit, setIsEdit] = useState(false)

    const [ hap , setHap ] = useState(0)


    const no = useRef(1)
    const textRef = useRef()

    const onTest = (e) => {
        const {value} = e.target
        setData([...data].sort((a,b) => a[value] > b[value] ? 1 : -1))
    }



    const changeInput = e => {
        const {name, value} = e.target
        setMovie({
            ...Movie,
            [name]:value
        })
    }

    const onSubmit = e => {
        e.preventDefault();


        if(isEdit){
            setData(data.map( item => item.id === Movie.id ? Movie : item ))
            setMovie({
                genre: '', title: '', hero: '', date:0
            })
            setIsEdit(false)
        }else{
            Movie.id = no.current++
            setData([ 
                ...data,
                Movie
            ])
            setMovie({
                genre: '', title: '', hero: '', date:0
            })
            textRef.current.focus()
        }

    }


    useEffect(() => {
        textRef.current.focus()
    },[isEdit])

    useEffect(() => {
        setHap(data.reduce( (acc,curr) => {
                return acc + curr.total
                },0))
        },[data])

    
        const onDel = (id) => {
            setData(data.filter(item => item.id !== id)) 
            }
    
            const onDelAll = () => {
                setData([])
            }

            const onEdit = ( id ) => {
                setIsEdit(!isEdit)
                setMovie(data.find(item => item.id === id))
            }

            const onUpdate = (user) => {
                setData(data.map(item => item.id === user.id ? user : item))
                setIsEdit(false)
            }



    return (
        <>
        <h2 className='h2'>영화 관리 리스트</h2>
        <select onClick={onTest}>
                    <option >=== 정렬 ===</option>
                    <option value="genre">장르</option>
                    <option value="title">제목</option>
                    <option value="hero">주인공</option>
                    <option value="date">개봉일</option>
                </select>
            <div className="con-box">
                <MovieForm onTest={onTest} changeInput={changeInput} onSubmit={onSubmit} onUpdate={onUpdate} Movie={Movie} textRef={textRef} onDel={onDel} isEdit={isEdit}/>
                <MovieList data={data} onDel={onDel} onDelAll={onDelAll} onEdit={onEdit} hap={hap} onTest={onTest}/>
            </div>
            
        </>
    );
};

export default Movie;
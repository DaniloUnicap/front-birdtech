import { useParams } from 'react-router-dom'
import { cursosFront, cursosBack, cursosFerramentasAgeis, cursosRedes } from '../data/cursos'
import "../App.css"
import { Link } from "react-router-dom"

export const Cursos = () => {

    const { categoria } = useParams();
    let cursos;
    if (categoria === 'frontend') {
        cursos = cursosFront;
    } else if (categoria === 'backend') {
        cursos = cursosBack;
    } else if (categoria === 'ferramentasageis') {
        cursos = cursosFerramentasAgeis;
    } else if (categoria === 'redes') {
        cursos = cursosRedes;
    }

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Cursos de {categoria}</h1>
            <div className='max-w-[320px] grid grid-cols-1 gap-y-8 mx-auto'>
                {cursos.map(item => (
                    <Link to={`/cursos/${categoria}/${item.titulo}`} key={item.titulo}>
                    <div className='sombra flex items-center py-2 px-4'>
                      <img src={item.imagem} alt={item.titulo} className='w-24' />
                      <h2 className='font-bold w-full text-center'>{item.titulo}</h2>
                    </div>
                  </Link>
                ))}
            </div>

        </div>
    )
}
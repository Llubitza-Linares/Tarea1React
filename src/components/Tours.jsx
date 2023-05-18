import Tour from './Tour'
import Title from './Title'
import { tours } from '../data/data'

export const Tours = () => {
    return(
    <section className="section" id="materias">
      <Title title='Nuestras' subTitle='Materias'></Title>

    <div className="section-center featured-center">
    {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} />;
      })}
 
    </div>
  </section>)
}
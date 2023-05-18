import { services } from "../data/data"
import Service from "./Service";
import Title from "./Title"

export const Services = () => {
    return (
    <section className="section services" id="mercado">
    <Title title='mercado' subTitle='laboral' />
    <div className="section-center services-center">
      
      {services.map((service) => {
        return <Service {...service} key={service.id} />;
      })}
    </div>
  </section>
  )}
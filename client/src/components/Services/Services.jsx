import React from 'react'
import { FaVrCardboard, FaCamera, FaPlane, FaBullhorn } from 'react-icons/fa';
import { BACKEND_URL, API_URLS } from '../../Common/urls';

const ICONS = [FaVrCardboard, FaCamera, FaPlane, FaBullhorn];
const BG_COLORS = ['bg-amber-400', 'bg-cyan-400', 'bg-orange-400', 'bg-green-400'];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const ServiceCard = ({
  title,
  description,
  bgColor,
  icon: Icon
}) => {
  const RandomBg = bgColor || getRandomItem(BG_COLORS);
  const RandomIcon = Icon || getRandomItem(ICONS);

  return (
    <div className={`relative p-8 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-500 overflow-hidden ${RandomBg}`}>
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-3xl 
        group-hover:translate-x-[200%] group-hover:translate-y-[200%] duration-1000 transition-transform"></div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform 
        group-hover:scale-125 group-hover:rotate-45 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="text-white mb-6 transform group-hover:scale-110 group-hover:translate-y-[-10px] transition-transform duration-500">
          <RandomIcon size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white transform group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
        <p className="text-white/90 leading-relaxed transform group-hover:translate-y-1 transition-transform duration-500">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = React.useState([]);
  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}${API_URLS.GET_SERVICES}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }

        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchServices();
  }, []);
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

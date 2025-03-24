export default function Team() {
    const team = [
      { name: "Фёдор Евгеньевич", role: "Генеральный директор", img: "/assets/images/team/1.jpg" },
      { name: "Александр Иванович", role: "Главный технолог", img: "/assets/images/team/2.jpg" },
      { name: "Дмитрий Кузнецов", role: "Старший мастер", img: "/assets/images/team/3.jpg" },
      { name: "Михаил Федоров", role: "Менеджер проектов", img: "/assets/images/team/4.jpg" },
      { name: "Василий Николаевич", role: "Менеджер проектов", img: "/assets/images/team/5.jpg" },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Наша <span className="text-blue-500">команда</span>
          </h2>
  
          <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden group">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-[300px] w-full object-cover transform transition duration-300 group-hover:scale-110"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-500 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center text-gray-600">
            <p>
              Наша команда состоит из опытных мастеров и квалифицированных специалистов, 
              прошедших тщательный отбор и регулярное обучение. Каждый сотрудник компании 
              – профессионал, гарантирующий высокое качество работы.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
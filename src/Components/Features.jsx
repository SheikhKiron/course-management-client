export default function Features() {
  const features = [
    {
      title: 'Expert Instructors',
      desc: 'Learn from experienced and certified professionals.',
      icon: '🎓',
    },
    {
      title: 'Lifetime Access',
      desc: 'Get lifetime access to all your enrolled courses.',
      icon: '📚',
    },
    {
      title: 'Certificate',
      desc: 'Receive a certificate after completing courses.',
      icon: '🏆',
    },
    {
      title: 'Flexible Learning',
      desc: 'Learn anytime, anywhere from any device.',
      icon: '📱',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Why Choose Our Courses?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

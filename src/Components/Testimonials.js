export default function Testimonials() {
  const reviews = [
    {
      name: 'Ayesha Rahman',
      role: 'Web Development Student',
      message:
        'এই প্ল্যাটফর্ম থেকে Full Stack Course করে আমি freelancing শুরু করেছি। শিক্ষকদের ব্যাখ্যা অসাধারণ!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99d0cUkwsI4uXCp37HIl10iVb_1I6r3sGWm2PGHc-hGgfn5duymoNtjcBWG0qclxqSG8&usqp=CAU',
    },
    {
      name: 'Mehedi Hasan',
      role: 'JavaScript Student',
      message:
        'JavaScript কোর্সটা আমার কাছে খুবই helpful লেগেছে। ধাপে ধাপে শেখানোর জন্য বুঝতে সুবিধা হয়েছে।',
      img: 'https://png.pngtree.com/png-vector/20241119/ourmid/pngtree-portrait-of-a-young-male-student-with-books-and-backpack-representing-png-image_14499889.png',
    },
    {
      name: 'Sadia Islam',
      role: 'UI/UX Student',
      message:
        'Course content, support, and design resources—সবকিছুই খুব professional ছিল। Highly recommended!',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99d0cUkwsI4uXCp37HIl10iVb_1I6r3sGWm2PGHc-hGgfn5duymoNtjcBWG0qclxqSG8&usqp=CAU',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={r.img}
                className="w-20 h-20 rounded-full mx-auto"
                alt={r.name}
              />

              <p className="text-gray-600 text-sm mt-4 italic">"{r.message}"</p>

              <h3 className="font-bold mt-4">{r.name}</h3>
              <p className="text-sm text-blue-600">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Categories() {
  const categories = [
    {
      name: 'Web Development',
      description: 'HTML, CSS, JavaScript, React, Next.js এবং আরও অনেক কিছু।',
      icon: '💻',
    },
    {
      name: 'Mobile Development',
      description: 'Android, Flutter, React Native দিয়ে অ্যাপ ডেভেলপমেন্ট।',
      icon: '📱',
    },
    {
      name: 'UI/UX Design',
      description: 'Figma, Adobe XD, প্রোটোটাইপিং, ওয়্যারফ্রেম ডিজাইন।',
      icon: '🎨',
    },
    {
      name: 'Backend Development',
      description: 'Node.js, Express, MongoDB, API Development।',
      icon: '🛠️',
    },
    {
      name: 'Digital Marketing',
      description: 'SEO, Facebook Ads, Google Ads, ব্র্যান্ড প্রোমোশন।',
      icon: '📢',
    },
    {
      name: 'Cyber Security',
      description: 'Ethical hacking, penetration testing, security basics।',
      icon: '🛡️',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Categories</h1>
        <p className="text-gray-600 mb-12">
          আমাদের বিভিন্ন টপিক-এর কোর্স ক্যাটেগরি থেকে যেকোনোটি সিলেক্ট করে শিখতে
          শুরু করুন।
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {cat.name}
              </h2>
              <p className="text-gray-600">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

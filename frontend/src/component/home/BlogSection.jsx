import React from 'react';

const blogs = [
  {
    title: 'How to Stay Consistent with Your Fitness Goals',
    excerpt:
      'Consistency is key to achieving fitness goals. Here are some strategies to stay on track...',
    date: 'July 25, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1589927986089-35812388d1a7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjk1OXwwfDF8c2VhcmNofDgxfHxmaXRUZXh8ZW58MHx8fHwxNjg4NzAwMzYw&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#',
  },
  {
    title: '5 Essential Exercises for a Full Body Workout',
    excerpt:
      'A well-rounded fitness routine is essential for overall health. Here are five exercises you should include...',
    date: 'July 20, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1586157090103-b0f56c3188b2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDM0fHxmb3JtZW1vcnBoaXxlbnwwfHx8fDE2ODg2NzQ4MzM&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#',
  },
  {
    title: 'The Importance of Hydration During Workouts',
    excerpt:
      'Hydration plays a crucial role in optimizing your performance. Learn how much water you need...',
    date: 'July 18, 2025',
    imageUrl:
      'https://images.unsplash.com/photo-1582137557357-1f0c4e6b8940?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjk1OXwwfDF8c2VhcmNofDJ8fGZpcnN0fGVufDB8fHx8fDE2ODg3NzkwNzc&ixlib=rb-1.2.1&q=80&w=1080',
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Latest News & Blog Posts</h2>
        <p className="text-gray-700 mb-12 text-lg">
          Stay updated with the latest fitness tips, news, and trends to help you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <p className="text-sm text-gray-500 mt-4">{blog.date}</p>
                <a
                  href={blog.link}
                  className="inline-block mt-6 text-purple-700 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

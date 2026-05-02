import CourseCard from "./CourseCard";


const PopularCourses = async () => {
    const res = await fetch('https://b13-a8-skill-sphere-online-learning.vercel.app/data.json');
    const courses = await res.json();
    const topCourses = courses.slice(0, 6); // Get the top 6 courses
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'> Popular Courses </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
    );
};

export default PopularCourses;
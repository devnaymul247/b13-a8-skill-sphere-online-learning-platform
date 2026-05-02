import CourseCard from "@/components/CourseCard";


const allCoursesPage = async () => {
    const res = await fetch('https://b13-a8-skill-sphere-online-learning.vercel.app/data.json');
    const allCourses = await res.json();
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'> All Courses </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {allCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
    );
};

export default allCoursesPage;
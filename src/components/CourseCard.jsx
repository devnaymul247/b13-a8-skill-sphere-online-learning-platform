import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';

const CourseCard = ({ course }) => {
    return (
        <Card className='border'>
            <div className=' aspect-square relative'>  
                {/* [object-cover,aspect-square, relative] made the img same size */}
                <Image src={course.imageUrl} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-t-lg object-cover' /> 

                <Chip className='absolute top-4 right-4 bg-white/80 text-sm font-medium text-gray-800'>{course.category}</Chip>
            </div> 
            <div>
                <h2 className='text-xl font-bold'>{course.title}</h2>
                <p className='text-lg font-semibold'>Like: {course.likes}</p>
                <p className='text-gray-600'>{course.prompt}</p>
            </div>
            <Button variant='tertiary'>View Details</Button>
        </Card>
    );
};

export default CourseCard;
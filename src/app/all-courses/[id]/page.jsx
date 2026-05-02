import { Button, Chip, Card, CloseButton } from "@heroui/react";
import Image from "next/image";


const courseDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://b13-a8-skill-sphere-online-learning.vercel.app/data.json');
    const courses = await res.json();
    const course = courses.find(c => c.id === parseInt(id));
    return (
        <Card className="w-full items-stretch md:flex-row my-6">
            <div className=' aspect-square relative w-[30vw] shrink-0 overflow-hidden rounded-2xl '>
                {/* [object-cover,aspect-square, relative] made the img same size */}
                <Image src={course.imageUrl} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-t-lg object-cover' />

                <Chip className='absolute top-4 right-4 bg-white/80 text-sm font-medium text-gray-800'>{course.category}</Chip>
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">{course.title}</Card.Title>
                    <Card.Description>
                        {course.prompt}
                    </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Only 10 seats available</span>
                        <span className="text-xs text-muted">Admission ends Oct 10.</span>
                    </div>
                    <Button className="w-full sm:w-auto">Enroll Now</Button>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default courseDetailsPage;
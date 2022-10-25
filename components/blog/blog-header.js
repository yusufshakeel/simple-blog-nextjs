import Image from 'next/image';
import DateTimeService from "../../services/datetime-service";

function BlogHeader(props) {
    const { title, image, date } = props.blog;
    const formattedDate = DateTimeService().formattedDate(date);

    return (
        <header className="bg-light p-3 my-5">
            <Image src={image} alt={title} width={900} height={300} layout="responsive" />
            <h1>{title}</h1>
            <p>{formattedDate}</p>
        </header>
    );
}

export default BlogHeader;
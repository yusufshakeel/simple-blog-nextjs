import Link from 'next/link'
import Image from 'next/image'
import DateTimeService from "../../services/datetime-service";

export default function BlogCard(props) {
    const {title, image, excerpt, date, slug} = props.blog;

    const imagePath = `/images/${image}`;
    const blogLink = `/blog/${slug}`;

    const formattedDate = DateTimeService().formattedDate(date);

    return (
        <div className="col-4 my-3">
            <div className="card">
                <div><Image src={imagePath} alt={title} width={300} height={150} layout="responsive"/></div>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{formattedDate}</p>
                    <p className="card-text">{excerpt}</p>
                    <Link href={blogLink}><a>Read more</a></Link>
                </div>
            </div>
        </div>
    );
}
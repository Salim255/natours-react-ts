import { useSelector, useDispatch } from 'react-redux';
import './_overview.scss';
import type { AppDispatch, RootState } from '../../redux/store';
import { getTours } from './overviewSlice';
import { useEffect } from 'react';



const Overview = () => {
    const touro: {
        imageCover: string;
        name: string;
        duration: string;
        difficulty: string;
        summary: string;
        locations: {length: number};
        startLocation: {description: string};
        startDates: Date[];
        maxGroupSize: number;
        price: number;
        ratingsAverage: number;
        ratingsQuantity: number;
        slug: string;
    }[] = [];
    const {tours} = useSelector((store: RootState) => store.tours);
    console.log(tours);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        // call sever
        dispatch(getTours());
    }, [dispatch])
    return (
        <div>
            <main className='main card-container'>
                {
                    tours.map(tour => {
                        return(
                            <div className='card'>
                                <div className='card__header'>
                                    <div className='card__picture'>
                                        <div className='card__picture-overlay'></div>&nbsp;
                                        <img 
                                            src={'/img/tours/' + `${tour.imageCover}`}
                                            alt={tour.name}
                                            className='card__picture-img'
                                        />
                                        <h3 className='heading-tertirary'>
                                            <span>{tour.name}</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className='card__details'>
                                    <h4 className='card__sub-heading'>
                                        {tour.difficulty} {`${tour.duration}` + '-day tour'}
                                    </h4>
                                    <p className='card__text'> {tour.summary}</p>
                                    <div className="card__data">
                                        <svg className="card__icon">
                                        <use xlinkHref="/img/icons.svg#icon-map-pin" />
                                        </svg>
                                        <span>{tour.startLocation.description}</span>
                                    </div>
                                    <div className="card__data">
                                        <svg className="card__icon">
                                        <use xlinkHref="/img/icons.svg#icon-calendar" />
                                        </svg>
                                        <span>
                                        {new Date(tour.startDates[0]).toLocaleString("fr-FR", {
                                            month: "long",
                                            year: "numeric",
                                        })}
                                        </span>
                                    </div>

                                    <div className="card__data">
                                        <svg className="card__icon">
                                        <use xlinkHref="/img/icons.svg#icon-flag" />
                                        </svg>
                                        <span>{`${tour.locations.length} stops`}</span>
                                    </div>

                                    <div className="card__data">
                                        <svg className="card__icon">
                                        <use xlinkHref="/img/icons.svg#icon-user" />
                                        </svg>
                                        <span>{`${tour.maxGroupSize} people`}</span>
                                    </div>
                                </div>
                                {/* FOOTER */}
                                <div className="card__footer">
                                    <p>
                                        <span className="card__footer-value">{`$${tour.price}`}</span>{" "}
                                        <span className="card__footer-text">per person</span>
                                    </p>

                                    <p className="card__ratings">
                                        <span className="card__footer-value">{tour.ratingsAverage}</span>{" "}
                                        <span className="card__footer-text">
                                        {`rating (${tour.ratingsQuantity})`}
                                        </span>
                                    </p>

                                    <a className="btn btn--green btn--small" href={`/tour/${tour.slug}`} >
                                        Details
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Overview;
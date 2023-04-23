import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = 'https://api.unsplash.com/search/photos?query=dogs';

const Gallery = () => {
  const res = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios(`${url}`, {
        headers: {
          Authorization: `Client-ID 7MFASyusm572aMVe13YCJ1h-WrNlUnenamCsRV3sRLg`,
        },
      });

      return result.data;
    },
  });

  if (res.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (res.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error....</h4>
      </section>
    );
  }

  if (!res.data.results.length) {
    return (
      <section className='image-container'>
        <h4>No results found....</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {res.data.results.map((img) => {
        const url = img?.urls?.regular;

        return (
          <img
            key={img.id}
            src={url}
            alt={img.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};
export default Gallery;

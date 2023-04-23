import { useGlobalContext } from './context';

const SearchForm = () => {
  const handleSubmit = function (e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cats'
        />
        <button className='btn' type='submit'>
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

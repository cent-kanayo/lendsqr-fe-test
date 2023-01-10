import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../Context/context';

const FormModal = () => {
  const { modalLocation: location } = useGlobalContext();
  const formRef = useRef(null);

  useEffect(() => {
    const modal = formRef.current;
    modal.style.left = `${location.left}px`;
    modal.style.top = `${location.top}px`;
  }, [location.left, location.top]);
  return (
    <div className="table__filters" ref={formRef}>
      <form className="flex-col">
        <div className="filter-form">
          <label htmlFor="Organization">Organization</label>
          <select className="form-control" placeholder="Organization">
            <option value="">Select</option>
          </select>
        </div>
        <div className="filter-from">
          <label htmlFor="Username">Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="filter-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="filter-form">
          <label htmlFor="date">Date</label>
          <input type="date" placeholder="Date" />
        </div>
        <div className="filter-form">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" name="phoneNumber" placeholder="Phone number" />
        </div>
        <div className="filter-form">
          <label htmlFor="status">Status</label>
          <select name="status">
            <option value="">Select</option>
          </select>
        </div>
        <div className="flex-btw">
          <button>Reset</button>
          <button>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;

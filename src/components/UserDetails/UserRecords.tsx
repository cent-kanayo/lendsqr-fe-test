import { Users } from '../../../usertypes';

interface Prop {
  user: Users;
}

const UserRecords = ({ user }: Prop) => {
  return (
    <div className="user-records">
      <div className="user-records__personal container-divs">
        <h3 className="margin-bottom">Personal Information</h3>
        <div className="personal-records grid-4">
          <div className="bottom-margin">
            <p className="bottom-margin">full Name</p>
            <h6>{`${user.profile.firstName} ${user.profile.lastName}`}</h6>
          </div>
          <div className="bottom-margin">
            <p>Phone Number</p>
            <h6>{user.phoneNumber}</h6>
          </div>
          <div>
            <p>Email Address</p>
            <h6>{user.email}</h6>
          </div>
          <div>
            <p>Bvn</p>
            <h6>{user.profile.bvn}</h6>
          </div>
          <div>
            <p>Gender</p>
            <h6>{user.profile.gender}</h6>
          </div>
          <div>
            <p>Marital status</p>
            <h6>{user.profile.firstName}</h6>
          </div>
          <div>
            <p>Children</p>
            <h6>{`${user.profile.firstName} ${user.profile.lastName}`}</h6>
          </div>
          <div>
            <p>Type of residence</p>
            <h6>{user.profile.firstName}</h6>
          </div>
        </div>
      </div>
      <div className="user-records__education container-divs">
        <h3 className="margin-bottom">Education and Employment</h3>
        <div className="grid-4">
          <div>
            <p>level of education</p>
            <h6>{user.education.level}</h6>
          </div>
          <div>
            <p>employment status</p>
            <h6>{user.education.employmentStatus}</h6>
          </div>
          <div>
            <p>sector of employment</p>
            <h6>{user.education.sector}</h6>
          </div>
          <div>
            <p>Duration of employment</p>
            <h6>{user.education.duration}</h6>
          </div>
          <div>
            <p>office email</p>
            <h6>{user.education.officeEmail}</h6>
          </div>
          <div>
            <p>Monthly income</p>
            <h6>{user.education.monthlyIncome}</h6>
          </div>
          <div>
            <p>loan repayment</p>
            <h6>{user.education.loanRepayment}</h6>
          </div>
        </div>
      </div>
      <div className="user-records__socials container-divs">
        <h3 className="margin-bottom">Socials</h3>
        <div className="grid-4">
          <div>
            <p>Twitter</p>
            <h6>{user.socials.twitter}</h6>
          </div>
          <div>
            <p>Facebook</p>
            <h6>{user.socials.facebook}</h6>
          </div>
          <div>
            <p>Instagram</p>
            <h6>{user.socials.instagram}</h6>
          </div>
        </div>
      </div>
      <div className="user-records__guarantor container-divs">
        <h3 className="margin-bottom">Guarantor</h3>
        <div className="grid-4">
          <div>
            <p>full Name</p>
            <h6>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</h6>
          </div>
          <div>
            <p>Phone Number</p>
            <h6>{user.guarantor.phoneNumber}</h6>
          </div>
          <div>
            <p>Email</p>
            <h6>{user.guarantor?.email ?? 'guarantor@email.com'}</h6>
          </div>
          <div>
            <p>Relationship</p>
            <h6>{user.guarantor?.relationship ?? 'sister'}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRecords;

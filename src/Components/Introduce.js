import React from "react";

const introduce = () => {
  const calculatedate = () => {
    let today = new Date();
    let birthDate = new Date("1995/08/04");
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const Age = calculatedate();

  return (
    <div className="introduce">
      <p className="text-introductce-header">Introduce my Self</p>
      <div className="row">
        <div className="col-md-6 mb-2">
          <div
            className="d-img d-flex justify-content-center"
            data-aos="fade-up"
          >
            <img
              className="img-profile"
              src="https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/83844238_2861786250546688_6020598753675706368_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHDo0GPTrD-v6hIU4Dhu4w-V8kovgWSWzJXySi-BZJbMqa1Q5dx7UPiw-kRf6HOOZmEl2mMcmaJsGRZwZzxArzs&_nc_ohc=1d-eCxRP3qAAX_P6WL9&_nc_oc=AQn2It_SiBJtNQxjaNtIhPSmFPkgrgSlfdpvtZ8q9vN4oW8A2RlgwdWPuBRMVqoAH04&tn=mXDipP05ZQmPN48e&_nc_ht=scontent.fbkk22-8.fna&oh=00_AT8dq0QdiL4lLbZmkw-dIrtJFHcq_SyCES5jt4xB544QQg&oe=6263CD21"
            />
          </div>
        </div>
        <div className="col-md-6 mb-2 text-introduce" data-aos="fade-up">
          <p>
            Name : <span>Thaweeporn Areepun</span>{" "}
          </p>
          <p>
            Nickname : <span>Oil</span>
          </p>
          <p>
            Age : <span>{Age}</span>{" "}
          </p>
          <p>
            Nationality : <span>Thai</span>
          </p>
          <p>
            Status : <span>Single</span>
          </p>
          <p>
            Military status : <span>Completed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default introduce;

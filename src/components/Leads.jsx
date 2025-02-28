import React from "react";
import PropTypes from "prop-types";

const teamMembers = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team.png",
    fullName: "Akshay Kumar",
    designation: "Founder / CEO",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team.png",
    fullName: "Raima Ray",
    designation: "Business Head",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team.png",
    fullName: "Arjun Kapur",
    designation: "UI Design",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team.png",
    fullName: "Alia Bhatt",
    designation: "Marketing Head",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team.png",
    fullName: "Carl Paxton",
    designation: "Marketing",
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/team/team.png",
    fullName: "Lisa Bain",
    designation: "Marketing",
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="relative">
    {/* SVG Background Shape with Updated Colors */}
    <div className="absolute inset-0 flex items-end justify-center">
      <img
        alt=""
        className="w-full h-auto"
        style={{ zIndex: 1 }}
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjQzNiIgdmlld0JveD0iMCAwIDUyOCA0MzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfODEwXzE4MDIpIj4KICAgICAgICA8cGF0aCBkPSJNMjUxLjg4NiAyMy44NDY0QzI2My43NzggMi45NzY0OSAyOTMuODYzIDIuOTc2NTIgMzA1Ljc1NSAyMy44NDY1TDUxNC4zODMgMzg5Ljk4MUM1MjYuMTU5IDQxMC42NDcgNTExLjIzNSA0MzYuMzI4IDQ4Ny40NDkgNDM2LjMyOEg3MC4xOTE0QzQ2LjQwNTYgNDM2LjMyOCAzMS40ODEzIDQxMC42NDcgNDMuMjU3MiAzODkuOTgxTDI1MS44ODYgMjMuODQ2NFoiIGZpbGw9IiMwMjUwNjciLz4KICAgICAgICA8cGF0aCBkPSJNNDI2LjI4IDY4LjUwNDVDNDQ4Ljg2NiA2MC4zMTU0IDQ3MS43OCA3OS44MjA5IDQ2Ny4zMDMgMTAzLjQyNUwzODguODA5IDUxNy4yNThDMzg0LjM3NiA1NDAuNjI1IDM1Ni4zNjggNTUwLjUwMyAzMzguMjU4IDUzNS4wODdMMjAuNzY0NSAyNjQuODI3QzIuNjU0IDI0OS40MSA3LjkzMjc5IDIyMC4xODQgMzAuMjkyIDIxMi4wNzdMNDI2LjI4IDY4LjUwNDVaIiBmaWxsPSIjODY4Njg2Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzgxMF8xODAyIj48cmVjdCB3aWR0aD0iNTI4IiBoZWlnaHQ9IjQzNiIgZmlsbD0id2hpdGUiLz48L2NsaXBQYXRoPjwvZGVmcz4KPC9zdmc+Cg=="
      />
    </div>

    {/* Team Member Image */}
    <div className="relative z-10 flex items-center justify-center">
      <img
        src={member.picture}
        alt={member.fullName}
        className="h-auto w-full px-4 xl:px-12 mx-auto"
      />
    </div>

    {/* Info Card */}
    <div className="relative z-20 bg-white dark:bg-white shadow-xl rounded-xl p-6 text-center mt-[-20px]">
      <h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
      <h6 className="text-sm font-medium opacity-75">{member.designation}</h6>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
  }).isRequired,
};

const Leads = () => {
  return (
    <section className="ezy__team6 light py-14 w-full md:py-24 bg-white dark:bg-white text-black dark:text-black">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
              Our Experts Team
            </h2>
            <p>
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leads;

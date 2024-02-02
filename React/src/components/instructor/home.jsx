import TraineeNum from "./Trainee-management/traineeNum";
import ProjectNum from "./Project-management/projectNum";
import ProjectDeadline from "./Project-management/projectDeadline";
import TeamNum from "./Team-management/teamNum";
import Profile from "./profile/profile";

function Dashboard() {
  return (
    <div className="w-full h-screen p-4 pt-4 bg-opacity-50 bg-white overflow-hidden">
      <nav className="text-blue-700 w-full p-4 dark:text-blue-700">
        <ol className="text-blue-700 flex h-8 space-x-2 dark:text-blue-700">
          <li className="text-blue-700 flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-blue-700 text-sm hover:text-black flex items-center hover:underline"
            >
              Instructor
            </a>
          </li>
          <li className="flex items-center space-x-1">
            <span className="dark:text-gray-400">/</span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-blue-700 text-sm hover:text-black flex items-center px-1 capitalize hover:underline"
            >
              Home
            </a>
          </li>
        </ol>
        <h3 className="font-bold text-3xl">Instructor Dashboard</h3>
      </nav>
      <div className="flex">
        <TraineeNum />
        <ProjectNum />
        <TeamNum />
      </div>
      <div className="ml-4">
        <ProjectDeadline />
      </div>
    </div>
  );
}

export default Dashboard;

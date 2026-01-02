const ProjectContainer = ({ children, className = "" }) => {
    return (
        <div
            className={`
        flex flex-col bg-white rounded-xl overflow-hidden
        shadow-md hover:shadow-xl transform hover:scale-105
        transition duration-300 ease-in-out
        p-4 md:p-6
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default ProjectContainer;

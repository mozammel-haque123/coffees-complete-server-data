import foroffor from '../../assets/foroffor.png';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img src={foroffor} alt="404 Not Found" />
        <h1 className="text-4xl font-bold text-red-600 mt-6">404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default Error;

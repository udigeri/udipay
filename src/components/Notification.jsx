const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="flashes fail">{message}</div>;
};

export default Notification;

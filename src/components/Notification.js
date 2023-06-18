const Notification = ({ notif, setNotification }) => {
    if(notif) {
        setTimeout(() => {
            setNotification(null);
        }, 2000);
        return <div className={notif.class}>{notif.message}</div> 
    } else {
        return null
    }
}

export default Notification 
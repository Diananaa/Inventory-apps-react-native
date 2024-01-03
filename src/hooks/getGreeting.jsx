import dayjs from 'dayjs';

const getGreeting = () => {
    const currentHour = dayjs().hour();

    if (currentHour >= 5 && currentHour < 12) {
        return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
}

export default getGreeting
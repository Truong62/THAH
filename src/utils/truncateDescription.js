
export const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
        console.log((description.substring(0, maxLength) + '...').length)
        return description.substring(0, maxLength) + '...';
    }
    return description;
};

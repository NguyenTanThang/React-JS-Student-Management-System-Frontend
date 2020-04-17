const dateParser = (dateItem) => {
    const parsedDate = Date.parse(dateItem);

    const dateObject = new Date(parsedDate);

    let y = "" + dateObject.getFullYear();
    let m = "" + dateObject.getMonth();
    let d = "" + dateObject.getDate();

    if (m.length == 1){
        m = "0" + m;
    }

    if (d.length == 1){
        d = "0" + d;
    }

    return `${y}-${m}-${d}`;
}

export default dateParser;
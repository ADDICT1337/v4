export default (content) => {
    const lines = content.split('\r\n').slice(1);
    //console.log(lines);
    const linesCount = lines.length - 1;
    console.log(`Количество автомобилей: ${linesCount}`);

    let totalMileage = 0;

    lines.forEach(element => {
        const mileage = +element.split(',')[4];
        if (!isNaN(mileage)) {
            totalMileage += mileage;
        }
    });
    const averageMileage = Math.ceil(totalMileage / linesCount);
    console.log(`Средний пробег: ${averageMileage}`);

    let maxValue = 0;

    lines.forEach(element => {
        const value = +element.split(',')[7];
        if(value > maxValue) {
            maxValue = value;
        }
    });
    console.log(`Стоимость самой дорогой машины: ${maxValue}`);

    let carYear = Infinity;
    let carMake = '';
    let carModel = '';

    lines.forEach(element => {
        const value = element.split(',')
        const year = +value[2];
        const make = value[0];
        const model = value[1];

        if(year < carYear) {
            carYear = year;
            carMake = make;
            carModel = model;
        }
    })
    console.log(`Самый старый автомобиль: ${carMake} ${carModel}`);
};

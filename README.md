## 1 шаг

Выведите количество записей с данными в переданном файле. Учтите, что первая строчка в CSV файле является заголовочной, она не содержит данных и не должна учитываться. Вывод утилиты будет таким:

```bash
bin/cars.js __fixtures__/cars1.csv
Количество автомобилей: 20
```

## 2 шаг

Выведите средний пробег всех автомобилей. Полученное значение обязательно округлить.

```bash
bin/cars.js __fixtures__/cars1.csv
Количество автомобилей: 20 # Не забывайте что предыдущее решение остается работать
Средний пробег: 30300
```

## 3 шаг

Выведите стоимость самой дорогой машины.

```bash
bin/cars.js __fixtures__/cars1.csv
Количество автомобилей: 20
Средний пробег: 30300
Стоимость самой дорогой машины: 85000
```

## 4 шаг

Выведите марку и модель автомобиля с самым ранним годом выпуска.

```bash
bin/cars.js __fixtures__/cars1.csv
Количество автомобилей: 20
Средний пробег: 30300
Стоимость самой дорогой машины: 85000
Самый старый автомобиль: Volkswagen Jetta
```

## 5 шаг

Выведите все встречающиеся цвета автомобилей и количество их нахождений в файле. Например, если цвет "Blue" встречается 3 раза, то вывод будет "Blue":3.

Обратите внимание, что вы получаете объект, в котором ключи - это названия цветов, а значение - количество нахождений. В консоль вы должны вывести строку, соответственно, полученный объект представьте в виде строки.

```bash
bin/cars.js __fixtures__/cars1.csv
Количество автомобилей: 20
Средний пробег: 30300
Стоимость самой дорогой машины: 85000
Самый старый автомобиль: Volkswagen Jetta
Все цвета: Red: 3, Black: 4, White: 5, Gray: 3, Yellow: 1, Blue: 3, Green: 1
```

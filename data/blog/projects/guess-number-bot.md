---
title: 'Проект: Угадай Число (Компьютер)'
date: '2022-02-23'
tags: ['легкий', 'проекты', 'python']
draft: false
authors: ['default']
summary: 'В данном уроке мы научимся работать с библиотекой `random` и воссоздадим игру Угадай Число, в котором бот выбирает любое число от 1 до 10 и мы должны угадать.'
---

_Источник_: [FreeCodeCamp](https://www.youtube.com/watch?v=8ext9G7xspg&t=414s)

# Ознакомление

В данном уроке мы научимся работать с библиотекой `random` и воссоздадим игру Угадай Число, в котором бот выбирает любое число от 1 до 10 и мы должны угадать. Откройте свою среду разработки или можете воспользоваться [Repl.it](https://repl.it).

Программа делает три действия:

1. Загадывает число
2. Принимает данные от пользователя
3. Решает, правильно ли это или нет

# Сперва попробуйте сами!

Не смотря на решение, попробуйте самим создать данный проект. Конечно вы можете посмотреть сейчас но здесь главное не сам проект а то, чему вы научитсеь создавая данный проект.

# Решение

1. Пишем код который загадывает число:

```python
import random
```

Мы импортируем библиотеку `random`, с который мы сможем загадывать числа. Документацию можете прочесть [здесь](https://docs.python.org/3/library/random.html), но нам не нужно знять все для данного проекта. Для того чтобы программа загадывала число, нужно прописать функцию:

```python
def guess(x):
  random_number = random.randint(1,x)
  return random_number
```

Данная функция принимает число `x` и от 1 до `x` возвращает угаданное число.

2. Принимаем данные от пользователя и сравниваем его с командой бота:

```python
user = int(input(f"Угадайте число от 1 до 10: "))
```

Таким образом мы принимаем текст от пользователя, но его нужно перевести в цифру. Для этого мы должны ввод данных перенести на функцию `int`:

```python
user = int(input(f"Угадайте число от 1 до 10: "))
```

Теперь мы должны сравнить числа:

```python
user = int(input(f"Угадайте число от 1 до 10: "))
computer = guess(10) # Та функция которую мы прописали ранее
if user == computer:
  print("Верно!")
else:
  print("Неверно.")
```

И таким образом у нас получилось создать главную логику игры, но на этом еще не все. Мы должны сделать так чтобы пользователь мог играть до тех пока не угадает число и чтобы компьютер подсказывал, больше или меньше является число.

3. Делаем игру бесконечной:

```python
computer = guess(10)
while True: # Создаем бесконечный цикл
  user = int(input(f"Угадайте число от 1 до 10: "))
  if user == computer:
    print("Верно!")
    break # Выходим из цикла
  else:
    print("Неверно.")
```

Благодаря циклу `while` у нас код выходит бесконечно и он выходит из цикла только если пользователь угадает число.

4. Добавляем подсказки:
   Смотрим в код с условиями и добавляем новые условия:

```python
if user == computer:
  print("Верно!")
  break # Выходим из цикла
# Удаляем старые условия
# else:
#   print("Неверно.")
elif computer > user:
  print("Больше")
else:
  print("Меньше")
```

Теперь при каждой проверку будет выходить подсказка, является ли загаданное число больше или меньше.

## Итого у нас получается:

```python
import random

def guess(x):
  random_number = random.randint(1,x)
  return random_number

computer = guess(10) # Та функция которую мы прописали ранее

while True: # Создаем бесконечный цикл
  user = int(input(f"Угадайте число от 1 до 10: "))
  if user == computer:
    print("Верно!")
    break # Выходим из цикла
  elif computer > user:
    print("Больше")
  else:
    print("Меньше")
```

## Работаем над багами

Не забываем, что нельзя доверять ввод пользователям. Нужно в коде прописать возможности когда пользователь вводит непривильные символы:

```python
while True: # Создаем бесконечный цикл
  try:
    user = int(input(f"Угадайте число от 1 до 10: "))
  except:
    print("Пожалуйста, введите числа")
    continue
```

Также мы можем добавить возможность, чтобы человек сам выбирал диапозон чисел. Этот код вы можете придумать самим и обсудить в нашем [Форуме](https://forum.op-onai.kz)

# Итоги

Мы разработали программу, которая загадывает числа и дает пользователю возможность разгадать его. Мы также научились работать с библиотекой `random`, циклами и условиями. Надеюсь вам понравилось и помогайте другим решать проекты!
---
title: 'Проект: Камень-Ножницы-Бумага'
date: '2022-02-23'
tags: ['легкий', 'проект', 'python']
draft: false
authors: ['default']
summary: 'The Time Traveller (for so it will be convenient to speak of him) was
expounding a recondite matter to us. His pale grey eyes shone and
twinkled, and his usually pale face was flushed and animated...'
---

_Источник_: [FreeCodeCamp](https://www.youtube.com/watch?v=8ext9G7xspg&t=1274s)

# Ознакомление

В данном уроке вы научитесь работать с `random.choice()` в языке Python 3 создав игру Камень-Ножницы-Бумага на терминале. Данный проект супер легкий и также мы научимся работать с библиотекой `random` Откройте свою среду разработки или можете воспользоваться [Repl.it](https://repl.it).

Все что должен делать программа, это принять один из трех вариантов ход и наугад выбрать один из трех ходов. После ходов, программа должна оценить кто победил или состоялась ли ничья.

Таким образом, нужно составить три действия:

1. Принять ход человека
2. Решить свой ход **наугад**
3. Оценить исход игры

# Сперва попробуйте сами!

Не смотря на решение, попробуйте самим создать данный проект. Конечно вы можете посмотреть сейчас но здесь главное не сам проект а то, чему вы научитсеь создавая данный проект.

# Решение

1. Пишем код которая принимает данные человека:

```python
user = input("'к' за камень, 'б' за бумагу, 'н' за ножницы: ")
```

2. Наугад выбираем один из трех вариантов за бота:

```python
computer = random.choice(['к', 'б', 'н'])
```

3. Создаем функцию которая принимает входные данные игроков и решает кто победил:

```python
def is_win(player, opponent):
  if player == opponent:
    return 1
  elif (player == 'к' and opponent == 'н') or (player == 'н' and opponent == 'б') or (player == 'б' and opponent == 'к'):
    return 0
  else:
    return -1
```

4. Добавляем функцию в основной код:

```python
who_won = is_win(user, computer)
if who_won == 1:
  print("Ты Победил!")
elif who_won == 0:
  print("Ничья")
else:
  print("Ты Проиграл!")
```

### Итого у нас получается:

```python
import random

def is_win(player, opponent):
  if player == opponent:
    return 1
  elif (player == 'к' and opponent == 'н') or (player == 'н' and opponent == 'б') or (player == 'б' and opponent == 'к'):
    return 0
  else:
    return -1

user = input("'к' за камень, 'б' за бумагу, 'н' за ножницы: ")
computer = random.choice(['к', 'б', 'н'])
who_won = is_win(user, computer)
if who_won == 1:
  print("Ты Победил!")
elif who_won == 0:
  print("Ничья")
else:
  print("Ты Проиграл!")
```

# Видите ли вы потенциальную проблему?

В целом код является правильным, но есть одно правило: не доверяйте пользователю. Он может дать какой-либо другой текст кроме К, Н или Б. Поэтому, нужно перестраховаться:

```python
user = input("'к' за камень, 'б' за бумагу, 'н' за ножницы: ")
if user not in ['к', 'н', 'б']:
    print("Повторите снова")
    exit()
```

# Итоги

Мы разработали старую игру Камень-Ножницы-Бумага используя функции, сравнения и библиотеки `random`. Надеюсь вам понравилось и помогайте друзьям с этим проектом!

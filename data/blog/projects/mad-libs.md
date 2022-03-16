---
title: 'Проект: Безумная Библиотека'
date: '2022-02-23'
tags: ['легкий', 'проекты', 'python']
draft: false
authors: ['default']
summary: 'В данном уроке мы будем работать со строками, а точнее с f-строками (f-strings). Звучит страшно, на деле все просто.'
---

_Источник_: [FreeCodeCamp](https://www.youtube.com/watch?v=8ext9G7xspg&t=1274s)

# Ознакомление

В данном уроке мы будем работать со строками, а точнее с f-строками (f-strings). Звучит страшно, на деле все просто. Все что нужно: Откройте свою среду разработки или можете воспользоваться [Repl.it](https://repl.it).

Все что должен делать программа, это принять разные слова от пользователя и вставлять в заготовленный текст. Например:

```
Ваше имя: Беркут
Ваша работа: Веб-Разработчик
Цифра: 140
Вот что вышло: Привет, меня зовут *Беркут*, я хочу работать как *Веб-Разработчик* и зарабатывать от *140*,000 тг.
```

Таким образом, нужно составить три действия:

1. Принять тексты от пользователя
2. Вставить в текст
3. Отправить сообщение

# Сперва попробуйте сами!

Не смотря на решение, попробуйте самим создать данный проект. Конечно вы можете посмотреть сейчас но здесь главное не сам проект а то, чему вы научитсеь создавая данный проект.

# Решение

1. Пишем код которая принимает данные человека:

```python
name = input('Ваше имя: ')
work = input('Ваша работа: ')
num = input('Число: ')
```

2. Собираем текст воедино. Можно конечно делать через `+`, как `string_1 + string_b`, но для больших текстов так делать крайне неудобно. Поэтому используем f-строки. Меньше слов, смотрите на код:

```python
final = f"Вот что вышло: Привет, меня зовут {name}, я хочу работать как {work} и зарабатывать от {num},000 тг."
```

f-строки работают просто: указываете что строка является f-строкой символом `f` перед строкой (без пробела) и в кривые скобки `{}` вставляете переменные.

3. Отправляем сообщение:

```python
print(final)
```

### Итого у нас получается:

```python
name = input('Ваше имя: ')
work = input('Ваша работа: ')
num = input('Число: ')
final = f"Вот что вышло: Привет, меня зовут {name}, я хочу работать как {work} и зарабатывать от {num},000 тг."
print(final)
```

# Итоги

Мы разработали старую игру Безумная Библиотека используя f-строки. Надеюсь вам понравилось и помогайте друзьям с этим проектом!
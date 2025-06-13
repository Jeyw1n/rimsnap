import os
import json
import django
from pathlib import Path
from django.core.files import File

# Настройка Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rimsnap.settings')  # Убедитесь, что это правильный путь
django.setup()

from products.models import Product, ProductImage


def load_products():
    # Определяем путь к JSON файлу
    base_dir = Path(__file__).parent  # Директория, где находится скрипт
    json_file_path = base_dir / 'products_data.json'  # Путь к JSON файлу

    # Проверяем существование файла
    if not json_file_path.exists():
        print(f"Ошибка: Файл {json_file_path} не найден!")
        print("Пожалуйста, убедитесь, что файл products_data.json находится в той же директории, что и скрипт.")
        return

    try:
        # Загрузка данных из JSON
        with open(json_file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)

        # Проверка структуры данных
        if 'products' not in data:
            print("Ошибка: Неправильная структура JSON файла. Ожидается ключ 'products'.")
            return

        # Создание продуктов
        for product_data in data['products']:
            try:
                product, created = Product.objects.get_or_create(
                    name=product_data['name'],
                    defaults={
                        'description': product_data['description'],
                        'tags': product_data['tags'],
                        'price': product_data['price']
                    }
                )

                if created:
                    print(f'Успешно создан продукт: {product.name}')
                else:
                    print(f'Продукт уже существует: {product.name}')

            except KeyError as e:
                print(f"Ошибка в данных продукта: отсутствует ключ {e}")
            except Exception as e:
                print(f"Ошибка при создании продукта {product_data.get('name', 'Unknown')}: {str(e)}")

    except json.JSONDecodeError:
        print("Ошибка: Файл JSON содержит синтаксические ошибки.")
    except Exception as e:
        print(f"Произошла непредвиденная ошибка: {str(e)}")


if __name__ == '__main__':
    load_products()
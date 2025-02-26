from rest_framework import serializers
from .models import Product, ProductImage

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']

class ProductSerializer(serializers.ModelSerializer):
    # Поле для одной картинки (используется в списке товаров)
    image = serializers.SerializerMethodField()
    # Поле для всех картинок (используется в детальном представлении)
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'tags', 'price', 'image', 'images']

    # Метод для получения одной картинки (первой из списка)
    def get_image(self, obj):
        first_image = obj.images.first()  # Получаем первую картинку
        if first_image:
            # Получаем полный URL для первой картинки
            request = self.context.get('request')
            return request.build_absolute_uri(first_image.image.url)
        return None
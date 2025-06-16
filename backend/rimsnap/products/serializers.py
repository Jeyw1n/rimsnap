from rest_framework import serializers
from .models import Product, ProductImage, Review, CartItem

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

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  # Показываем имя пользователя

    class Meta:
        model = Review
        fields = ['id', 'user', 'text', 'date']

class ProductShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price']

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductShortSerializer()
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total_price', 'created_at']

    def get_total_price(self, obj):
        return obj.total_price

class AddToCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['product', 'quantity']
        extra_kwargs = {
            'quantity': {'min_value': 1}
        }

class UpdateCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['quantity']
        extra_kwargs = {
            'quantity': {'min_value': 1}
        }
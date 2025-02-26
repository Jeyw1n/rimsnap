from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

class ProductModelView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class LastProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        count = self.request.query_params.get('count', 5)  # Получаем параметр count из запроса, по умолчанию 5
        count = int(count)  # Преобразуем в целое число
        return Product.objects.all().order_by()[:count]

# представление для получения одного товара по id (возвращает все картинки)
class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'  # Поле для поиска товара (по умолчанию 'pk', но можно указать 'id')
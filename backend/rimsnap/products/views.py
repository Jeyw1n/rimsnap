from rest_framework import generics, permissions
from .models import Product, Review, CartItem
from .serializers import ProductSerializer, ReviewSerializer, CartItemSerializer, AddToCartSerializer, UpdateCartItemSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


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


class AddReviewView(APIView):
    permission_classes = [IsAuthenticated]  # Только для авторизованных пользователей

    def post(self, request, product_id):
        product = get_object_or_404(Product, id=product_id)
        user = request.user  # Получаем текущего пользователя

        # Проверяем, есть ли уже отзыв от этого пользователя на этот товар
        # if Review.objects.filter(product=product, user=user).exists():
        #     return Response(
        #         {"error": "Вы уже оставили отзыв на этот товар."},
        #         status=status.HTTP_400_BAD_REQUEST,
        #     )

        # Создаем отзыв
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(product=product, user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductReviewsView(APIView):
    def get(self, request, product_id):
        product = get_object_or_404(Product, id=product_id)
        reviews = Review.objects.filter(product=product)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    
class CartItemListCreateView(generics.ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AddToCartSerializer
        return CartItemSerializer

    def perform_create(self, serializer):
        product = serializer.validated_data['product']
        quantity = serializer.validated_data.get('quantity', 1)
        
        # Проверяем, есть ли уже такой товар в корзине
        cart_item, created = CartItem.objects.get_or_create(
            user=self.request.user,
            product=product,
            defaults={'quantity': quantity}
        )
        
        if not created:
            cart_item.quantity += quantity
            cart_item.save()

class CartItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CartItem.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return UpdateCartItemSerializer
        return CartItemSerializer

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)
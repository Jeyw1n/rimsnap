from django.urls import path
from .views import ProductModelView

urlpatterns = [
    path('products/', ProductModelView.as_view(), name='products'),
]

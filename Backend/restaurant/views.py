from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import MenuItem, Order
from .serializers import MenuItemSerializer, OrderSerializer, UserRegistrationSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'User registered successfully',
                'status': status.HTTP_201_CREATED,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': 'Registration failed',
            'status': status.HTTP_400_BAD_REQUEST,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'message': 'Menu items retrieved successfully',
            'status': status.HTTP_200_OK,
            'data': serializer.data
        }, status=status.HTTP_200_OK)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({
            'message': 'Menu item retrieved successfully',
            'status': status.HTTP_200_OK,
            'data': serializer.data
        }, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Menu item created successfully',
                'status': status.HTTP_201_CREATED,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': 'Failed to create menu item',
            'status': status.HTTP_400_BAD_REQUEST,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Menu item updated successfully',
                'status': status.HTTP_200_OK,
                'data': serializer.data
            }, status=status.HTTP_200_OK)
        return Response({
            'message': 'Failed to update menu item',
            'status': status.HTTP_400_BAD_REQUEST,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({
            'message': 'Menu item deleted successfully',
            'status': status.HTTP_204_NO_CONTENT
        }, status=status.HTTP_204_NO_CONTENT)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'message': 'Orders retrieved successfully',
            'status': status.HTTP_200_OK,
            'data': serializer.data
        }, status=status.HTTP_200_OK)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response({
            'message': 'Order retrieved successfully',
            'status': status.HTTP_200_OK,
            'data': serializer.data
        }, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Order created successfully',
                'status': status.HTTP_201_CREATED,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'message': 'Failed to create order',
            'status': status.HTTP_400_BAD_REQUEST,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Order updated successfully',
                'status': status.HTTP_200_OK,
                'data': serializer.data
            }, status=status.HTTP_200_OK)
        return Response({
            'message': 'Failed to update order',
            'status': status.HTTP_400_BAD_REQUEST,
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({
            'message': 'Order deleted successfully',
            'status': status.HTTP_204_NO_CONTENT
        }, status=status.HTTP_204_NO_CONTENT)

from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from core.serializers import *
# Create your views here.

class Index(TemplateView):
    template_name= 'index.html'
    
class Login(TemplateView):
    template_name= 'login.html'
    
class Signup(TemplateView):
    template_name= 'signup.html'

class SignupAPIview(APIView):
    permission_classes=[AllowAny]

    def post(self, request):
        
        data=request.data.dict()
        data.pop('terms', None)
        data['public_profile']= data.get('public_profile') == 'on'
        data['genres']= request.data.getlist('genres')

        serializer= UserSignupSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response (
                {'messages': 'User created sucessfully'},
                status=status.HTTP_201_CREATED
            )
        
        return Response(
            {"success": False, "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
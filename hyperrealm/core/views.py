from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class Index(TemplateView):
    template_name= 'index.html'
    
class Login(TemplateView):
    template_name= 'login.html'
    
class Signup(TemplateView):
    template_name= 'signup.html'
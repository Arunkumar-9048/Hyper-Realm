from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class Home(TemplateView):
    template_name= 'home.html'
    
class UserProfile(TemplateView):
    template_name= 'profile.html'
    
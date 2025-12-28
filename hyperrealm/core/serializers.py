from  rest_framework import serializers
from .models import *
from django.contrib.auth.password_validation import validate_password

class UserSignupSerializer(serializers.ModelSerializer):
    genres = serializers.ListField(child= serializers.CharField(), write_only= True)
    password= serializers.CharField(write_only= True, validators=[validate_password])
    confirm_password= serializers.CharField(write_only= True)
    
    class Meta:
        model= User
        fields= [
            'username','first_name','last_name','email',
            'password','confirm_password','platform','genres',
            'timezone','public_profile','bio'
        ]
        
    def validate(self, attrs):
        if(attrs['password']!=attrs['confirm_password']):
            raise serializers.ValidationError({"confirm_password": "passwords do not match."})
        return attrs
    
    def create(self,validated_data):
        genres_data= validated_data.pop('genres',[])
        validated_data.pop('confirm_password')
        password = validated_data.pop('password')
        
        user= User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        
        genre_obj= Genres.objects.filter(code__in=genres_data)
        user.genres.set(genre_obj)
        
        return user
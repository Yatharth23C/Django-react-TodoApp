from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.middleware.csrf import get_token

@csrf_exempt
def set_csrf_cookie(request):
    response = JsonResponse({'message': 'CSRF cookie set'})
    response.set_cookie('csrftoken', get_token(request), httponly=False, samesite='None', secure=True)
    print(get_token(request))  
    return response

def login_view(request):
    if request.method == 'POST':
        import json
        data = json.loads(request.body)
        email = data.get('email')
        password= data.get('password')
        print(email,password)
        
    return HttpResponse("Hello")


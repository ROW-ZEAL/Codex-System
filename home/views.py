from django.shortcuts import render



# Create your views here.


def show_root(request):
    context = {}
    return render(request, 'home/root.html', context)
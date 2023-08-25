from django.urls import path
from .import views


urlpatterns = [

    path('students', views.show_students_details, name="api"),
    path('candiate', views.show_candidates_details, name="api"),
    path('vote', views.add_vote_count, name="api"),
    path('winner', views.show_winner_details, name="api"),
    path('form', views.add_candidates_details, name="api"),

]

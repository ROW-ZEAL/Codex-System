from django.shortcuts import render
from rest_framework.decorators import api_view
from .api_students import *
from .api_canidates import *
from .api_counting_voters import *
from .api_choosing_winner import *
from .api_candidate_form import *
from rest_framework.response import Response

@api_view(['GET'])
def show_students_details(request):
    return Response(api_student_details(request=request))

@api_view(['GET'])
def show_candidates_details(request):
    return Response(api_candidates_details(request=request))

@api_view(['GET'])
def show_winner_details(request):
    return Response(api_winner_details(request=request))


@api_view(['POST'])
def add_vote_count(request):
    return Response(api_vote_count(request.data))

@api_view(['POST'])
def add_candidates_details(request):
    return Response(api_candidate_form(request.data))
from codex_main.helper import execute_query_and_map_results


def api_student_details(request):

    return {
        "student_name": get_student_list(request=request),

    }


def get_student_list(request):
    show_top_broker_date = """
select * from students;
"""
    return list(execute_query_and_map_results(show_top_broker_date))

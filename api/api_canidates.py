from codex_main.helper import execute_query_and_map_results


def api_candidates_details(request):

    return {
        "candidate_name": get_candidate_list(request=request),

    }


def get_candidate_list(request):
    show_candiate = """
select * from candidates ;
"""
    return list(execute_query_and_map_results(show_candiate))

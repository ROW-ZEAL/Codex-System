from codex_main.helper import execute_query_and_map_results


def api_winner_details(request):

    return {
        "Winner_data": get_winner_list(request=request),

    }


def get_winner_list(request):
    show_top_winnner = """
            select count(*),Votes,candidates_name  from vote_count vc  group by Votes,candidates_name  order by count desc;"""
    return list(execute_query_and_map_results(show_top_winnner))

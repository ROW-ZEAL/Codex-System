import psycopg2


def api_vote_count(data):
    candidates_id = data.get('candidates_id')
    Votes = data.get('voting_status')

    try:
        db_connection = psycopg2.connect(
            host="127.0.0.1",
            database="postgres",
            user="postgres",
            password="postgres",
            port="5433"
        )
        db_connection.autocommit = True
        cursor = db_connection.cursor()
        vote_counting_query = """ INSERT into vote_count (candidates_name,Votes)  VALUES(%s, %s);
                                    """

        cursor.execute(vote_counting_query,
                           ( candidates_id,Votes))

        db_connection.commit
        cursor.close
        context = {
            'status_1': 'success',
        }

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        context = {
            'status': "fail",
        }
    return context


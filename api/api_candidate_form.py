import psycopg2

def api_candidate_form(data):
    name = data.get('candidate_Name')
    age = data.get('candidate_age')
    grade = data.get('candidate_grade')

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
        candidate_query = """INSERT INTO candidates (name, age, grade) VALUES (%s, %s, %s);"""

        cursor.execute(candidate_query, (name, age, grade))

        db_connection.commit()
        cursor.close()
        db_connection.close()
        
        context = {
            'status': 'success',
        }

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        context = {
            'status': 'fail',
        }

    return context

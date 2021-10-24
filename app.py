import os
import psycopg2

def connector():
    print("hey")
    cockroachstring = "postgresql://rachit:<calhackscockroachdb>@free-tier.gcp-us-central1.cockroachlabs.cloud:26257"
    cockroachstring = os.environ.get('DB_ENCRYPT', true)
    conn=psycopg2.connect(cockroachstring)
    # conn=psycopg2.connect("")
    return conn

connector()
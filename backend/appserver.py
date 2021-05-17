import os

if __name__ == '__main__':
    from fridgeapi.application import create_app
    app = create_app()
    port = 5000
    if os.environ.get('PORT'):
        port = int(os.environ.get('PORT'))
    app.run(threaded=True, port=port, host="0.0.0.0")
    
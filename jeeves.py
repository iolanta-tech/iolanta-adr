import sh


def serve():
    """Serve docs."""
    sh.mkdocs.serve(
        '-a', 'localhost:7127',
        _fg=True,
    )

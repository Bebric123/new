from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import os

app = FastAPI()

# Отдаём всё из корня как статику
app.mount("/", StaticFiles(directory=".", html=True), name="static")
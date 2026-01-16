from fastapi import FastAPI

app = FastAPI(title="Pixelcrate API")

@app.get("/api/health")
def health():
    return {"ok": True}

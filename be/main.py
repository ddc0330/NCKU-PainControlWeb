from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
from typing import Optional

# 載入環境變數
load_dotenv()

# 設置 Gemini API
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable is not set")
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

app = FastAPI()

# 設置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "https://ncku-paincontrol-web.vercel.app",
        "https://*.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    message: str
    systemPrompt: Optional[str] = None

class ChatResponse(BaseModel):
    response: str

@app.post("/api/chat", response_model=ChatResponse)
async def chat(chat_data: ChatMessage):
    try:
        # 如果有系統prompt，使用它；否則使用預設的簡單prompt
        if chat_data.systemPrompt:
            # 組合系統prompt和用戶訊息
            full_prompt = f"{chat_data.systemPrompt}\n\n用戶問題：{chat_data.message}"
        else:
            # 使用預設prompt
            full_prompt = f"你是一個疼痛諮詢AI，請用中文回答：{chat_data.message}"
        
        print(f"使用的prompt: {full_prompt[:200]}...")  # 調試用，顯示前200字符
        
        response = model.generate_content(full_prompt)
        return {"response": response.text}
    except Exception as e:
        print('Gemini error:', e)
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 
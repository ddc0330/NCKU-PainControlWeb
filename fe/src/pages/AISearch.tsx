import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Alert,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { PAIN_THERAPIST_PROMPT } from '../data/aiPrompt';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'pain_control_chat_history';

const AISearch = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // 從本地存儲加載聊天記錄
  useEffect(() => {
    try {
      const storedMessages = localStorage.getItem(STORAGE_KEY);
      if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages);
      } else {
        // 設置歡迎訊息
        const welcomeMessage: Message = {
          id: 0,
          text: '您好！我是您的專業疼痛分析與治療師。請描述您的疼痛問題，我會為您提供專業分析並推薦合適的頁面資源。',
          isUser: false,
          timestamp: Date.now(),
        };
        setMessages([welcomeMessage]);
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
      // 如果讀取失敗，設置歡迎訊息
      const welcomeMessage: Message = {
        id: 0,
        text: '您好！我是您的專業疼痛分析與治療師。請描述您的疼痛問題，我會為您提供專業分析並推薦合適的頁面資源。',
        isUser: false,
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // 保存聊天記錄到本地存儲
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        console.error('Failed to save chat history:', error);
      }
    }
  }, [messages]);

  // 自動滾動到底部
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // 清除聊天記錄
  const clearChatHistory = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      const welcomeMessage: Message = {
        id: Date.now(),
        text: '聊天記錄已清除。我是您的專業疼痛分析與治療師，請描述您的疼痛問題。',
        isUser: false,
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    } catch (error) {
      console.error('Failed to clear chat history:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // 添加用戶消息
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: currentInput,
          systemPrompt: PAIN_THERAPIST_PROMPT 
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // 添加 AI 回應
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.response || '抱歉，我無法處理您的請求。',
        isUser: false,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: '抱歉，目前無法連接到AI服務。請檢查網路連接或稍後再試。如果問題持續，建議您直接瀏覽相關頁面尋找資訊。',
        isUser: false,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }; 

  // 自定義連結組件，使用 React Router 導航
  const CustomLink = ({ href, children, ...props }: any) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (href && href.startsWith('/')) {
        navigate(href);
      } else if (href) {
        window.open(href, '_blank');
      }
    };

    return (
      <Box
        component="a"
        href={href}
        onClick={handleClick}
        sx={{
          color: 'primary.main',
          textDecoration: 'underline',
          cursor: 'pointer',
          '&:hover': {
            color: 'primary.dark',
            textDecoration: 'underline',
          },
        }}
        {...props}
      >
        {children}
      </Box>
    );
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 0 }}>
            AI 疼痛分析師
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            專業的疼痛分析與治療建議，為您推薦最適合的學習資源。
          </Typography>
        </Box>
        <Tooltip title="清除聊天記錄">
          <IconButton 
            onClick={clearChatHistory}
            color="error"
            sx={{ ml: 2 }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Alert severity="info" sx={{ mb: 2 }}>
        <strong>注意：</strong>此AI助手僅提供教育性資訊和頁面推薦，不能替代專業醫療診斷。如有嚴重疼痛請尋求醫療協助。
        <br />
        <strong>提示：</strong>您的聊天記錄會自動保存在瀏覽器中，重新載入頁面不會遺失。
      </Alert>

      <Paper
        elevation={3}
        sx={{
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          mb: 2,
        }}
      >
        <List
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 2,
          }}
        >
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <ListItem
                sx={{
                  justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                  flexDirection: 'column',
                  alignItems: message.isUser ? 'flex-end' : 'flex-start',
                }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    maxWidth: '85%',
                    bgcolor: message.isUser ? 'primary.light' : 'grey.100',
                    color: message.isUser ? 'white' : 'text.primary',
                    mb: 1,
                    borderRadius: message.isUser ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                  }}
                >
                  {message.isUser ? (
                    <ListItemText 
                      primary={message.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          whiteSpace: 'pre-line',
                          wordBreak: 'break-word',
                        }
                      }}
                    />
                  ) : (
                    <Box sx={{ 
                      '& p': { 
                        margin: '0.5em 0',
                        lineHeight: 1.6,
                        '&:first-of-type': { marginTop: 0 },
                        '&:last-of-type': { marginBottom: 0 },
                      },
                      '& h1, & h2, & h3, & h4, & h5, & h6': {
                        margin: '1em 0 0.5em 0',
                        fontWeight: 'bold',
                        color: 'primary.main',
                        '&:first-of-type': { marginTop: 0 },
                      },
                      '& h2': { fontSize: '1.2em' },
                      '& h3': { fontSize: '1.1em' },
                      '& strong': {
                        fontWeight: 'bold',
                        color: 'primary.main',
                      },
                      '& em': {
                        fontStyle: 'italic',
                      },
                      '& ul, & ol': {
                        margin: '0.5em 0',
                        paddingLeft: '1.5em',
                      },
                      '& li': {
                        margin: '0.25em 0',
                      },
                      wordBreak: 'break-word',
                    }}>
                      <ReactMarkdown
                        components={{
                          a: CustomLink,
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    </Box>
                  )}
                </Paper>
                {/* 顯示時間戳 */}
                <Typography 
                  variant="caption" 
                  color="text.secondary" 
                  sx={{ 
                    fontSize: '0.7rem',
                    alignSelf: message.isUser ? 'flex-end' : 'flex-start',
                    mr: message.isUser ? 1 : 0,
                    ml: message.isUser ? 0 : 1,
                  }}
                >
                  {new Date(message.timestamp).toLocaleTimeString('zh-TW', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </Typography>
              </ListItem>
              {message.id !== messages[messages.length - 1]?.id && <Divider sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
          
          {isLoading && (
            <ListItem sx={{ justifyContent: 'flex-start' }}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  bgcolor: 'grey.100',
                  borderRadius: '20px 20px 20px 5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CircularProgress size={20} />
                <Typography variant="body2" color="text.secondary">
                  AI正在分析您的問題...
                </Typography>
              </Paper>
            </ListItem>
          )}
          
          <div ref={bottomRef} />
        </List>

        <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: '1px solid #e0e0e0' }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="請詳細描述您的疼痛問題，例如：位置、症狀、持續時間、誘發因素等..."
            variant="outlined"
            sx={{ mb: 1 }}
            disabled={isLoading}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              按 Enter 發送，Shift + Enter 換行 • 聊天記錄已自動保存
            </Typography>
            <Button
              variant="contained"
              endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? '分析中...' : '發送'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{ p: 2, bgcolor: 'background.default' }}>
        <Typography variant="h6" gutterBottom>
          💡 使用提示
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • <strong>疼痛基礎：</strong> 詢問"什麼是疼痛"獲取基礎知識<br/>
          • <strong>特定疼痛：</strong> 描述疼痛位置，如"肩膀疼痛"、"下背痛"<br/>
          • <strong>生活問題：</strong> 提及"低頭族"、"久坐"等生活型態問題<br/>
          • <strong>自我治療：</strong> 詢問"如何自我治療"獲取治療指導<br/>
          • <strong>聊天記錄：</strong> 點擊右上角 🗑️ 圖示可清除聊天記錄
        </Typography>
      </Paper>
    </Container>
  );
};

export default AISearch; 
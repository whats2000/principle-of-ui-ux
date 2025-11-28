import { useState, useMemo } from 'react';
import {
  Card,
  Typography,
  Tabs,
  Divider,
  Space,
  Button,
  Input,
  AutoComplete,
  Progress,
  Avatar,
  List,
  Spin,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ThunderboltOutlined,
  UserOutlined,
  SearchOutlined,
  LoadingOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const ALL_SEARCH_OPTIONS = [
  '專案管理工具',
  '程式開發流程',
  '資料庫設計',
  '使用者介面設計',
  '使用者體驗',
  '網路安全防護',
  '互動設計',
  '視覺設計',
  '雲端服務架構',
  '原型設計',
  '設計系統',
  '機器學習入門',
  '設計思維',
  '響應式設計',
  '區塊鏈技術',
];

// 範例一：即時搜尋建議
function InstantSearchDemo() {
  const [showInstant, setShowInstant] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  // 即時搜尋結果（使用 useMemo 避免重複計算）
  const instantResults = useMemo(() => {
    if (showInstant && searchValue) {
      const filtered = ALL_SEARCH_OPTIONS.filter((opt) =>
        opt.toLowerCase().includes(searchValue.toLowerCase()),
      );
      // 如果沒有匹配結果，動態生成包含用戶輸入的建議
      if (filtered.length === 0) {
        return [
          `${searchValue} 相關課程`,
          `${searchValue} 入門教學`,
          `${searchValue} 進階技巧`,
        ];
      }
      return filtered;
    }
    return [];
  }, [searchValue, showInstant]);

  // 非即時搜尋（模擬延遲）
  const handleSearch = () => {
    if (!showInstant) {
      setLoading(true);
      setTimeout(() => {
        const filtered = ALL_SEARCH_OPTIONS.filter((opt) =>
          opt.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setResults(filtered);
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <Card title='即時搜尋建議' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        輸入時即時顯示搜尋建議，讓使用者立即看到系統的反應。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(true);
            setResults([]);
            setSearchValue('');
          }}
          icon={<CheckCircleOutlined />}
        >
          即時搜尋（正確）
        </Button>
        <Button
          type={!showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(false);
            setResults([]);
            setSearchValue('');
          }}
          icon={<CloseCircleOutlined />}
        >
          延遲搜尋
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showInstant ? '#f6ffed' : '#fff2f0',
          borderColor: showInstant ? '#b7eb8f' : '#ffccc7',
        }}
      >
        <div style={{ maxWidth: 400 }}>
          {showInstant ? (
            <AutoComplete
              style={{ width: '100%' }}
              options={instantResults.map((r) => ({ value: r }))}
              value={searchValue}
              onChange={setSearchValue}
              placeholder='輸入關鍵字搜尋...'
            >
              <Input prefix={<SearchOutlined />} allowClear />
            </AutoComplete>
          ) : (
            <Space.Compact style={{ width: '100%' }}>
              <Input
                prefix={<SearchOutlined />}
                placeholder='輸入關鍵字搜尋...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onPressEnter={handleSearch}
              />
              <Button type='primary' onClick={handleSearch} loading={loading}>
                搜尋
              </Button>
            </Space.Compact>
          )}

          {!showInstant && results.length > 0 && (
            <div style={{ marginTop: 12 }}>
              {results.map((r) => (
                <div
                  key={r}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    marginBottom: 4,
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: 12 }}>
            <Text type='secondary' style={{ fontSize: 12 }}>
              {showInstant
                ? '即時顯示建議：輸入時立即看到匹配結果'
                : '需點擊搜尋按鈕才會顯示結果，使用者需等待'}
            </Text>
          </div>
        </div>
      </Card>
    </Card>
  );
}

// 範例二：密碼強度即時反饋
function PasswordStrengthDemo() {
  const [showInstant, setShowInstant] = useState(true);
  const [password, setPassword] = useState('');
  const [showStrength, setShowStrength] = useState(false);

  const getStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 6) strength += 25;
    if (pwd.length >= 8) strength += 25;
    if (/[A-Z]/.test(pwd)) strength += 25;
    if (/[0-9]/.test(pwd)) strength += 25;
    return strength;
  };

  const strength = getStrength(password);

  const getStrengthStatus = () => {
    if (strength <= 25) return { color: '#ff4d4f', text: '弱' };
    if (strength <= 50) return { color: '#faad14', text: '中' };
    if (strength <= 75) return { color: '#52c41a', text: '強' };
    return { color: '#52c41a', text: '非常強' };
  };

  const status = getStrengthStatus();

  const handleCheckStrength = () => {
    setShowStrength(true);
  };

  return (
    <Card title='密碼強度即時反饋' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        輸入密碼時即時顯示強度指示，讓使用者知道密碼是否足夠安全。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(true);
            setPassword('');
            setShowStrength(false);
          }}
          icon={<CheckCircleOutlined />}
        >
          即時反饋（正確）
        </Button>
        <Button
          type={!showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(false);
            setPassword('');
            setShowStrength(false);
          }}
          icon={<CloseCircleOutlined />}
        >
          延遲反饋
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showInstant ? '#f6ffed' : '#fff2f0',
          borderColor: showInstant ? '#b7eb8f' : '#ffccc7',
        }}
      >
        <div style={{ maxWidth: 400 }}>
          <Text style={{ display: 'block', marginBottom: 8 }}>密碼</Text>
          <Input.Password
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (!showInstant) setShowStrength(false);
            }}
            placeholder='請輸入密碼'
          />

          {showInstant ? (
            password && (
              <div style={{ marginTop: 12 }}>
                <Progress
                  percent={strength}
                  strokeColor={status.color}
                  showInfo={false}
                  size='small'
                />
                <Text style={{ color: status.color, fontSize: 12 }}>
                  密碼強度：{status.text}
                </Text>
              </div>
            )
          ) : (
            <div style={{ marginTop: 12 }}>
              {!showStrength ? (
                <Button
                  size='small'
                  onClick={handleCheckStrength}
                  disabled={!password}
                >
                  檢查密碼強度
                </Button>
              ) : (
                <div>
                  <Progress
                    percent={strength}
                    strokeColor={status.color}
                    showInfo={false}
                    size='small'
                  />
                  <Text style={{ color: status.color, fontSize: 12 }}>
                    密碼強度：{status.text}
                  </Text>
                </div>
              )}
            </div>
          )}

          <div style={{ marginTop: 12 }}>
            <Text type='secondary' style={{ fontSize: 12 }}>
              {showInstant
                ? '即時顯示強度：每次輸入都會更新強度指示'
                : '需點擊按鈕才能看到密碼強度'}
            </Text>
          </div>
        </div>
      </Card>
    </Card>
  );
}

// 範例三：即時載入更多內容
function InfiniteScrollDemo() {
  const [showInstant, setShowInstant] = useState(true);
  const [items, setItems] = useState([
    {
      id: 1,
      name: '王小明',
      content: '今天天氣真好，適合出去走走！',
      likes: 42,
      views: 128,
    },
    {
      id: 2,
      name: '李小華',
      content: '分享一個很棒的設計資源網站...',
      likes: 88,
      views: 256,
    },
    {
      id: 3,
      name: '張小美',
      content: '最近在學習 UI/UX 設計，收穫很多',
      likes: 35,
      views: 98,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(
      () => {
        const newItems = [
          {
            id: items.length + 1,
            name: '陳大偉',
            content: '新的一天，新的開始！',
            likes: 22,
            views: 67,
          },
          {
            id: items.length + 2,
            name: '林小玲',
            content: '推薦一本好書給大家...',
            likes: 56,
            views: 189,
          },
        ];
        setItems([...items, ...newItems]);
        setLoading(false);
      },
      showInstant ? 300 : 2000,
    );
  };

  return (
    <Card title='即時載入更多' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        載入更多內容時提供即時的視覺反饋，讓使用者知道系統正在回應。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(true);
            setItems([
              {
                id: 1,
                name: '王小明',
                content: '今天天氣真好，適合出去走走！',
                likes: 42,
                views: 128,
              },
              {
                id: 2,
                name: '李小華',
                content: '分享一個很棒的設計資源網站...',
                likes: 88,
                views: 256,
              },
              {
                id: 3,
                name: '張小美',
                content: '最近在學習 UI/UX 設計，收穫很多',
                likes: 35,
                views: 98,
              },
            ]);
          }}
          icon={<CheckCircleOutlined />}
        >
          快速載入（正確）
        </Button>
        <Button
          type={!showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(false);
            setItems([
              {
                id: 1,
                name: '王小明',
                content: '今天天氣真好，適合出去走走！',
                likes: 42,
                views: 128,
              },
              {
                id: 2,
                name: '李小華',
                content: '分享一個很棒的設計資源網站...',
                likes: 88,
                views: 256,
              },
              {
                id: 3,
                name: '張小美',
                content: '最近在學習 UI/UX 設計，收穫很多',
                likes: 35,
                views: 98,
              },
            ]);
          }}
          icon={<CloseCircleOutlined />}
        >
          緩慢載入
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showInstant ? '#f6ffed' : '#fff2f0',
          borderColor: showInstant ? '#b7eb8f' : '#ffccc7',
          maxHeight: 400,
          overflow: 'auto',
        }}
      >
        <List
          itemLayout='horizontal'
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={item.name}
                description={
                  <div>
                    <div>{item.content}</div>
                    <Space style={{ marginTop: 8 }}>
                      <Text type='secondary' style={{ fontSize: 12 }}>
                        <EyeOutlined /> {item.views}
                      </Text>
                      <Text type='secondary' style={{ fontSize: 12 }}>
                        <HeartOutlined /> {item.likes}
                      </Text>
                      <Text type='secondary' style={{ fontSize: 12 }}>
                        <MessageOutlined /> 回覆
                      </Text>
                    </Space>
                  </div>
                }
              />
            </List.Item>
          )}
        />

        <div style={{ textAlign: 'center', padding: '12px 0' }}>
          {loading ? (
            <Spin indicator={<LoadingOutlined spin />} />
          ) : (
            <Button type='link' onClick={loadMore}>
              載入更多
            </Button>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Text type='secondary' style={{ fontSize: 12 }}>
            {showInstant
              ? '快速載入：300ms 內完成，使用者幾乎無感'
              : '緩慢載入：需等待 2 秒，使用者會感到延遲'}
          </Text>
        </div>
      </Card>
    </Card>
  );
}

// 範例四：按鈕點擊反饋
function ButtonFeedbackDemo() {
  const [showInstant, setShowInstant] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(
      () => {
        setSubmitted(true);
        setTimeout(() => {
          setClicked(false);
          setSubmitted(false);
        }, 2000);
      },
      showInstant ? 500 : 2000,
    );
  };

  return (
    <Card title='按鈕點擊反饋' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        按鈕點擊後立即顯示視覺反饋，讓使用者知道操作已被接收。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(true);
            setClicked(false);
            setSubmitted(false);
          }}
          icon={<CheckCircleOutlined />}
        >
          即時反饋（正確）
        </Button>
        <Button
          type={!showInstant ? 'primary' : 'default'}
          onClick={() => {
            setShowInstant(false);
            setClicked(false);
            setSubmitted(false);
          }}
          icon={<CloseCircleOutlined />}
        >
          延遲反饋
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showInstant ? '#f6ffed' : '#fff2f0',
          borderColor: showInstant ? '#b7eb8f' : '#ffccc7',
        }}
      >
        <div style={{ textAlign: 'center', padding: 20 }}>
          {showInstant ? (
            <Button
              type='primary'
              size='large'
              loading={clicked && !submitted}
              onClick={handleClick}
              disabled={clicked}
              icon={submitted ? <CheckCircleOutlined /> : undefined}
            >
              {submitted ? '提交成功！' : clicked ? '提交中...' : '提交表單'}
            </Button>
          ) : (
            <Button
              type='primary'
              size='large'
              onClick={handleClick}
              disabled={clicked}
            >
              {submitted ? '提交成功！' : '提交表單'}
            </Button>
          )}

          <div style={{ marginTop: 16 }}>
            <Text type='secondary' style={{ fontSize: 12 }}>
              {showInstant
                ? '即時反饋：點擊後立即顯示 loading 狀態，完成後顯示成功'
                : '延遲反饋：點擊後無任何反應，直到完成才更新，使用者不確定是否有反應'}
            </Text>
          </div>
        </div>
      </Card>
    </Card>
  );
}

// 主元件
export default function ImmediateReactionPrinciple() {
  const items = [
    {
      key: '1',
      label: '即時搜尋',
      children: <InstantSearchDemo />,
    },
    {
      key: '2',
      label: '密碼強度',
      children: <PasswordStrengthDemo />,
    },
    {
      key: '3',
      label: '載入更多',
      children: <InfiniteScrollDemo />,
    },
    {
      key: '4',
      label: '按鈕反饋',
      children: <ButtonFeedbackDemo />,
    },
  ];

  return (
    <div>
      <Title level={2}>立即反應原則 (Immediate Reaction)</Title>
      <Divider />

      <Card style={{ marginBottom: 24, backgroundColor: '#fff7e6' }}>
        <Title level={4}>
          <ThunderboltOutlined style={{ marginRight: 8 }} />
          原則說明
        </Title>
        <Paragraph>
          <Text strong>立即反應原則</Text>
          強調雖然我們不能將牛頓定律推到使用者介面，但我們可以將這項原理應用於使用者互動。
          系統應該對使用者的每個操作給予即時的視覺反饋。
        </Paragraph>
        <Paragraph>
          <Text strong>設計應用：</Text>
        </Paragraph>
        <ul>
          <li>
            <Text>輸入時即時顯示搜尋建議或自動完成</Text>
          </li>
          <li>
            <Text>表單輸入時即時驗證並顯示反饋</Text>
          </li>
          <li>
            <Text>按鈕點擊後立即顯示 loading 狀態</Text>
          </li>
          <li>
            <Text>操作完成後立即顯示成功/失敗提示</Text>
          </li>
        </ul>
      </Card>

      <Tabs items={items} type='card' />
    </div>
  );
}

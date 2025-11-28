import { useState } from 'react';
import {
  Card,
  Typography,
  Tabs,
  Divider,
  Space,
  Button,
  Tooltip,
  Tour,
  Empty,
  Input,
  message,
  Steps,
  Alert,
} from 'antd';
import type { TourProps } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CompassOutlined,
  LikeOutlined,
  DislikeOutlined,
  PlusOutlined,
  FileTextOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { useRef } from 'react';

const { Title, Text, Paragraph } = Typography;

// 範例一：評價引導
function FeedbackGuidanceDemo() {
  const [showGuidance, setShowGuidance] = useState(true);
  const [liked, setLiked] = useState<boolean | null>(null);

  return (
    <Card title='評價引導' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        透過視覺提示引導使用者完成評價操作，讓使用者知道可以做什麼。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showGuidance ? 'primary' : 'default'}
          onClick={() => setShowGuidance(true)}
          icon={<CheckCircleOutlined />}
        >
          有引導提示（正確）
        </Button>
        <Button
          type={!showGuidance ? 'primary' : 'default'}
          onClick={() => setShowGuidance(false)}
          icon={<CloseCircleOutlined />}
        >
          無引導提示
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showGuidance ? '#f6ffed' : '#fff2f0',
          borderColor: showGuidance ? '#b7eb8f' : '#ffccc7',
        }}
      >
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          {showGuidance ? (
            <Text style={{ fontSize: 16 }}>你覺得這篇文章如何？</Text>
          ) : (
            <Text style={{ fontSize: 14, color: '#999' }}>評價</Text>
          )}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              justifyContent: 'center',
              gap: showGuidance ? 24 : 8,
            }}
          >
            {showGuidance ? (
              <>
                <Tooltip title='喜歡這篇文章'>
                  <Button
                    type={liked === true ? 'primary' : 'default'}
                    icon={<LikeOutlined />}
                    size='large'
                    onClick={() => setLiked(true)}
                  />
                </Tooltip>
                <Tooltip title='不喜歡這篇文章'>
                  <Button
                    type={liked === false ? 'primary' : 'default'}
                    danger={liked === false}
                    icon={<DislikeOutlined />}
                    size='large'
                    onClick={() => setLiked(false)}
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Button
                  type={liked === true ? 'primary' : 'default'}
                  icon={<LikeOutlined />}
                  size='small'
                  onClick={() => setLiked(true)}
                />
                <Button
                  type={liked === false ? 'primary' : 'default'}
                  danger={liked === false}
                  icon={<DislikeOutlined />}
                  size='small'
                  onClick={() => setLiked(false)}
                />
              </>
            )}
          </div>
          <div style={{ marginTop: 16, minHeight: 20 }}>
            {showGuidance ? (
              <Text type='secondary' style={{ fontSize: 12 }}>
                {liked === null
                  ? '點擊上方按鈕給予評價'
                  : liked
                    ? '感謝您的喜歡！'
                    : '感謝您的反饋，我們會繼續改進'}
              </Text>
            ) : (
              liked !== null && (
                <Text type='secondary' style={{ fontSize: 12 }}>
                  已評價
                </Text>
              )
            )}
          </div>
        </div>
      </Card>
    </Card>
  );
}

// 範例二：功能導覽 Tour
function FeatureTourDemo() {
  const [showTour, setShowTour] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  const ref1 = useRef<HTMLButtonElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const steps: TourProps['steps'] = [
    {
      title: '添加頁面',
      description: '點擊加號立即添加頁面，即可進行相關編輯',
      target: () => ref1.current!,
    },
    {
      title: '頁面列表',
      description: '這裡顯示所有已建立的頁面',
      target: () => ref2.current!,
    },
    {
      title: '編輯區域',
      description: '在此編輯頁面內容',
      target: () => ref3.current!,
    },
  ];

  return (
    <Card title='功能導覽' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text> 新功能或複雜介面可透過導覽 Tour
        引導使用者了解如何操作。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showTour ? 'primary' : 'default'}
          onClick={() => {
            setShowTour(true);
            setTourOpen(true);
          }}
          icon={<CheckCircleOutlined />}
        >
          有功能導覽（正確）
        </Button>
        <Button
          type={!showTour ? 'primary' : 'default'}
          onClick={() => setShowTour(false)}
          icon={<CloseCircleOutlined />}
        >
          無功能導覽
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showTour ? '#f6ffed' : '#fff2f0',
          borderColor: showTour ? '#b7eb8f' : '#ffccc7',
        }}
      >
        {showTour && (
          <Alert
            type='info'
            title={
              <Text type={'secondary'}>
                提示：點擊左側 + 按鈕新增頁面，在右側區域編輯內容
              </Text>
            }
            style={{ color: '#0050b3', marginBottom: 16 }}
            closable
          />
        )}
        <div style={{ display: 'flex', height: 200 }}>
          {/* 左側頁面列表 */}
          <div
            ref={ref2}
            style={{
              width: 120,
              borderRight: '1px solid #e8e8e8',
              padding: 8,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <FileTextOutlined />
              <Button
                ref={ref1}
                type='text'
                size='small'
                icon={<PlusOutlined />}
              />
            </div>
            <div
              style={{
                padding: '4px 8px',
                backgroundColor: '#e6f4ff',
                borderRadius: 4,
                marginBottom: 4,
                fontSize: 12,
              }}
            >
              首頁
            </div>
            <div
              style={{
                padding: '4px 8px',
                borderRadius: 4,
                marginBottom: 4,
                fontSize: 12,
              }}
            >
              關於
            </div>
          </div>
          {/* 右側編輯區 */}
          <div ref={ref3} style={{ flex: 1, padding: 16 }}>
            <div
              style={{
                height: '100%',
                border: '1px dashed #d9d9d9',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text type='secondary'>編輯區域</Text>
            </div>
          </div>
        </div>
      </Card>

      <Tour open={tourOpen} onClose={() => setTourOpen(false)} steps={steps} />

      {showTour && !tourOpen && (
        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <Button type='link' onClick={() => setTourOpen(true)}>
            再次查看導覽
          </Button>
        </div>
      )}
    </Card>
  );
}

// 範例三：空狀態引導
function EmptyStateGuidanceDemo() {
  const [showGuidance, setShowGuidance] = useState(true);
  const [hasActivity, setHasActivity] = useState(false);

  return (
    <Card title='空狀態引導' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        當頁面沒有內容時，應該提供明確的引導，告訴使用者下一步該做什麼。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showGuidance ? 'primary' : 'default'}
          onClick={() => {
            setShowGuidance(true);
            setHasActivity(false);
          }}
          icon={<CheckCircleOutlined />}
        >
          有引導提示（正確）
        </Button>
        <Button
          type={!showGuidance ? 'primary' : 'default'}
          onClick={() => {
            setShowGuidance(false);
            setHasActivity(false);
          }}
          icon={<CloseCircleOutlined />}
        >
          無引導提示
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showGuidance ? '#f6ffed' : '#fafafa',
          borderColor: showGuidance ? '#b7eb8f' : '#d9d9d9',
        }}
      >
        {hasActivity ? (
          <div style={{ padding: 20, textAlign: 'center' }}>
            <Card size='small' style={{ maxWidth: 300, margin: '0 auto' }}>
              <Text strong>新年促銷活動</Text>
              <br />
              <Text type='secondary'>2025/01/01 - 2025/01/31</Text>
            </Card>
            <Button
              type='link'
              onClick={() => setHasActivity(false)}
              style={{ marginTop: 12 }}
            >
              清除活動
            </Button>
          </div>
        ) : showGuidance ? (
          <Empty
            image={
              <div
                style={{
                  width: 80,
                  height: 80,
                  margin: '0 auto',
                  backgroundColor: '#f5f5f5',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FileTextOutlined style={{ fontSize: 32, color: '#faad14' }} />
              </div>
            }
            description={
              <span>
                當前暫無活動
                <br />
                <Text type='secondary' style={{ fontSize: 12 }}>
                  建立您的第一個活動來吸引更多用戶
                </Text>
              </span>
            }
          >
            <Button
              type='primary'
              icon={<PlusOutlined />}
              onClick={() => setHasActivity(true)}
            >
              創建活動組
            </Button>
          </Empty>
        ) : (
          <div style={{ padding: 40, textAlign: 'center' }}>
            <Text type='secondary'>當前暫無活動</Text>
            <div style={{ marginTop: 16 }}>
              <Button
                type='text'
                size='small'
                onClick={() => setHasActivity(true)}
                style={{ color: '#999' }}
              >
                新增
              </Button>
            </div>
          </div>
        )}
      </Card>
    </Card>
  );
}

// 範例四：輸入提示引導
function InputHintDemo() {
  const [showGuidance, setShowGuidance] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      void message.success('發送成功！');
      setInputValue('');
      setStep((s) => Math.min(s + 1, 2));
    }
  };

  return (
    <Card title='輸入提示引導' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        在輸入框提供即時提示，引導使用者正確輸入內容。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showGuidance ? 'primary' : 'default'}
          onClick={() => setShowGuidance(true)}
          icon={<CheckCircleOutlined />}
        >
          有輸入提示（正確）
        </Button>
        <Button
          type={!showGuidance ? 'primary' : 'default'}
          onClick={() => setShowGuidance(false)}
          icon={<CloseCircleOutlined />}
        >
          無輸入提示
        </Button>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: showGuidance ? '#f6ffed' : '#fff2f0',
          borderColor: showGuidance ? '#b7eb8f' : '#ffccc7',
        }}
      >
        {showGuidance ? (
          <Steps
            current={step}
            size='small'
            style={{ marginBottom: 16 }}
            items={[
              { title: '輸入問題' },
              { title: '等待回覆' },
              { title: '完成' },
            ]}
          />
        ) : (
          <div style={{ marginBottom: 12 }}>
            <Text>輸入問題</Text>
          </div>
        )}

        <div style={{ position: 'relative' }}>
          <Input.TextArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              showGuidance
                ? '請描述您遇到的問題，我們會盡快回覆...'
                : '輸入問題'
            }
            rows={3}
            style={{
              resize: 'none',
              paddingRight: 50,
            }}
          />
          <Button
            type={showGuidance ? 'primary' : 'text'}
            icon={<SendOutlined />}
            style={{
              position: 'absolute',
              right: 8,
              bottom: 8,
            }}
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
          />
        </div>

        <div style={{ marginTop: 8, minHeight: 20 }}>
          {showGuidance ? (
            <Text type='secondary' style={{ fontSize: 12 }}>
              {inputValue.length === 0
                ? '提示：詳細描述問題可以幫助我們更快解決'
                : inputValue.length < 10
                  ? '建議：再多描述一些細節'
                  : '很好！點擊發送按鈕提交您的問題'}
            </Text>
          ) : (
            inputValue.trim() &&
            step > 0 && (
              <Text type='secondary' style={{ fontSize: 12 }}>
                已發送
              </Text>
            )
          )}
        </div>
      </Card>
    </Card>
  );
}

// 主元件
export default function GuidancePrinciple() {
  const items = [
    {
      key: '1',
      label: '評價引導',
      children: <FeedbackGuidanceDemo />,
    },
    {
      key: '2',
      label: '功能導覽',
      children: <FeatureTourDemo />,
    },
    {
      key: '3',
      label: '空狀態引導',
      children: <EmptyStateGuidanceDemo />,
    },
    {
      key: '4',
      label: '輸入提示',
      children: <InputHintDemo />,
    },
  ];

  return (
    <div>
      <Title level={2}>引導原則 (Guidance)</Title>
      <Divider />

      <Card style={{ marginBottom: 24, backgroundColor: '#fff7e6' }}>
        <Title level={4}>
          <CompassOutlined style={{ marginRight: 8 }} />
          原則說明
        </Title>
        <Paragraph>
          <Text strong>引導原則</Text>
          強調指引導使用者完成互動的提示和線索。即時提示或視覺提示，暗示介面會發生什麼。
        </Paragraph>
        <Paragraph>
          <Text strong>設計應用：</Text>
        </Paragraph>
        <ul>
          <li>
            <Text>提供 Tooltip 說明功能用途</Text>
          </li>
          <li>
            <Text>使用功能導覽 (Tour) 引導新用戶</Text>
          </li>
          <li>
            <Text>空狀態時提供明確的行動引導</Text>
          </li>
          <li>
            <Text>輸入時提供即時提示和反饋</Text>
          </li>
        </ul>
      </Card>

      <Tabs items={items} type='card' />
    </div>
  );
}

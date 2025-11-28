import { useState } from 'react';
import {
  Card,
  Typography,
  Tabs,
  Divider,
  Space,
  Button,
  Row,
  Col,
  Avatar,
  Badge,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  AimOutlined,
  SettingOutlined,
  FileTextOutlined,
  BarChartOutlined,
  BellOutlined,
  WarningOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// 範例一：通知卡片重複
function NotificationCardDemo() {
  const [isConsistent, setIsConsistent] = useState(true);

  const notifications = [
    {
      type: 'error',
      title: '系統錯誤通知',
      description: '伺服器連線發生問題，請稍後再試。',
      time: '10:30',
    },
    {
      type: 'warning',
      title: '帳號安全提醒',
      description: '偵測到異常登入行為，建議修改密碼。',
      time: '09:15',
    },
  ];

  const getTypeStyle = (type: string, consistent: boolean) => {
    if (!consistent) {
      return {
        borderColor: type === 'error' ? '#ff4d4f' : '#d9d9d9',
        iconColor: type === 'error' ? '#ff4d4f' : '#faad14',
        bgColor: '#fff',
      };
    }
    return {
      borderColor: type === 'error' ? '#ffccc7' : '#ffe58f',
      iconColor: type === 'error' ? '#ff4d4f' : '#faad14',
      bgColor: type === 'error' ? '#fff2f0' : '#fffbe6',
    };
  };

  return (
    <Card title='通知卡片重複樣式' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        相同類型的通知應該使用一致的視覺樣式（邊框、圖標位置、背景色），讓使用者能快速識別通知類型。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(true)}
          icon={<CheckCircleOutlined />}
        >
          一致樣式（正確）
        </Button>
        <Button
          type={!isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(false)}
          icon={<CloseCircleOutlined />}
        >
          不一致樣式（錯誤）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title={isConsistent ? '正確：一致的卡片樣式' : '錯誤：不一致的樣式'}
            style={{
              backgroundColor: isConsistent ? '#f6ffed' : '#fff2f0',
              borderColor: isConsistent ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <Space vertical style={{ width: '100%' }} size={12}>
              {notifications.map((item, index) => {
                const style = getTypeStyle(item.type, isConsistent);
                return (
                  <div
                    key={index}
                    style={{
                      padding: isConsistent ? 16 : index === 0 ? 16 : 12,
                      borderRadius: isConsistent ? 8 : index === 0 ? 8 : 4,
                      border: `1px solid ${style.borderColor}`,
                      borderLeft: isConsistent
                        ? `4px solid ${style.iconColor}`
                        : index === 0
                          ? `4px solid ${style.iconColor}`
                          : `1px solid ${style.borderColor}`,
                      backgroundColor: style.bgColor,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: isConsistent
                        ? 'flex-start'
                        : index === 0
                          ? 'flex-start'
                          : 'center',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 12 }}>
                      {(isConsistent || index === 0) && (
                        <Badge
                          count={
                            item.type === 'error' ? (
                              <WarningOutlined
                                style={{ color: style.iconColor }}
                              />
                            ) : (
                              <BellOutlined
                                style={{ color: style.iconColor }}
                              />
                            )
                          }
                        />
                      )}
                      <div>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>
                          {item.title}
                        </div>
                        <div style={{ color: '#666', fontSize: 13 }}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <Text type='secondary' style={{ fontSize: 12 }}>
                      {item.time}
                    </Text>
                  </div>
                );
              })}
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={isConsistent ? 'success' : 'danger'}>
                {isConsistent
                  ? '兩張通知卡片使用相同的結構：左側彩色邊框、圖標、標題、描述、時間戳，使用者可以快速識別這是同一類型的元素。'
                  : '兩張卡片的樣式不一致：圓角不同、有無圖標、邊框樣式不同，使用者難以判斷它們的關聯性。'}
              </Text>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例二：導航項目重複
function NavigationRepetitionDemo() {
  const [isConsistent, setIsConsistent] = useState(true);
  const [activeNav, setActiveNav] = useState(0);

  const navItems = [
    { icon: <SettingOutlined />, label: '設定', badge: null },
    { icon: <FileTextOutlined />, label: '文件', badge: null },
    { icon: <BarChartOutlined />, label: '報表', badge: 3 },
  ];

  return (
    <Card title='導航項目重複' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        導航列中的每個項目應該有相同的結構和視覺處理方式，包含圖標大小、文字位置、間距等。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(true)}
          icon={<CheckCircleOutlined />}
        >
          一致結構（正確）
        </Button>
        <Button
          type={!isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(false)}
          icon={<CloseCircleOutlined />}
        >
          不一致結構（錯誤）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title={isConsistent ? '正確：一致的導航結構' : '錯誤：不一致的結構'}
            style={{
              backgroundColor: isConsistent ? '#f6ffed' : '#fff2f0',
              borderColor: isConsistent ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <div
              style={{
                display: 'flex',
                backgroundColor: '#fafafa',
                borderRadius: 8,
                padding: 8,
                gap: isConsistent ? 8 : 4,
              }}
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveNav(index)}
                  style={{
                    display: 'flex',
                    flexDirection: isConsistent
                      ? 'column'
                      : index === 1
                        ? 'row'
                        : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isConsistent ? 4 : index === 1 ? 8 : 4,
                    padding: isConsistent
                      ? '12px 24px'
                      : index === 0
                        ? '12px 24px'
                        : index === 1
                          ? '8px 16px'
                          : '16px 20px',
                    borderRadius: isConsistent
                      ? 6
                      : index === 0
                        ? 6
                        : index === 1
                          ? 20
                          : 4,
                    backgroundColor: activeNav === index ? '#1677ff' : '#fff',
                    color: activeNav === index ? '#fff' : '#666',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    flex: 1,
                    fontSize: isConsistent
                      ? 20
                      : index === 0
                        ? 20
                        : index === 1
                          ? 16
                          : 24,
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      fontSize: isConsistent ? 13 : index === 1 ? 14 : 12,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={isConsistent ? 'success' : 'danger'}>
                {isConsistent
                  ? '每個導航項目都有相同的結構：圖標在上、文字在下、相同的內距和圓角，形成統一的視覺節奏。'
                  : '導航項目的排列方式、大小、圓角都不同，破壞了視覺的一致性和可預測性。'}
              </Text>
            </Paragraph>
            <Paragraph>
              <Text strong>
                相同的元素不斷重複出現，可以幫助使用者認識到這些元素之間的關聯性。
              </Text>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例三：列表項目重複
function ListItemRepetitionDemo() {
  const [isConsistent, setIsConsistent] = useState(true);

  const contacts = [
    {
      name: '王小明',
      email: 'wang@example.com',
      phone: '0912-345-678',
      avatar: 'W',
    },
    {
      name: '李小華',
      email: 'lee@example.com',
      phone: '0923-456-789',
      avatar: 'L',
    },
    {
      name: '張大同',
      email: 'zhang@example.com',
      phone: '0934-567-890',
      avatar: 'Z',
    },
  ];

  return (
    <Card title='列表項目重複' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        列表中的每個項目應該遵循相同的資訊架構和視覺排列，讓使用者能夠快速掃描和比較。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(true)}
          icon={<CheckCircleOutlined />}
        >
          一致排列（正確）
        </Button>
        <Button
          type={!isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(false)}
          icon={<CloseCircleOutlined />}
        >
          不一致排列（錯誤）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={14}>
          <Card
            size='small'
            title={isConsistent ? '正確：一致的列表結構' : '錯誤：不一致的結構'}
            style={{
              backgroundColor: isConsistent ? '#f6ffed' : '#fff2f0',
              borderColor: isConsistent ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <Space vertical style={{ width: '100%' }} size={0}>
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: isConsistent
                      ? '16px 12px'
                      : index === 0
                        ? '16px 12px'
                        : index === 1
                          ? '12px 8px'
                          : '20px 16px',
                    borderBottom:
                      index < contacts.length - 1
                        ? '1px solid #f0f0f0'
                        : 'none',
                    gap: isConsistent ? 16 : index === 1 ? 8 : 16,
                    flexDirection: isConsistent
                      ? 'row'
                      : index === 2
                        ? 'row-reverse'
                        : 'row',
                  }}
                >
                  <Avatar
                    size={
                      isConsistent
                        ? 48
                        : index === 0
                          ? 48
                          : index === 1
                            ? 32
                            : 56
                    }
                    style={{
                      backgroundColor: '#1677ff',
                      flexShrink: 0,
                    }}
                  >
                    {contact.avatar}
                  </Avatar>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: isConsistent ? 15 : index === 1 ? 13 : 15,
                        marginBottom: 4,
                      }}
                    >
                      {contact.name}
                    </div>
                    <Space
                      size={isConsistent ? 16 : 8}
                      style={{ flexWrap: 'wrap' }}
                      vertical={isConsistent ? false : index === 1}
                    >
                      <Text type='secondary' style={{ fontSize: 13 }}>
                        <MailOutlined style={{ marginRight: 4 }} />
                        {contact.email}
                      </Text>
                      <Text type='secondary' style={{ fontSize: 13 }}>
                        <PhoneOutlined style={{ marginRight: 4 }} />
                        {contact.phone}
                      </Text>
                    </Space>
                  </div>
                </div>
              ))}
            </Space>
          </Card>
        </Col>
        <Col span={10}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={isConsistent ? 'success' : 'danger'}>
                {isConsistent
                  ? '每個聯絡人項目都有相同的結構：頭像在左、姓名在上、聯絡資訊在下，形成可預測的閱讀模式。'
                  : '頭像大小不一、排列方向不同、間距不一致，使用者需要重新理解每個項目的結構。'}
              </Text>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例四：按鈕樣式重複
function ButtonStyleRepetitionDemo() {
  const [isConsistent, setIsConsistent] = useState(true);

  return (
    <Card title='按鈕樣式重複' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        相同功能類型的按鈕應該使用相同的樣式，例如所有主要操作使用藍色按鈕，所有次要操作使用灰色按鈕。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(true)}
          icon={<CheckCircleOutlined />}
        >
          一致樣式（正確）
        </Button>
        <Button
          type={!isConsistent ? 'primary' : 'default'}
          onClick={() => setIsConsistent(false)}
          icon={<CloseCircleOutlined />}
        >
          不一致樣式（錯誤）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title={isConsistent ? '正確：一致的按鈕樣式' : '錯誤：不一致的樣式'}
            style={{
              backgroundColor: isConsistent ? '#f6ffed' : '#fff2f0',
              borderColor: isConsistent ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <Text strong style={{ display: 'block', marginBottom: 12 }}>
                表單 A
              </Text>
              <Space>
                <Button type='primary'>儲存</Button>
                <Button>取消</Button>
              </Space>
            </div>

            <div style={{ marginBottom: 24 }}>
              <Text strong style={{ display: 'block', marginBottom: 12 }}>
                表單 B
              </Text>
              <Space>
                {isConsistent ? (
                  <>
                    <Button type='primary'>確認</Button>
                    <Button>返回</Button>
                  </>
                ) : (
                  <>
                    <Button
                      style={{
                        backgroundColor: '#52c41a',
                        borderColor: '#52c41a',
                        color: '#fff',
                      }}
                    >
                      確認
                    </Button>
                    <Button type='link'>返回</Button>
                  </>
                )}
              </Space>
            </div>

            <div>
              <Text strong style={{ display: 'block', marginBottom: 12 }}>
                對話框
              </Text>
              <Space>
                {isConsistent ? (
                  <>
                    <Button type='primary'>提交</Button>
                    <Button>關閉</Button>
                  </>
                ) : (
                  <>
                    <Button
                      style={{
                        borderRadius: 20,
                        backgroundColor: '#722ed1',
                        borderColor: '#722ed1',
                        color: '#fff',
                      }}
                    >
                      提交
                    </Button>
                    <Button type='dashed'>關閉</Button>
                  </>
                )}
              </Space>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={isConsistent ? 'success' : 'danger'}>
                {isConsistent
                  ? '所有主要操作都使用藍色填充按鈕，次要操作都使用白底描邊按鈕，使用者可以快速識別按鈕的重要程度。'
                  : '每個地方的按鈕樣式都不同：顏色、圓角、類型都不一致，使用者無法建立一致的心理模型。'}
              </Text>
            </Paragraph>
            <Paragraph>
              <Text strong>重複原則的好處：</Text>
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>建立視覺一致性</li>
              <li>減少使用者認知負擔</li>
              <li>提高介面可預測性</li>
              <li>強化品牌識別</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 主元件
export default function RepetitionPrinciple() {
  const items = [
    {
      key: '1',
      label: '通知卡片',
      children: <NotificationCardDemo />,
    },
    {
      key: '2',
      label: '導航項目',
      children: <NavigationRepetitionDemo />,
    },
    {
      key: '3',
      label: '列表項目',
      children: <ListItemRepetitionDemo />,
    },
    {
      key: '4',
      label: '按鈕樣式',
      children: <ButtonStyleRepetitionDemo />,
    },
  ];

  return (
    <div>
      <Title level={2}>重複原則 (Repetition)</Title>
      <Divider />

      <Card style={{ marginBottom: 24, backgroundColor: '#fff7e6' }}>
        <Title level={4}>
          <AimOutlined style={{ marginRight: 8 }} />
          原則說明
        </Title>
        <Paragraph>
          <Text strong>重複原則</Text>
          是指在整個設計中重複使用相同的視覺元素（顏色、形狀、字體、間距等），以創造一致性和統一感。
        </Paragraph>
        <Paragraph>
          <Text strong>設計應用：</Text>
        </Paragraph>
        <ul>
          <li>
            <Text>相同類型的元素應該有相同的視覺樣式</Text>
          </li>
          <li>
            <Text>
              相同的元素不斷重複出現，可以幫助使用者認識到這些元素之間的關聯性
            </Text>
          </li>
          <li>
            <Text>重複使用的元素應該保持一致的結構和排列方式</Text>
          </li>
          <li>
            <Text>建立設計系統來確保元件的一致性</Text>
          </li>
        </ul>
      </Card>

      <Tabs items={items} type='card' />
    </div>
  );
}

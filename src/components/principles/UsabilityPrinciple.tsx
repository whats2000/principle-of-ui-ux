import { useState } from 'react';
import {
  Card,
  Typography,
  Tabs,
  Divider,
  Space,
  Button,
  InputNumber,
  Slider,
  Input,
  Row,
  Col,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  AimOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// 範例一：數字輸入器大小對比
function NumberInputSizeDemo() {
  const [value1, setValue1] = useState(36);
  const [value2, setValue2] = useState(36);
  const [value3, setValue3] = useState(37);
  const [showLarge, setShowLarge] = useState(true);

  return (
    <Card title='數字輸入器大小' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        如果工具觸手可及且夠大，方便瞄準，那麼我們就能改善使用者的互動體驗。
        較大的點擊區域能減少操作錯誤，提升使用效率。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showLarge ? 'primary' : 'default'}
          onClick={() => setShowLarge(true)}
          icon={<CheckCircleOutlined />}
        >
          大尺寸控件（正確）
        </Button>
        <Button
          type={!showLarge ? 'primary' : 'default'}
          onClick={() => setShowLarge(false)}
          icon={<CloseCircleOutlined />}
        >
          小尺寸控件（較難操作）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title={showLarge ? '大尺寸數字輸入器' : '小尺寸數字輸入器'}
            style={{
              backgroundColor: showLarge ? '#f6ffed' : '#fff2f0',
              borderColor: showLarge ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <Space vertical style={{ width: '100%' }} size={16}>
              {/* 項目 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {showLarge ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #1677ff',
                      borderRadius: 6,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRight: '1px solid #1677ff',
                      }}
                    >
                      <Button
                        type='text'
                        size='small'
                        icon={<CaretUpOutlined />}
                        onClick={() => setValue1(value1 + 1)}
                        style={{
                          borderRadius: 0,
                          height: 24,
                          color: '#1677ff',
                        }}
                      />
                      <Button
                        type='text'
                        size='small'
                        icon={<CaretDownOutlined />}
                        onClick={() => setValue1(Math.max(0, value1 - 1))}
                        style={{
                          borderRadius: 0,
                          height: 24,
                          color: '#1677ff',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#1677ff',
                        backgroundColor: '#e6f4ff',
                      }}
                    >
                      {value1}
                    </div>
                  </div>
                ) : (
                  <InputNumber
                    size='small'
                    value={value1}
                    onChange={(v) => setValue1(v || 0)}
                    style={{ width: 60 }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <Text>商品名稱：經典款 T-Shirt</Text>
                  <br />
                  <Text type='secondary' style={{ fontSize: 12 }}>
                    尺寸：M / 顏色：黑色
                  </Text>
                </div>
              </div>

              {/* 項目 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {showLarge ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #1677ff',
                      borderRadius: 6,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRight: '1px solid #1677ff',
                      }}
                    >
                      <Button
                        type='text'
                        size='small'
                        icon={<CaretUpOutlined />}
                        onClick={() => setValue2(value2 + 1)}
                        style={{
                          borderRadius: 0,
                          height: 24,
                          color: '#1677ff',
                        }}
                      />
                      <Button
                        type='text'
                        size='small'
                        icon={<CaretDownOutlined />}
                        onClick={() => setValue2(Math.max(0, value2 - 1))}
                        style={{
                          borderRadius: 0,
                          height: 24,
                          color: '#1677ff',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#1677ff',
                        backgroundColor: '#e6f4ff',
                      }}
                    >
                      {value2}
                    </div>
                  </div>
                ) : (
                  <InputNumber
                    size='small'
                    value={value2}
                    onChange={(v) => setValue2(v || 0)}
                    style={{ width: 60 }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <Text>商品名稱：休閒牛仔褲</Text>
                  <br />
                  <Text type='secondary' style={{ fontSize: 12 }}>
                    尺寸：32 / 顏色：深藍
                  </Text>
                </div>
              </div>

              {/* 項目 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {showLarge ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #1677ff',
                      borderRadius: 6,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRight: '1px solid #1677ff',
                      }}
                    >
                      <Button
                        type='text'
                        size='small'
                        icon={<CaretUpOutlined />}
                        onClick={() => setValue3(value3 + 1)}
                        style={{
                          borderRadius: 0,
                          height: 24,
                          color: '#1677ff',
                        }}
                      />
                      <Button
                        type='text'
                        size='small'
                        icon={<CaretDownOutlined />}
                        onClick={() => setValue3(Math.max(0, value3 - 1))}
                        style={{
                          borderRadius: 0,
                          height: 24,
                          color: '#1677ff',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#1677ff',
                        backgroundColor: '#e6f4ff',
                      }}
                    >
                      {value3}
                    </div>
                  </div>
                ) : (
                  <InputNumber
                    size='small'
                    value={value3}
                    onChange={(v) => setValue3(v || 0)}
                    style={{ width: 60 }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <Text>商品名稱：運動鞋款</Text>
                  <br />
                  <Text type='secondary' style={{ fontSize: 12 }}>
                    尺寸：42 / 顏色：白色
                  </Text>
                </div>
              </div>
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title="費茨定律 (Fitts' Law)">
            <Paragraph>
              <Text strong>費茨定律</Text>
              指出：點擊目標所需的時間與目標大小和距離有關。
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>目標越大，點擊越快</li>
              <li>目標越近，點擊越快</li>
              <li>建議最小點擊區域為 44x44 像素</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例二：可點擊區域大小
function ClickableAreaDemo() {
  const [showLarge, setShowLarge] = useState(true);

  const items = [
    { label: '首頁', value: 'home' },
    { label: '產品', value: 'products' },
    { label: '關於', value: 'about' },
  ];

  const [selected, setSelected] = useState('home');

  return (
    <Card title='可點擊區域大小' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        較大的可點擊區域能讓使用者更容易點擊目標，尤其是在觸控裝置上。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showLarge ? 'primary' : 'default'}
          onClick={() => setShowLarge(true)}
          icon={<CheckCircleOutlined />}
        >
          大點擊區域（正確）
        </Button>
        <Button
          type={!showLarge ? 'primary' : 'default'}
          onClick={() => setShowLarge(false)}
          icon={<CloseCircleOutlined />}
        >
          小點擊區域（較難操作）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title='選項列表'
            style={{
              backgroundColor: showLarge ? '#f6ffed' : '#fff2f0',
              borderColor: showLarge ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: showLarge ? 8 : 4,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.value}
                  onClick={() => setSelected(item.value)}
                  style={{
                    padding: showLarge ? '16px 20px' : '6px 12px',
                    backgroundColor:
                      selected === item.value ? '#e6f4ff' : '#fff',
                    border: `1px solid ${selected === item.value ? '#1677ff' : '#e8e8e8'}`,
                    borderRadius: showLarge ? 8 : 4,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: showLarge ? 16 : 13,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={showLarge ? 'success' : 'danger'}>
                {showLarge
                  ? '大點擊區域：每個選項都有足夠的內距，容易點擊，減少誤觸。'
                  : '小點擊區域：選項太小太密集，容易誤點相鄰選項，使用體驗差。'}
              </Text>
            </Paragraph>
            <Paragraph>
              <Text strong>建議：</Text>
              <br />
              觸控裝置最小點擊區域：44x44px
              <br />
              滑鼠操作最小點擊區域：24x24px
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例三：Slider vs 輸入框
function SliderInputDemo() {
  const [value, setValue] = useState(50);
  const [showSlider, setShowSlider] = useState(true);

  return (
    <Card title='滑桿 vs 輸入框' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        對於範圍值的選擇，滑桿比輸入框更直觀，使用者可以快速拖曳到目標值。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showSlider ? 'primary' : 'default'}
          onClick={() => setShowSlider(true)}
          icon={<CheckCircleOutlined />}
        >
          滑桿選擇（直觀）
        </Button>
        <Button
          type={!showSlider ? 'primary' : 'default'}
          onClick={() => setShowSlider(false)}
          icon={<CloseCircleOutlined />}
        >
          輸入框輸入（需要思考）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title='音量控制'
            style={{
              backgroundColor: showSlider ? '#f6ffed' : '#fffbe6',
              borderColor: showSlider ? '#b7eb8f' : '#ffe58f',
            }}
          >
            <div style={{ padding: '20px 0' }}>
              {showSlider ? (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}
                  >
                    <Text>音量</Text>
                    <Text strong>{value}%</Text>
                  </div>
                  <Slider
                    value={value}
                    onChange={setValue}
                    tooltip={{ formatter: (v) => `${v}%` }}
                  />
                </div>
              ) : (
                <div>
                  <Text style={{ display: 'block', marginBottom: 8 }}>
                    音量（0-100）
                  </Text>
                  <Space.Compact>
                    <InputNumber
                      value={value}
                      onChange={(v) => setValue(v || 0)}
                      min={0}
                      max={100}
                      style={{ width: '100%' }}
                    />
                    <Space.Addon>%</Space.Addon>
                  </Space.Compact>
                </div>
              )}
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={showSlider ? 'success' : 'warning'}>
                {showSlider
                  ? '滑桿：視覺化呈現當前值在範圍中的位置，拖曳即可調整，無需思考數字。'
                  : '輸入框：需要使用者思考要輸入什麼數字，且無法直觀看到相對位置。'}
              </Text>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例四：行內編輯觸發區域
function InlineEditTriggerDemo() {
  const [showLarge, setShowLarge] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('專案名稱');
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    setValue(tempValue);
    setIsEditing(false);
  };

  return (
    <Card title='行內編輯觸發區域' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        行內編輯的觸發區域應該夠大，讓使用者容易發現和點擊。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showLarge ? 'primary' : 'default'}
          onClick={() => setShowLarge(true)}
          icon={<CheckCircleOutlined />}
        >
          整行可點擊（正確）
        </Button>
        <Button
          type={!showLarge ? 'primary' : 'default'}
          onClick={() => setShowLarge(false)}
          icon={<CloseCircleOutlined />}
        >
          僅圖標可點擊（較難觸發）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title='編輯觸發區域'
            style={{
              backgroundColor: showLarge ? '#f6ffed' : '#fff2f0',
              borderColor: showLarge ? '#b7eb8f' : '#ffccc7',
            }}
          >
            {isEditing ? (
              <Space.Compact style={{ width: '100%' }}>
                <Input
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  onPressEnter={handleSave}
                  autoFocus
                />
                <Button type='primary' onClick={handleSave}>
                  儲存
                </Button>
                <Button onClick={() => setIsEditing(false)}>取消</Button>
              </Space.Compact>
            ) : showLarge ? (
              <div
                onClick={() => {
                  setTempValue(value);
                  setIsEditing(true);
                }}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#fafafa',
                  borderRadius: 6,
                  border: '1px dashed #d9d9d9',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1677ff';
                  e.currentTarget.style.backgroundColor = '#e6f4ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#d9d9d9';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
              >
                <Text>{value}</Text>
                <EditOutlined style={{ color: '#999' }} />
              </div>
            ) : (
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#fafafa',
                  borderRadius: 6,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text>{value}</Text>
                <EditOutlined
                  style={{ color: '#1677ff', cursor: 'pointer' }}
                  onClick={() => {
                    setTempValue(value);
                    setIsEditing(true);
                  }}
                />
              </div>
            )}
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={showLarge ? 'success' : 'danger'}>
                {showLarge
                  ? '整行可點擊：點擊任何位置都可以進入編輯模式，有 hover 效果提示可編輯。'
                  : '僅圖標可點擊：使用者必須精確點擊小圖標，容易誤點或找不到編輯入口。'}
              </Text>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 主元件
export default function UsabilityPrinciple() {
  const items = [
    {
      key: '1',
      label: '數字輸入器',
      children: <NumberInputSizeDemo />,
    },
    {
      key: '2',
      label: '點擊區域',
      children: <ClickableAreaDemo />,
    },
    {
      key: '3',
      label: '滑桿 vs 輸入',
      children: <SliderInputDemo />,
    },
    {
      key: '4',
      label: '編輯觸發區',
      children: <InlineEditTriggerDemo />,
    },
  ];

  return (
    <div>
      <Title level={2}>易用性原則 (Usability)</Title>
      <Divider />

      <Card style={{ marginBottom: 24, backgroundColor: '#fff7e6' }}>
        <Title level={4}>
          <AimOutlined style={{ marginRight: 8 }} />
          原則說明
        </Title>
        <Paragraph>
          <Text strong>易用性原則</Text>
          強調如果工具觸手可及且夠大，方便瞄準，那麼我們就能改善使用者的互動體驗。
        </Paragraph>
        <Paragraph>
          <Text strong>設計應用：</Text>
        </Paragraph>
        <ul>
          <li>
            <Text>提供足夠大的點擊區域（至少 44x44 像素）</Text>
          </li>
          <li>
            <Text>常用功能應該容易觸及，減少操作步驟</Text>
          </li>
          <li>
            <Text>使用滑桿等直觀控件取代數字輸入</Text>
          </li>
          <li>
            <Text>擴大可互動元素的觸發區域，而不僅限於視覺元素本身</Text>
          </li>
        </ul>
      </Card>

      <Tabs items={items} type='card' />
    </div>
  );
}

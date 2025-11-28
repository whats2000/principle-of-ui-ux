import { useState } from 'react';
import {
  Card,
  Table,
  Form,
  Input,
  Checkbox,
  Button,
  Slider,
  Space,
  Typography,
  Tabs,
  Tag,
  Divider,
  Row,
  Col,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  AimOutlined,
} from '@ant-design/icons';
import type { TableProps } from 'antd';

const { Title, Text, Paragraph } = Typography;

interface DataType {
  key: string;
  name: string;
  status: 'active' | 'inactive';
  category: string;
}

const tableData: DataType[] = [
  { key: '1', name: '項目一', status: 'active', category: '分類A' },
  { key: '2', name: '項目二', status: 'inactive', category: '分類A' },
  { key: '3', name: '項目三', status: 'active', category: '分類B' },
  { key: '4', name: '項目四', status: 'active', category: '分類B' },
  { key: '5', name: '項目五', status: 'inactive', category: '分類C' },
];

const columns: TableProps<DataType>['columns'] = [
  { title: '名稱', dataIndex: 'name', key: 'name' },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'green' : 'red'}>
        {status === 'active' ? '啟用' : '停用'}
      </Tag>
    ),
  },
  { title: '分類', dataIndex: 'category', key: 'category' },
];

// 範例一：表格間距
function TableSpacingDemo() {
  const [size, setSize] = useState<'small' | 'middle' | 'large'>('middle');

  return (
    <Card title='表格間距示範' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        調整表格的間距大小，觀察不同間距對資訊閱讀的影響。
        較緊湊的間距適合顯示大量資料，較寬鬆的間距提高可讀性。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Text>選擇間距：</Text>
        <Button
          type={size === 'small' ? 'primary' : 'default'}
          onClick={() => setSize('small')}
        >
          小間距
        </Button>
        <Button
          type={size === 'middle' ? 'primary' : 'default'}
          onClick={() => setSize('middle')}
        >
          中間距
        </Button>
        <Button
          type={size === 'large' ? 'primary' : 'default'}
          onClick={() => setSize('large')}
        >
          大間距
        </Button>
      </Space>

      <Table
        columns={columns}
        dataSource={tableData}
        size={size}
        pagination={false}
      />
    </Card>
  );
}

// 未分組的表單
const UngroupedForm = () => (
  <Form layout='vertical'>
    <Form.Item label='帳號'>
      <Input placeholder='請輸入帳號' />
    </Form.Item>
    <Form.Item label='密碼'>
      <Input.Password placeholder='請輸入密碼' />
    </Form.Item>
    <Form.Item label='姓名'>
      <Input placeholder='請輸入姓名' />
    </Form.Item>
    <Form.Item label='電子郵件'>
      <Input placeholder='請輸入電子郵件' />
    </Form.Item>
    <Form.Item label='電話'>
      <Input placeholder='請輸入電話' />
    </Form.Item>
    <Form.Item label='地址'>
      <Input placeholder='請輸入地址' />
    </Form.Item>
    <Form.Item>
      <Checkbox>記住我</Checkbox>
      <Checkbox style={{ marginLeft: 16 }}>訂閱電子報</Checkbox>
      <Checkbox style={{ marginLeft: 16 }}>同意條款</Checkbox>
    </Form.Item>
  </Form>
);

// 有分組的表單
const GroupedForm = () => (
  <Form layout='vertical'>
    <Card
      size='small'
      title='帳號資訊'
      style={{ marginBottom: 16, backgroundColor: '#fafafa' }}
    >
      <Form.Item label='帳號' style={{ marginBottom: 12 }}>
        <Input placeholder='請輸入帳號' />
      </Form.Item>
      <Form.Item label='密碼' style={{ marginBottom: 0 }}>
        <Input.Password placeholder='請輸入密碼' />
      </Form.Item>
    </Card>

    <Card
      size='small'
      title='個人資訊'
      style={{ marginBottom: 16, backgroundColor: '#fafafa' }}
    >
      <Form.Item label='姓名' style={{ marginBottom: 12 }}>
        <Input placeholder='請輸入姓名' />
      </Form.Item>
      <Form.Item label='電子郵件' style={{ marginBottom: 12 }}>
        <Input placeholder='請輸入電子郵件' />
      </Form.Item>
      <Form.Item label='電話' style={{ marginBottom: 12 }}>
        <Input placeholder='請輸入電話' />
      </Form.Item>
      <Form.Item label='地址' style={{ marginBottom: 0 }}>
        <Input placeholder='請輸入地址' />
      </Form.Item>
    </Card>

    <Card size='small' title='偏好設定' style={{ backgroundColor: '#fafafa' }}>
      <Space vertical>
        <Checkbox>記住我</Checkbox>
        <Checkbox>訂閱電子報</Checkbox>
        <Checkbox>同意條款</Checkbox>
      </Space>
    </Card>
  </Form>
);

// 範例二：表單分組
function FormGroupingDemo() {
  const [showGrouped, setShowGrouped] = useState(true);

  return (
    <Card title='表單分組示範' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        將相關的表單欄位分組在一起，幫助使用者理解資訊的關聯性。
        切換查看分組與未分組的差異。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={showGrouped ? 'primary' : 'default'}
          onClick={() => setShowGrouped(true)}
          icon={<CheckCircleOutlined />}
        >
          有分組（正確）
        </Button>
        <Button
          type={!showGrouped ? 'primary' : 'default'}
          onClick={() => setShowGrouped(false)}
          icon={<CloseCircleOutlined />}
        >
          無分組（錯誤）
        </Button>
      </Space>

      <div style={{ maxWidth: 400 }}>
        {showGrouped ? <GroupedForm /> : <UngroupedForm />}
      </div>
    </Card>
  );
}

// 範例三：動態間距調整
function DynamicSpacingDemo() {
  const [spacing, setSpacing] = useState(16);

  const items = [
    { title: '首頁', desc: '返回網站首頁' },
    { title: '產品', desc: '瀏覽所有產品' },
    { title: '關於我們', desc: '了解公司資訊' },
    { title: '聯絡我們', desc: '取得聯絡方式' },
  ];

  return (
    <Card title='動態間距調整' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        拖動滑桿調整元素間距，體驗不同間距對視覺分組的影響。
        當間距過大時，元素看起來像是獨立的；間距適中時，會形成自然的群組感。
      </Paragraph>

      <div style={{ marginBottom: 24 }}>
        <Text>間距大小：{spacing}px</Text>
        <Slider min={0} max={48} value={spacing} onChange={setSpacing} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${spacing}px`,
          padding: 16,
          border: '1px dashed #d9d9d9',
          borderRadius: 8,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '12px 16px',
              backgroundColor: '#f0f5ff',
              borderRadius: 6,
              border: '1px solid #adc6ff',
            }}
          >
            <Text strong>{item.title}</Text>
            <br />
            <Text type='secondary' style={{ fontSize: 12 }}>
              {item.desc}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  );
}

// 範例四：卡片分組對比
function CardGroupingDemo() {
  const [isGrouped, setIsGrouped] = useState(true);

  const products = [
    { name: '商品 A', price: '$100', category: '電子產品' },
    { name: '商品 B', price: '$200', category: '電子產品' },
    { name: '商品 C', price: '$150', category: '服飾' },
    { name: '商品 D', price: '$80', category: '服飾' },
    { name: '商品 E', price: '$300', category: '家居' },
    { name: '商品 F', price: '$120', category: '家居' },
  ];

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, typeof products>,
  );

  return (
    <Card title='商品分類展示' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        透過視覺分組，使用者可以更快速地找到想要的商品類別。
        未分組的列表需要逐一閱讀才能理解。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isGrouped ? 'primary' : 'default'}
          onClick={() => setIsGrouped(true)}
          icon={<CheckCircleOutlined />}
        >
          分類展示（正確）
        </Button>
        <Button
          type={!isGrouped ? 'primary' : 'default'}
          onClick={() => setIsGrouped(false)}
          icon={<CloseCircleOutlined />}
        >
          平鋪展示（錯誤）
        </Button>
      </Space>

      {isGrouped ? (
        <div>
          {Object.entries(groupedProducts).map(([category, items]) => (
            <div key={category} style={{ marginBottom: 24 }}>
              <Title level={5} style={{ marginBottom: 12 }}>
                {category}
              </Title>
              <Row gutter={[16, 16]}>
                {items.map((item, index) => (
                  <Col key={index} span={12}>
                    <Card size='small' hoverable>
                      <Text strong>{item.name}</Text>
                      <br />
                      <Text type='success'>{item.price}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {products.map((item, index) => (
            <Col key={index} span={8}>
              <Card size='small' hoverable>
                <Text strong>{item.name}</Text>
                <br />
                <Text type='secondary' style={{ fontSize: 12 }}>
                  {item.category}
                </Text>
                <br />
                <Text type='success'>{item.price}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
}

// 主元件
export default function ProximityPrinciple() {
  const items = [
    {
      key: '1',
      label: '表格間距',
      children: <TableSpacingDemo />,
    },
    {
      key: '2',
      label: '表單分組',
      children: <FormGroupingDemo />,
    },
    {
      key: '3',
      label: '動態間距',
      children: <DynamicSpacingDemo />,
    },
    {
      key: '4',
      label: '商品分類',
      children: <CardGroupingDemo />,
    },
  ];

  return (
    <div>
      <Title level={2}>關聯性原則 (Proximity)</Title>
      <Divider />

      <Card style={{ marginBottom: 24, backgroundColor: '#fff7e6' }}>
        <Title level={4}>
          <AimOutlined style={{ marginRight: 8 }} />
          原則說明
        </Title>
        <Paragraph>
          <Text strong>關聯性原則</Text>是格式塔心理學的重要原則之一。
          當元素在空間上靠近時，人們傾向於將它們視為一個群組。
        </Paragraph>
        <Paragraph>
          <Text strong>設計應用：</Text>
        </Paragraph>
        <ul>
          <li>
            <Text>使用三種格式的間距：「小間距」、「中距」和「大間距」</Text>
          </li>
          <li>
            <Text>相關的資訊應該放在一起，形成視覺群組</Text>
          </li>
          <li>
            <Text>不相關的資訊應該有明顯的間隔</Text>
          </li>
          <li>
            <Text>友好的分組讓資訊看起來自然分類</Text>
          </li>
        </ul>
      </Card>

      <Tabs items={items} type='card' />
    </div>
  );
}

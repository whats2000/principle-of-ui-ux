import { useState } from 'react';
import {
  Card,
  Typography,
  Tabs,
  Divider,
  Space,
  Button,
  Radio,
  Row,
  Col,
  Statistic,
  Skeleton,
} from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  AimOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// 範例一：數字對齊
function NumberAlignmentDemo() {
  const [isAligned, setIsAligned] = useState(true);

  const data = [
    { label: '銷售額', value: -889.0 },
    { label: '成本', value: -763.0 },
    { label: '折扣', value: -14.5 },
    { label: '稅金', value: +67.0 },
    { label: '總計', value: -1599.5 },
  ];

  return (
    <Card title='數字對齊示範' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        數字列表應該靠右對齊，讓小數點對齊，方便使用者比較數值大小。
        未對齊的數字難以快速掃視和比較。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isAligned ? 'primary' : 'default'}
          onClick={() => setIsAligned(true)}
          icon={<CheckCircleOutlined />}
        >
          數字靠右對齊（正確）
        </Button>
        <Button
          type={!isAligned ? 'primary' : 'default'}
          onClick={() => setIsAligned(false)}
          icon={<CloseCircleOutlined />}
        >
          數字靠左對齊（錯誤）
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title={isAligned ? '正確：靠右對齊' : '錯誤：靠左對齊'}
            style={{
              backgroundColor: isAligned ? '#f6ffed' : '#fff2f0',
              borderColor: isAligned ? '#b7eb8f' : '#ffccc7',
            }}
          >
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 16,
                lineHeight: 2,
              }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom:
                      index === data.length - 1
                        ? '2px solid #333'
                        : '1px solid #eee',
                    padding: '4px 0',
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      textAlign: isAligned ? 'right' : 'left',
                      minWidth: 100,
                      color: item.value < 0 ? '#cf1322' : '#389e0d',
                    }}
                  >
                    {item.value >= 0 ? '+' : ''}
                    {item.value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={isAligned ? 'success' : 'danger'}>
                {isAligned
                  ? '數字靠右對齊後，小數點自然對齊，使用者可以快速比較數值大小。'
                  : '數字靠左對齊時，小數點位置不一致，難以快速比較數值。'}
              </Text>
            </Paragraph>
            <Paragraph>
              <Text strong>最佳實踐：</Text>
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>數字應靠右對齊</li>
              <li>使用等寬字體（monospace）</li>
              <li>保持相同的小數位數</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例二：文字對齊方式
function TextAlignmentDemo() {
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>(
    'left',
  );

  const content = `介面設計中，元素的排列符合使用者的感知能更流暢地向使用者傳遞訊息。
對齊是設計中最基本的原則之一，它能夠創造視覺秩序，讓介面看起來更整潔、專業。`;

  return (
    <Card title='文字對齊方式' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        不同的文字對齊方式適用於不同場景。左對齊最易閱讀，置中適合標題，右對齊適合數字。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Radio.Group
          value={alignment}
          onChange={(e) => setAlignment(e.target.value)}
        >
          <Radio.Button value='left'>
            <AlignLeftOutlined /> 左對齊
          </Radio.Button>
          <Radio.Button value='center'>
            <AlignCenterOutlined /> 置中
          </Radio.Button>
          <Radio.Button value='right'>
            <AlignRightOutlined /> 右對齊
          </Radio.Button>
        </Radio.Group>
      </Space>

      <Card
        size='small'
        style={{
          backgroundColor: '#fafafa',
        }}
      >
        <Space>
          {alignment === 'right' && (
            <Skeleton.Image style={{ width: 360, height: 240 }} />
          )}
          <div>
            <div style={{ textAlign: alignment, padding: '16px 24px' }}>
              <Title level={4}>文字對齊範例</Title>
              <Text style={{ maxWidth: 500, margin: '0 auto' }}>{content}</Text>
            </div>
            <div style={{ textAlign: alignment, padding: '16px 24px' }}>
              <Title level={4}>另個標題</Title>
              <Text style={{ maxWidth: 500, margin: '0 auto' }}>{content}</Text>
            </div>
          </div>
        </Space>
      </Card>

      <div style={{ marginTop: 16 }}>
        <Text type='secondary'>
          {alignment === 'left' &&
            '左對齊：最適合長篇文字閱讀，符合自然閱讀習慣。'}
          {alignment === 'center' && '置中：適合標題、短句，但長文會難以閱讀。'}
          {alignment === 'right' &&
            '右對齊：適合數字、日期，或搭配左側圖片使用。'}
        </Text>
      </div>
    </Card>
  );
}

// 範例三：表單標籤對齊
function FormLabelAlignmentDemo() {
  const [labelAlign, setLabelAlign] = useState<'left' | 'right'>('right');

  const formFields = [
    { label: '使用者名稱', placeholder: '請輸入使用者名稱' },
    { label: '電子郵件', placeholder: '請輸入電子郵件' },
    { label: '密碼', placeholder: '請輸入密碼' },
    { label: '確認密碼', placeholder: '請再次輸入密碼' },
  ];

  return (
    <Card title='表單標籤對齊' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        表單標籤的對齊方式會影響使用者填寫效率。標籤靠右對齊時，標籤與輸入框距離較近，視覺關聯性更強。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={labelAlign === 'right' ? 'primary' : 'default'}
          onClick={() => setLabelAlign('right')}
          icon={<CheckCircleOutlined />}
        >
          標籤靠右對齊（推薦）
        </Button>
        <Button
          type={labelAlign === 'left' ? 'primary' : 'default'}
          onClick={() => setLabelAlign('left')}
          icon={<CloseCircleOutlined />}
        >
          標籤靠左對齊
        </Button>
      </Space>

      <Row gutter={48}>
        <Col span={12}>
          <Card
            size='small'
            title={labelAlign === 'right' ? '推薦：標籤靠右' : '標籤靠左'}
            style={{
              backgroundColor: labelAlign === 'right' ? '#f6ffed' : '#fffbe6',
              borderColor: labelAlign === 'right' ? '#b7eb8f' : '#ffe58f',
            }}
          >
            <div style={{ padding: 16 }}>
              {formFields.map((field, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      textAlign: labelAlign,
                      paddingRight: 12,
                      flexShrink: 0,
                    }}
                  >
                    <Text>{field.label}</Text>
                  </div>
                  <input
                    type='text'
                    placeholder={field.placeholder}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      border: '1px solid #d9d9d9',
                      borderRadius: 6,
                      fontSize: 14,
                    }}
                  />
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card size='small' title='對比說明'>
            <Paragraph>
              <Text type={labelAlign === 'right' ? 'success' : 'warning'}>
                {labelAlign === 'right'
                  ? '標籤靠右對齊時，標籤與輸入框之間的距離較短且一致，視覺上更容易配對。'
                  : '標籤靠左對齊時，較長的標籤與較短的標籤到輸入框的距離不同，視覺關聯性較弱。'}
              </Text>
            </Paragraph>
            <Paragraph>
              <Text strong>適用場景：</Text>
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>靠右對齊：標籤長度差異大時</li>
              <li>靠左對齊：標籤長度相近，或需要快速掃描標籤時</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

// 範例四：統計數據對齊
function StatisticsAlignmentDemo() {
  const [isAligned, setIsAligned] = useState(true);

  const stats = [
    { title: '總銷售額', value: 112893 },
    { title: '訂單數', value: 8846 },
    { title: '客戶數', value: 1234 },
    { title: '轉換率', value: 3.28, suffix: '%' },
  ];

  return (
    <Card title='統計數據對齊' style={{ marginBottom: 24 }}>
      <Paragraph>
        <Text strong>說明：</Text>{' '}
        數據儀表板中，統計卡片的對齊方式會影響整體視覺效果和資訊傳達效率。
      </Paragraph>

      <Space style={{ marginBottom: 16 }}>
        <Button
          type={isAligned ? 'primary' : 'default'}
          onClick={() => setIsAligned(true)}
          icon={<CheckCircleOutlined />}
        >
          對齊排列（正確）
        </Button>
        <Button
          type={!isAligned ? 'primary' : 'default'}
          onClick={() => setIsAligned(false)}
          icon={<CloseCircleOutlined />}
        >
          錯位排列（錯誤）
        </Button>
      </Space>

      <Row gutter={isAligned ? [16, 16] : [8, 24]}>
        {stats.map((stat, index) => (
          <Col
            key={index}
            span={6}
            style={{
              marginTop: !isAligned ? (index % 2 === 0 ? 0 : 20) : 0,
              marginLeft: !isAligned ? (index === 2 ? 16 : 0) : 0,
            }}
          >
            <Card
              size='small'
              style={{
                textAlign: 'center',
                height: isAligned ? 120 : 'auto',
              }}
            >
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={stat.suffix}
                styles={{
                  content: { fontSize: isAligned ? 28 : 20 + index * 4 },
                }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 16 }}>
        <Text type='secondary'>
          {isAligned
            ? '對齊的統計卡片創造整齊的視覺效果，使用者可以輕鬆比較不同指標。'
            : '錯位的排列會造成視覺混亂，降低資訊傳達效率。'}
        </Text>
      </div>
    </Card>
  );
}

// 主元件
export default function AlignmentPrinciple() {
  const items = [
    {
      key: '1',
      label: '數字對齊',
      children: <NumberAlignmentDemo />,
    },
    {
      key: '2',
      label: '文字對齊',
      children: <TextAlignmentDemo />,
    },
    {
      key: '3',
      label: '表單標籤',
      children: <FormLabelAlignmentDemo />,
    },
    {
      key: '4',
      label: '統計數據',
      children: <StatisticsAlignmentDemo />,
    },
  ];

  return (
    <div>
      <Title level={2}>對齊原則 (Alignment)</Title>
      <Divider />

      <Card style={{ marginBottom: 24, backgroundColor: '#fff7e6' }}>
        <Title level={4}>
          <AimOutlined style={{ marginRight: 8 }} />
          原則說明
        </Title>
        <Paragraph>
          <Text strong>對齊原則</Text>
          是指介面中的元素應該沿著一條看不見的線對齊排列。
          良好的對齊能創造視覺秩序，讓介面看起來更整潔、專業。
        </Paragraph>
        <Paragraph>
          <Text strong>設計應用：</Text>
        </Paragraph>
        <ul>
          <li>
            <Text>數字應該靠右對齊，讓小數點自然對齊</Text>
          </li>
          <li>
            <Text>長篇文字應該靠左對齊，符合閱讀習慣</Text>
          </li>
          <li>
            <Text>元素的排列應符合使用者的感知，更流暢地傳遞訊息</Text>
          </li>
          <li>
            <Text>保持一致的對齊方式，創造視覺秩序</Text>
          </li>
        </ul>
      </Card>

      <Tabs items={items} type='card' />
    </div>
  );
}

import { Layout, Typography, Card, Row, Col } from "antd";
import useFilter from "@/hooks/useFilter";
import TodoServices from "@/services/TodoServices";
import Wrapper from "@/pages/common/components/Wrapper";
import TodoForm from "@/pages/common/components/TodoForm";
import TodoList from "@/pages/common/components/TodoList";

const { Content } = Layout;
const { Title } = Typography;

const filters = {
  page: 1,
  limit: 10,
};

export default function TodoPage() {
  const {
    data: todosData,
    updateFilter,
      filters,    
    loading,
    refresh,
  } = useFilter(TodoServices.getTodos);

  return (
    <Wrapper style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <Content
        style={{
          maxWidth: 1100,
          margin: "40px auto",
          padding: "0 16px",
          background: "#f5f7fb",
        }}
      >
        <Title level={3} style={{ marginBottom: 24 }}>
          📝 Todo List Application
        </Title>

        <Row gutter={[24, 24]}>
          {/* LEFT SECTION – FORM */}
          <Col xs={24} md={8}>
            <TodoForm refresh={refresh} />
          </Col>

          {/* RIGHT SECTION – LIST */}
          <Col xs={24} md={16}>
            <Card
              title="Your Todos"
              bordered={false}
              style={{
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                minHeight: "100%",
              }}
            >
              <TodoList
                data={todosData?.datas || []}
                loading={loading}
                pagination={{
                  current: filters.page,
                  pageSize: filters.limit,
                  total: todosData?.totalTodos || 0,
                  onChange: (page, pageSize) => {
                    updateFilter({
                      ...filters,
                      page,
                      limit: pageSize,
                    });
                  },
                }}
                refresh={refresh}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Wrapper>
  );
}

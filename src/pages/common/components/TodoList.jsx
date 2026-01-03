import { List, Pagination, Spin, Empty } from "antd";
import TodoItem from "@/pages/common/components/TodoItem";

export default function TodoList({
  data,
  loading,
  refresh,
  pagination,
}) {
  return (
    <Spin spinning={loading}>
      {/* Scrollable Container */}
      <div
        style={{
          height: 440,
          overflowY: "auto",
          paddingRight: 12,
        }}
      >
        <List
          dataSource={data}
          locale={{
            emptyText: (
              <Empty
                description="No todos yet"
                style={{ marginTop: 120 }}
              />
            ),
          }}
          renderItem={(todo) => (
            <List.Item
              key={todo._id}
              style={{
                padding: 0,
                marginBottom: 12,
                border: "none",
              }}
            >
              <TodoItem
                todo={todo}
                refresh={refresh}
              />
            </List.Item>
          )}
        />
      </div>

      {/* Pagination */}
      {pagination?.total > 0 && (
        <div
          style={{
            marginTop: 20,
            paddingTop: 12,
            borderTop: "1px solid #f0f0f0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={pagination.total}
            onChange={pagination.onChange}
            showSizeChanger
          />
        </div>
      )}
    </Spin>
  );
}

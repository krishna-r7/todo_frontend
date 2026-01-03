import { Layout } from "antd";


const {  Content } = Layout;


export default function Wrapper({ children }) {

  return (
    <div className="flex min-h-screen">
    
      <Layout
        
      >
        <Content
          className="p-4 md:p-2 bg-gray-50"
          style={{
            // marginTop: 64,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </div>
  );
}

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "./components/layouts/NavBar";
import Main from "./pages/main/Main";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Nickname from "./pages/Nickname/Nickname";
import PostBox from "./pages/PostBox/PostBox";
import PostBoxCreate from "./pages/PostBox/Create/PostBoxCreate";
import PostBoxQuestion from "./pages/PostBox/Question/PostBoxQuestion";
import PostBoxResut from "./pages/PostBox/Result/PostBoxResut";
import PostBoxResultDone from "./pages/PostBox/Result/PostBoxResultDone";
import MyPostBox from "./pages/MyPostBox/MyPostBox";
import MyPostBoxDetail from "./pages/MyPostBox/Detail/MyPostBoxDetail";
import LetterDetail from "./pages/MyPostBox/Detail/LetterDetail/LetterDetail";
import Deco from "./pages/Deco/Deco";
import CompletePostBox from "./pages/CompletePostBox/CompletePostBox";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 430px;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;
const Layout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="nickname" element={<Nickname />} />
          <Route path="postbox" element={<PostBox />} />
          <Route path="postbox/create" element={<PostBoxCreate />} />
          <Route path="postbox/question" element={<PostBoxQuestion />} />
          <Route path="postbox/result" element={<PostBoxResut />} />
          <Route path="postbox/result/done" element={<PostBoxResultDone />} />
          <Route path="mypostbox" element={<MyPostBox />} />
          <Route path="mypostbox/detail" element={<MyPostBoxDetail />} />
          {/* detail -> id routing */}
          <Route path="mypostbox/detail/:id" element={<LetterDetail />} />
					<Route index path="/deco" element={<Deco />} />
          <Route index path="/completepostbox" element={<CompletePostBox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

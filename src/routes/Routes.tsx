import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import {
  AboutPage,
  BlogsPage,
  HomePage,
  ProjectsPage,
  SkillsPage,
} from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
      </Route>
      {/* <Route path="/blogsDetail" element={<div>af</div>} /> */}
    </Routes>
  );
};

export default AppRouter;

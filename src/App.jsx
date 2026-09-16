import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { BlogPage, posts } from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LiquidBackground from "./components/LiquidBackground";

function parseRoute() {
  const hash = window.location.hash || "";
  const pathname = window.location.pathname || "";

  // Check #/blogs, #/blog, /blogs, /blog
  const matchHash = hash.match(/^#\/?blogs?(?:\/(.*))?$/i);
  const matchPath = pathname.match(/^\/?blogs?(?:\/(.*))?$/i);

  if (matchHash || (matchPath && pathname !== "/")) {
    const slug = (matchHash ? matchHash[1] : matchPath ? matchPath[1] : "") || "";
    return {
      page: "blogs",
      slug: slug ? slug.replace(/^\/+|\/+$/g, "") : null,
    };
  }
  return { page: "home", slug: null };
}

export default function App() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    function handleLocationChange() {
      setRoute(parseRoute());
    }

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigate = useCallback((page, target) => {
    if (page === "blogs" || page === "blog") {
      const targetHash = target ? `#/blogs/${target}` : "#/blogs";
      window.history.pushState({}, "", targetHash);
      setRoute({ page: "blogs", slug: target || null });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetHash = target && target.startsWith("#") ? target : "#";
      window.history.pushState({}, "", targetHash);
      setRoute({ page: "home", slug: null });
      if (target && target.startsWith("#") && target !== "#") {
        setTimeout(() => {
          const el = document.querySelector(target);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    if (route.page === "blogs") {
      if (route.slug) {
        const post = posts.find((p) => p.slug === route.slug);
        document.title = post
          ? `${post.title} | Blogs`
          : "Blogs | Rahul Pareek";
      } else {
        document.title = "Blogs | Rahul Pareek";
      }
    } else {
      document.title = "Rahul Pareek - Portfolio";
    }
  }, [route]);

  return (
    <div className="relative min-h-screen bg-[#021208]">
      <LiquidBackground className="pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <Navbar currentRoute={route} onNavigate={navigate} />

        <main className="flex-1">
          {route.page === "blogs" ? (
            <BlogPage
              initialSlug={route.slug}
              onNavigateHome={() => navigate("home")}
              onSelectPost={(slug) => navigate("blogs", slug)}
            />
          ) : (
            <>
              <Hero />
              <Resume />
              <Projects />
              <Services />
              <CTA />
            </>
          )}
        </main>

        <Footer currentRoute={route} onNavigate={navigate} />
      </div>
    </div>
  );
}

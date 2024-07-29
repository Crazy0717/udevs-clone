"use client"
import React, { useLayoutEffect, useRef, useState } from "react"
import RadioButton from "../ui/radioButton/RadioButton"
import Image from "next/image"
import useFadeIn from "@/lib/utils/hooks"
import "./Tools.scss"

const Tools = ({ title }: { title: string }) => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const fadeIn = useFadeIn()
  const h1Ref = useRef(null)
  const contentRef = useRef(null)
  const handleRadioChange = (value: string) => {
    setSelectedCategory((prev) => (prev === value ? "all" : value))
  }

  const technologies = [
    { name: "Prometheus", category: "devops", imgUrl: "/svg/prometheus.svg" },
    { name: "Loki", category: "devops", imgUrl: "/svg/loki.svg" },
    { name: "Bitbucket", category: "devops", imgUrl: "/svg/bitbucket.svg" },
    { name: "Gitlab", category: "devops", imgUrl: "/svg/gitlab.svg" },
    { name: "Kotlin", category: "mobile", imgUrl: "/svg/kotlin.svg" },
    { name: "Android", category: "mobile", imgUrl: "/svg/android.svg" },
    { name: "Java", category: "mobile", imgUrl: "/svg/java.svg" },
    { name: "Azure", category: "infrastructure", imgUrl: "/svg/azure.svg" },
    { name: "GCP", category: "infrastructure", imgUrl: "/svg/gcp.svg" },
    {
      name: "DigitalOcean",
      category: "infrastructure",
      imgUrl: "/svg/digitalOcean.svg",
    },
    { name: "AWS", category: "infrastructure", imgUrl: "/svg/aws.svg" },
    {
      name: "Kubernetes",
      category: "infrastructure",
      imgUrl: "/svg/kubernetes.svg",
    },
    { name: "ELK", category: "devops", imgUrl: "/svg/elk.svg" },
    { name: "Grafana", category: "devops", imgUrl: "/svg/grafana.svg" },
    {
      name: "Terraform",
      category: "devops",
      imgUrl: "/svg/terraform.svg",
    },
    { name: "iOS", category: "mobile", imgUrl: "/svg/ios.svg" },
    { name: "Swift", category: "mobile", imgUrl: "/svg/swift.svg" },
    { name: "Flutter", category: "mobile", imgUrl: "/svg/flutter.svg" },
    { name: "Next.JS", category: "frontend", imgUrl: "/svg/nextJs.svg" },
    { name: "React.JS", category: "frontend", imgUrl: "/svg/reactJs.svg" },
    { name: "Javascript", category: "frontend", imgUrl: "/svg/javascript.svg" },
    { name: "Balsamic", category: "design", imgUrl: "/svg/balsamic.svg" },
    { name: "Invision", category: "design", imgUrl: "/svg/invision.svg" },
    { name: "Figma", category: "design", imgUrl: "/svg/figma.svg" },
    { name: "Docker", category: "devops", imgUrl: "/svg/docker.svg" },
    { name: "PostgreSQL", category: "backend", imgUrl: "/svg/postgreSQL.svg" },
    { name: "Python", category: "backend", imgUrl: "/svg/python.svg" },
    { name: "Node.JS", category: "backend", imgUrl: "/svg/nodeJs.svg" },
    { name: "PHP", category: "backend", imgUrl: "/svg/php.svg" },
    { name: "GO", category: "backend", imgUrl: "/svg/go.svg" },
    { name: "Ant Design", category: "frontend", imgUrl: "/svg/antDesign.svg" },
    {
      name: "Gatsby.JS",
      category: "frontend",
      imgUrl: "/images/gatsbyJs.webp",
    },
    { name: "Vue.JS", category: "frontend", imgUrl: "/svg/vueJs.svg" },
    { name: "Principle", category: "design", imgUrl: "/svg/principle.svg" },
    { name: "Sketch", category: "design", imgUrl: "/svg/sketch.svg" },
    { name: "Adobe suite", category: "design", imgUrl: "/svg/adobeSuite.svg" },
    { name: "YouTrack", category: "testing", imgUrl: "/svg/youtrack.svg" },
    { name: "Appium", category: "testing", imgUrl: "/svg/appium.svg" },
    { name: "Cypress", category: "testing", imgUrl: "/svg/cypress.svg" },
    { name: "Jmeter", category: "testing", imgUrl: "/svg/jmeter.svg" },
    { name: "MongoDB", category: "backend", imgUrl: "/svg/mongodb.svg" },
    { name: "Cassandra", category: "backend", imgUrl: "/svg/cassandra.svg" },
    { name: "Sass", category: "frontend", imgUrl: "/svg/sass.svg" },
    {
      name: "Material UI",
      category: "frontend",
      imgUrl: "/svg/materialui.svg",
    },
    { name: "Zeplin", category: "design", imgUrl: "/svg/zeplin.svg" },
    { name: "Illustrator", category: "design", imgUrl: "/svg/illustrator.svg" },
    { name: "Lottie", category: "design", imgUrl: "/images/lottie.webp" },
    { name: "Photoshop", category: "design", imgUrl: "/svg/photoshop.svg" },
  ]
  const options = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "devops", label: "Devops" },
    { value: "testing", label: "Testing" },
    { value: "design", label: "UX/UI" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "mobile", label: "Mobile" },
  ]

  useLayoutEffect(() => {
    fadeIn({ targetEl: h1Ref.current, duration: 0.4 })
    fadeIn({ targetEl: contentRef.current, duration: 0.4, delay: 0.1 })
  }, [])
  return (
    <div className="tools" id="tools">
      <div className="primary-heading" ref={h1Ref}>
        {title}
      </div>
      <div className="tools_content" ref={contentRef}>
        <div className="content_checkboxes">
          <RadioButton
            options={options}
            value={selectedCategory}
            onChange={handleRadioChange}
          />
        </div>
        <div className="content_boxes">
          {technologies.map((item) => (
            <TechBox
              key={item.name}
              currentCategory={selectedCategory}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools

interface techBoxProps {
  currentCategory: string
  item: {
    name: string
    imgUrl: string
    category: string
  }
}

const TechBox = React.memo(({ item, currentCategory }: techBoxProps) => {
  const categoryColors: Record<string, string> = {
    frontend: "#c6d6ff",
    backend: "#bddaed",
    devops: "#a8bfff",
    testing: "#e1e9fe",
    design: "#ced6ee",
    infrastructure: "#d1dde8",
    mobile: "#dbe5ff",
  }
  const isCurrent =
    currentCategory === item.category || currentCategory === "all"

  return (
    <div
      className="techBox"
      style={{
        opacity: isCurrent ? "1" : "0.4",
        backgroundColor: isCurrent
          ? categoryColors[item.category]
          : "transparent",
      }}
    >
      <Image
        src={item.imgUrl}
        alt={item.name}
        width={24}
        height={24}
        loading="lazy"
      />
      <p>{item.name}</p>
    </div>
  )
})

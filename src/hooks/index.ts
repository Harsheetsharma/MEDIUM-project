import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog {
    content: string,
    title: string,
    id: number,
    author: {
        name: string
    }
}

export const useSingleBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setblog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("Token")
            }
        })
            .then(response => {
                setblog(response.data.blog)
                setLoading(false)
            })
    }, [])

    return {
        loading,
        blog
    }
}

export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("Token")
            }
        })
            .then(response => {
                setblogs(response.data.blogs)
                setLoading(false)
            })
    }, [])

    return {
        loading,
        blogs
    }
}
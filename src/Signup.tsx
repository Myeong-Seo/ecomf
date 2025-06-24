import { useState } from "react";
import axios from "axios";
import * as React from "react";

export default function Signup() {
    const [form, setForm] = useState({ username: '', email: '', password: ''});
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/auth/signup", form);
        alert("회원가입이 완료되었습니다.");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} placeholder="이름" />
            <input name="password" onChange={handleChange} placeholder="비밀번호" />
            <input name="email" onChange={handleChange} placeholder="이메일" />
            <button>회원가입</button>
        </form>
        
    );
    
}

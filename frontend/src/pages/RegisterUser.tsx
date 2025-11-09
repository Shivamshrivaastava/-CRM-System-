import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import toast from "react-hot-toast";

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("SALES");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      await api.post("/auth/register", { name, email, password, role });
      toast.success(`User ${name} registered as ${role}`);
      navigate("/users");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to register user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="title">Register New User</h1>
      <div className="card space-y-4 max-w-lg">
        <div>
          <label className="text-sm text-muted">Name</label>
          <input
            className="input mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-muted">Email</label>
          <input
            className="input mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-muted">Password</label>
          <input
            type="password"
            className="input mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-muted">Role</label>
          <select
            className="input mt-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="MANAGER">Manager</option>
            <option value="SALES">Sales</option>
          </select>
        </div>

        <button
          className="btn btn-primary w-full"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Creating..." : "Register User"}
        </button>
      </div>
    </div>
  );
}

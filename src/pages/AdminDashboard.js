import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import Card from '../components/common/Card';
import { NAVIGATION_ITEMS, DUMMY_DATA, ADMIN_STATS } from '../constants';
import api from '../services/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('dashboard');
  const [dashboardData, setDashboardData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [systemData, setSystemData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
    fetchUsers();
  }, []);

  useEffect(() => {
    switch (activeItem) {
      case 'analytics':
        if (!analyticsData) fetchAnalyticsData();
        break;
      case 'revenue':
        if (!revenueData) fetchRevenueData();
        break;
      case 'system':
        if (!systemData) fetchSystemData();
        break;
      default:
        break;
    }
  }, [activeItem, analyticsData, revenueData, systemData]);

  const fetchDashboardData = async () => {
    try {
      const response = await api.get('/admin/dashboard');
      setDashboardData(response.data.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await api.get('/admin/users');
      setUsers(response.data.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchAnalyticsData = async () => {
    try {
      const response = await api.get('/admin/analytics');
      setAnalyticsData(response.data.data);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      setAnalyticsData({ metrics: {}, popularTherapies: [], practitionerPerformance: [] });
    }
  };

  const fetchRevenueData = async () => {
    try {
      const response = await api.get('/admin/revenue');
      setRevenueData(response.data.data);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
      setRevenueData({ todayRevenue: 0, monthRevenue: 0, yearRevenue: 0, transactions: [] });
    }
  };

  const fetchSystemData = async () => {
    try {
      const response = await api.get('/admin/system');
      setSystemData(response.data.data);
    } catch (error) {
      console.error('Error fetching system data:', error);
      setSystemData({ systemHealth: [], systemLogs: [] });
    }
  };



  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ayur-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  const downloadReport = (type) => {
    alert(`Downloading ${type} report...`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid lg:grid-cols-4 gap-6">
              {(dashboardData?.overview || []).map((stat, index) => (
                <div key={index} className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-white/80 text-sm">{stat.change} from last month</p>
                    </div>
                    <div className="text-4xl opacity-80">{stat.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts & Analytics */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card title="Revenue Analytics">
                <div className="h-64 bg-gradient-to-br from-ayur-light/30 to-white rounded-xl flex items-center justify-center border border-ayur-accent/20">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <p className="text-lg font-semibold text-ayur-primary">Revenue Chart</p>
                    <p className="text-sm text-gray-600">Monthly revenue trends</p>
                  </div>
                </div>
              </Card>

              <Card title="User Growth">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center border border-blue-200">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <p className="text-lg font-semibold text-blue-600">Growth Chart</p>
                    <p className="text-sm text-gray-600">Patient & practitioner growth</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Real-time Transactions Table */}
            <Card title="Real-time Transactions">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Transaction ID</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Patient</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Practitioner</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Therapy</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Amount</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Payment</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Date & Time</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(dashboardData?.recentTransactions || []).map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2">
                          <div>
                            <p className="font-medium text-ayur-primary">{transaction.id}</p>
                            <p className="text-xs text-gray-500">{transaction.transactionId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <p className="font-medium">{transaction.patient}</p>
                        </td>
                        <td className="py-3 px-2">
                          <p className="text-gray-700">{transaction.practitioner}</p>
                        </td>
                        <td className="py-3 px-2">
                          <span className="px-2 py-1 bg-ayur-light text-ayur-primary rounded-full text-xs">
                            {transaction.therapy}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <p className="font-semibold text-green-600">₹{transaction.amount}</p>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            transaction.paymentMethod === 'UPI' ? 'bg-blue-100 text-blue-700' :
                            transaction.paymentMethod === 'Card' ? 'bg-purple-100 text-purple-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {transaction.paymentMethod}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <div>
                            <p className="text-gray-700">{transaction.date}</p>
                            <p className="text-xs text-gray-500">{transaction.time}</p>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'completed' ? 'bg-green-100 text-green-700' :
                            transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            transaction.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="py-3 px-2">
                          <button className="text-ayur-primary hover:text-ayur-secondary text-xs font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-600">Showing 6 of 156 transactions</p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-ayur-primary text-white rounded text-sm hover:bg-ayur-secondary">
                    Next
                  </button>
                </div>
              </div>
            </Card>

            {/* System Health */}
            <Card title="System Health">
              <div className="space-y-4">
                {(dashboardData?.systemHealth || []).map((health, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{health.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{health.value}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(health.status)}`}>
                        {health.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-ayur-primary">Real-Time Analytics</h3>
              <button onClick={() => downloadReport('analytics')} className="btn-primary">
                📊 Download Report
              </button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card title="Patient Analytics">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>New Patients</span>
                    <span className="font-semibold">+{analyticsData?.metrics?.newPatients || 0} this month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retention Rate</span>
                    <span className="font-semibold">{analyticsData?.metrics?.retentionRate || 0}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg Sessions</span>
                    <span className="font-semibold">{analyticsData?.metrics?.avgSessions || 0} per patient</span>
                  </div>
                </div>
              </Card>

              <Card title="Practitioner Performance">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Avg Rating</span>
                    <span className="font-semibold">{analyticsData?.metrics?.avgRating || 0} ⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Utilization</span>
                    <span className="font-semibold">{analyticsData?.metrics?.utilization || 0}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue/Practitioner</span>
                    <span className="font-semibold">₹{analyticsData?.metrics?.revenuePerPractitioner || 0}</span>
                  </div>
                </div>
              </Card>

              <Card title="Popular Therapies">
                <div className="space-y-3">
                  {(analyticsData?.popularTherapies || []).map((therapy, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{therapy._id} ({therapy.count})</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-ayur-primary h-2 rounded-full"
                          style={{ width: `${Math.min(therapy.count * 10, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card title="Practitioner Performance Details">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Name</th>
                      <th className="text-left py-2">Bookings</th>
                      <th className="text-left py-2">Rating</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(analyticsData?.practitionerPerformance || []).map((practitioner, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{practitioner.name}</td>
                        <td className="py-2">{practitioner.bookingCount}</td>
                        <td className="py-2">{practitioner.rating.toFixed(1)} ⭐</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-ayur-primary">User Management</h3>
              <button className="btn-primary">+ Add User</button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card title="Patients Overview">
                <div className="space-y-3">
                  {DUMMY_DATA.patients.map((patient) => (
                    <div key={patient.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{patient.photo}</span>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-gray-600">{patient.email}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        patient.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {patient.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Practitioners Overview">
                <div className="space-y-3">
                  {['Dr. Priya Sharma', 'Dr. Rajesh Patel', 'Dr. Meera Singh'].map((name, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👨‍⚕️</span>
                        <div>
                          <p className="font-medium">{name}</p>
                          <p className="text-sm text-gray-600">Active • {[15, 12, 18][index]} years exp</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );

      case 'revenue':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-ayur-primary">Real-Time Revenue</h3>
              <button onClick={() => downloadReport('revenue')} className="btn-primary">
                💰 Download Revenue Report
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card title="Today's Revenue">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">₹{revenueData?.todayRevenue || 0}</p>
                  <p className="text-sm text-gray-600">Live updates</p>
                </div>
              </Card>
              <Card title="This Month">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">₹{revenueData?.monthRevenue || 0}</p>
                  <p className="text-sm text-gray-600">Monthly total</p>
                </div>
              </Card>
              <Card title="This Year">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">₹{revenueData?.yearRevenue || 0}</p>
                  <p className="text-sm text-gray-600">Yearly total</p>
                </div>
              </Card>
            </div>

            <Card title="Live Revenue Transactions">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">ID</th>
                      <th className="text-left py-2">Patient</th>
                      <th className="text-left py-2">Practitioner</th>
                      <th className="text-left py-2">Therapy</th>
                      <th className="text-left py-2">Amount</th>
                      <th className="text-left py-2">Method</th>
                      <th className="text-left py-2">Date</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(revenueData?.transactions || []).map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-gray-50">
                        <td className="py-2">{transaction.id}</td>
                        <td className="py-2">{transaction.patient}</td>
                        <td className="py-2">{transaction.practitioner}</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-ayur-light text-ayur-primary rounded text-xs">
                            {transaction.therapy}
                          </span>
                        </td>
                        <td className="py-2 font-semibold">₹{transaction.amount}</td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            transaction.paymentMethod === 'UPI' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {transaction.paymentMethod}
                          </span>
                        </td>
                        <td className="py-2">{transaction.date}</td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded text-xs ${
                            transaction.status === 'completed' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ayur-primary">Reports & Downloads</h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                { title: 'Patient Reports', desc: 'Detailed patient analytics and treatment history', icon: '👥' },
                { title: 'Revenue Reports', desc: 'Financial analytics and transaction details', icon: '💰' },
                { title: 'Practitioner Reports', desc: 'Performance metrics and ratings', icon: '👨‍⚕️' },
                { title: 'System Reports', desc: 'Technical logs and system health', icon: '⚙️' }
              ].map((report, index) => (
                <Card key={index} title={report.title}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{report.icon}</span>
                      <p className="text-sm text-gray-600">{report.desc}</p>
                    </div>
                    <button 
                      onClick={() => downloadReport(report.title)}
                      className="btn-secondary text-sm"
                    >
                      Download
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-ayur-primary">Real-Time System Monitoring</h3>
            
            <Card title="System Health">
              <div className="space-y-4">
                {(systemData?.systemHealth || []).map((health, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{health.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{health.value}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(health.status)}`}>
                        {health.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Live System Logs">
              <div className="space-y-3">
                {(systemData?.systemLogs || []).map((log) => (
                  <div key={log.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{log.message}</p>
                      <p className="text-sm text-gray-600">{new Date(log.timestamp).toLocaleString()}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getSeverityColor(log.severity)}`}>
                      {log.severity}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      default:
        return <div className="card">Admin Dashboard</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-ayur-light/30 via-white to-ayur-accent/10">
      <Sidebar 
        items={NAVIGATION_ITEMS.ADMIN}
        activeItem={activeItem}
        onItemClick={setActiveItem}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Admin Dashboard" userType="admin" onLogout={handleLogout} />
        <main className="flex-1 p-4 overflow-auto">
          <div className="max-w-full">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-ayur-primary mb-1">Admin Control Panel</h2>
              <p className="text-sm text-gray-600">Monitor and manage your AyurSutra platform</p>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
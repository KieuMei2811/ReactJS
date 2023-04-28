import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import React ,{ Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello .
//         </p>
//         <a
//           className="App-link"href="https://reactjs.org"target="_blank"rel="noopener noreferrer"
//         >
//           Ok
//         </a>
//       </header>
//     </div>
//   );
// }


// function Header(){
//   return (
// 	<div className="container">
// 		<div className="row">
// 			<div className="col-lg-9"> 
// 				<div className="col-sm-2"><br/>
// 					<img id='logo-dvt' src="https://danavtc.edu.vn/Portals/0/logo.png?ver=2019-10-13-182116-600"></img>
// 				</div>
// 				<div className="col-sm-10">
// 					<h2><b id='name-sl'>TRƯỜNG CAO ĐẲNG NGHỀ ĐÀ NẴNG</b></h2>
// 					<h4><b id='name-sm'>DANANG VOCATIONAL TRAINING COLLEGE</b></h4>
// 					<span><ion-icon id='icon-locat' name="location"></ion-icon><b>99 Tô Hiến Thành, Sơn Trà, Đà Nẵng</b></span><br/>
// 					<span><ion-icon name="mail"></ion-icon><b> danavtc@danavtc.edu.vn</b></span><br/>
// 					<span><ion-icon name="call"></ion-icon><b> 02363.942.790 – 02363.940.946</b></span>
// 				</div>
// 			</div> <br/><br/>
// 			<div className="col-lg-3">
// 				<span> Đăng nhập </span><span> | </span><span> Liên hệ </span>
// 				<span> | </span>
// 				<span>
// 					<img id='img-langua' src='https://danavtc.edu.vn/Portals/_default/skins/danavtc/img/icon-en.png'></img>
// 				</span> 
// 				<div className='input-group'><br/>
// 					<input type='text'placeholder='Tìm kiếm'></input>
// 					<ion-icon name="search"></ion-icon>
// 				</div>
// 			</div>
// 		</div> <br/>
// 	</div> 
	
    
//   );
// }

// function Content(){
// 	return(
// 		<div className='contebt'>
// 			<div id='Nav-bg'>
// 				<div className='container'>
// 					<ul id='menu-nav'>
// 						<li><b>TRANG CHỦ</b></li>
// 						<li><b>GIỚI THIỆU</b></li>
// 						<li><b>KHOA-PHÒNG</b></li>
// 						<li><b>ĐÀO TẠO</b></li>
// 						<li><b>TUYỂN SINH</b></li>
// 						<li><b>NGHIÊN CỨU KH</b></li>
// 						<li><b>HOẠT ĐỘNG</b></li>
// 						<li><b>LỊCH CÔNG TÁC</b></li>
// 						<li><b>SINH VIÊN </b></li>
// 						<li><b>ĐOÀN THỂ</b></li>
// 					</ul>
// 				</div>
// 			</div>
// 			<div>
// 				<img  id='img-content' src='https://danavtc.edu.vn/Portals/0/EasyDNNnews/Uploads/290/ts2023.jpg'></img>
// 			</div>
// 		</div>
		
// 	);
// }

class Member_state extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			// khoa: "Công Nghệ Thông Tin",
			lop: "21PNV1A"	
		};
	};
	componentDidMount(){
		setTimeout(() =>{
			// this.setState({khoa:"CNTT"});
			this.setState({lop:"CNTT"})
		},5000)
	}
	render(){
		return(
			<h1>Công Nghệ Thông Tin lớp{this.state.lop}</h1>
		);
	}
doikhoa = () => {
	this.setState({
		khoa: "Du Lịch",
		lop: "21PNV1B"
	})
};

render(){
	return(
		<div>
			<h2>khoa:{this.state.khoa}</h2>
			<h1>lop:{this.state.lop}</h1>
			<button type="button" onClick={this.doikhoa}>thay doi khoa theo hoc</button>
		</div>
	);
};
}

class Dem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			so:0
		};
	};
   componentDidMount(){
		setTimeout(()=>{
			this.setState({
				so:this.state.so+1
			});
		},5000)
   }
   render(){
	return(
		<div>
			<h2>so:{this.state.so}</h2>
			<button type="button" onClick={this.so}>Tang</button>
		</div>
	);
};

tangso = () => {
	this.setState({
		so:this.state.so+1
	})
};

render(){
	return(
		<div>
			<h2>so:{this.state.so}</h2>
			<button type="button" onClick={this.tangso}>Tang</button>
		</div>
	);
};
}

class Chuyenanh extends React.Component{
	constructor(props){
	  super(props)
	  this.state={
		 img:1
	  }
	};
	thayAnh=()=>{
	  this.setState(
		{img:this.state.img+1}
	  )
	};
	render(){
	  return(
		<div>
		  <img src={`${this.state.img}.jpg`}></img>
		  <button type='button' onClick={this.thayAnh}>Change</button>
		</div>
	  )
	}
  
  }
  
class Doianh extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			anh:['https://icdn.dantri.com.vn/2021/05/29/1-mua-lua-chin-1622224482617.jpg']
		};
	};

	doianh = () => {
		this.setState({
			anh:['https://tranhsondaudepviet.com/wp-content/uploads/2022/08/tranh-dong-que.jpeg']
		})
	};
   render(){
	return(
		<div>
			<img src={this.state.anh}></img>
			<button type="button" onClick={this.doianh}>Tang</button>
		</div>
	);
};
}
class Demm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			so:0
		};
	};
componentDidMount() {
    setInterval(() => {
      this.setState({so:this.state.so+1})
    }, 3000);
  }

render(){
	return(
		<div>
			<h2>Số: {this.state.so}</h2>
			{/* <button type="button" onClick={this.tangso}>Tăng số</button> */}
      <br></br>
		</div>
	);
};
}
class Demmm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		so: 0
	  };
	  this.intervalId = null; // khởi tạo biến để lưu ID của setInterval()
	}
  
	componentDidMount() {
	  this.intervalId = setInterval(() => {
		if (this.state.so < 9) {
		  this.setState({ so: this.state.so + 1 });
		} else {
		  clearInterval(this.intervalId);
		  setTimeout(() => {
			this.setState({ so: 0 });
		  }, 3000);
		}
	  }, 1000);
	}
  
	componentWillUnmount() {
	  clearInterval(this.intervalId); // ngừng interval khi component unmount
	}
  
	render() {
	  return (
		<div>
		  <h2>Số: {this.state.so}</h2>
		</div>
	  );
	}
  }
  class Counter extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {count: 1};
	  this.interval = null;
	}
  
	componentDidMount() {
	  this.interval = setInterval(() => {
		if (this.state.count < 9) {
		  this.setState(prevState => ({
			count: prevState.count + 1
		  }));
		} else {
		  clearInterval(this.interval);
		  this.setState({ count: null });
		}
	  }, 1000);
	}
	componentWillUnmount() {
	  clearInterval(this.interval);
	}
  
	render() {
	  return (
		<div>
		  {this.state.count !== null && <p>Đếm: {this.state.count}</p>}
		</div>
	  );
	}
  }
  class Appp extends React.Component {
	constructor(){
		
		super();
		this.state = { data: []};
	}
	async componentDidMount(){
		const response = await fetch(`https://6410c403da042ca131fb737e.mockapi.io/products`);
		const json = await response.json();
		this.setState({data:json});
		
	}
	render(){
		return (
			<div>
				<ul>
					{this.state.data.map(el=>(
						<li>
							{el.id}: {el.name}:{el.email}:{el.phone}
						</li>
					))}
				</ul>
			</div>
		);
	}
  
  }
// Nhập dữ liệu từ form
class Baitap_Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
		};
	}
	myChangeHandler = (event) => {
		this.setState({username: event.target.value});
	}
	render(){
		return (
			<form align="center" >
				<p>Nhập tên:</p>
				<input type='text' name='username' placeholder='input name' onChange={this.myChangeHandler}/>
				<h1>XIN CHÀO {this.state.username}</h1>

			</form>
		);
	}
}
class Baitap2_Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hoten: '', lop: '', diachi: '', people: []
		};
		this.handleChange = this.handleChange.bind(this); // bind trả về bản sao của hàm handleChange
		this.handleSubmit = this.handleSubmit.bind(this); 
	}
	handleChange = (event) => {
		let nam =  event.target.name;
			let val =  event.target.value;
			// let dc =  event.target.diachi;
			
			// let nam1 = event.target.name;
		   this.setState({[nam]: val});
	}
	handleSubmit(event){
		// alert('\n Đã lưu thông tin sinh viên: '+ this.state.hoten+'\n Học lớp :'+this.state.lop + ' \n Địa chỉ: '+this.state.diachi+ '\n Vào cơ sở dữ liệu');
		event.preventDefault();
		const newPeople = {
			hoten: this.state.hoten,
			lop: this.state.lop,
			diachi: this.state.diachi
		  };
		  this.setState({
			people: [...this.state.people, newPeople],
			hoten: '',
			lop: '',
			diachi: ''
		  });
		
	}
	render(){
		return (
		<div>
			<form align="center" onSubmit={this.handleSubmit}>
				<p>Nhập tên:</p>
				<input type='text' name='hoten' placeholder='input name' onChange={this.handleChange}/>
				<p>Lớp:</p>
				<select name='lop' onChange={this.handleChange}>
					<option value="" >--Choose--</option>
					<option value="PNV24A" >PNV24A</option>
					<option value="PNV24B" >PNV24B</option>
				</select>
				<p>Địa chỉ</p>
				<input type='text' name='diachi' placeholder='input diachi' onChange={this.handleChange}/>
				<br /><br />
				<button type='submit'>Submit</button>

			</form> <br/> 

			<table class ="tableStudent" align='center'border='1'> 
				<thead>
					<tr>
					<th>Id</th>
					<th>Tên</th>
					<th>Lớp</th>
					<th>Địa Chi</th>
					</tr>
				</thead>
				<tbody>
					{this.state.people.map((peoples, index) => (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{peoples.hoten}</td>
						<td>{peoples.lop}</td>
						<td>{peoples.diachi}</td>
					</tr>
					))}
				</tbody>
        </table>
			</div>
		);
	}
}
class BaitapForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		username: '',
		address: '',
		class:''
	  };
	  this.MyChangeHandler = this.MyChangeHandler.bind(this);
	  this.MySubmitHandler = this.MySubmitHandler.bind(this);
	}
  
	MyChangeHandler(event) {
	  this.setState({
		
		[event.target.name]: event.target.value
	  })
	}
	MySubmitHandler(event) {
	  event.preventDefault()
	  alert(`Your name: ${this.state.username} \n Address: ${this.state.address} \n Class: ${this.state.class}`);
	}
  
  
	render() {
	  return (
		<form onSubmit={this.MySubmitHandler} align='center'>
		  <p>Your name</p>
		  <input type="text" name="username" onChange={this.MyChangeHandler} />
  
		  <p>Your address</p>
		  <input type="text" name="address" onChange={this.MyChangeHandler} />
  
		  <p>Your class</p>
		  <select name="class" onChange={this.MyChangeHandler}>
			<option value="">-- Chọn lớp --</option>
			<option value="PNV24A">PNV24A</option>
			<option value="PNV24B">PNV24B</option>
	  
		  </select>
  
		  <br /><br />
		  <button type="submit">Submit</button>
  
	
		</form>
	  );
	}
  }
  class DiemTB extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		grades: [],
		average: 0,
	  };
	}
  
	handleInputChange = (event) => {
	  const target = event.target;
	  const name = target.name;
	  const value = parseFloat(target.value);
  
	  this.setState((prevState) => ({
		grades: {
		  ...prevState.grades,
		  [name]: value,
		},
	  }));
	};
  
	handleSubmit = (event) => {
	  event.preventDefault();
  
	  const { grades } = this.state;
  
	  let sum = 0;
	  for (const grade of Object.values(grades)) {
		sum += grade;
	  }
  
	  const average = sum / Object.values(grades).length;
	  
	  this.setState({ average });
	};
  
	render() {
	  const { grades, average } = this.state;
  
	  return (
		<div>
		  <h3 align='center'>Tính Điểm TB</h3>
		  <form onSubmit={this.handleSubmit} align='center'>
			<div>
			  <label htmlFor="mathGrade">Math:</label>
			  <input type="number"id="mathGrade"name="math"value={grades.math || ''} onChange={this.handleInputChange}/>
			</div>
			<div>
			  <label htmlFor="scienceGrade">Science:</label>
			  <input type="number"id="scienceGrade"name="science"value={grades.science || ''}onChange={this.handleInputChange}/>
			</div>
			<div>
			  <label htmlFor="englishGrade">English:</label>
			  <input type="number"id="englishGrade"name="english"value={grades.english || ''}onChange={this.handleInputChange}/>
			</div>
			<button type="submit">Tính</button>
		  </form>
		  {average ? (
			<div align='center'>
			  <h2>Điểm TB: {average.toFixed(2)}</h2>
			</div>
		  ) : null}
		</div>
	  );
	}
  }
  class DiemTrungBinh extends React.Component {
  
	constructor(props) {
	  super(props);
	  this.state = {
		diemToan: 0,
		diemVan: 0,
		diemAnh:0
	  };
	  this.MyChangeHandler = this.MyChangeHandler.bind(this);
	  this.MySubmitHandler = this.MySubmitHandler.bind(this);
  }
  
  MyChangeHandler(event) {
	this.setState({
	  [event.target.name]: event.target.value
	})
  }
  
  MySubmitHandler(event) {
	event.preventDefault();
	const sum = parseFloat(this.state.diemToan)  + parseFloat(this.state.diemVan) + parseFloat(this.state.diemAnh);
	const average = (sum/3).toFixed(1);
	let grade="";
	if (average >= 8) {
	  grade = "Giỏi";
	} else if (average >= 6) {
	  grade = "Khá";
	  } else {
	  grade = "Trung bình";  }
	alert(`Điểm của bạn là + ${average} \n Bạn đạt danh hiệu + ${grade}`);
  };
  
  render () {
  return (
	<div>
	  <h2>Tính điểm trung bình và xếp loại học sinh</h2>
	  <form onSubmit={this.MySubmitHandler}>
		<label>
		  Toán:
		  <input type="number" name='diemToan' step='any'  onChange={this.MyChangeHandler} />
		</label>
		<br />
		<label>
		  Ngữ văn:
		  <input type="number"  name='diemVan'  step='any'  onChange={this.MyChangeHandler} />
		</label>
		<br />
		<label>
		  Tiếng Anh:
		  <input type="number"  name='diemAnh' step='any'  onChange={this.MyChangeHandler} />
		</label>
		<br />
		<button type="submit">
		  Tính điểm TB và xếp loại
		</button>
	  </form>
	  <br />
	</div>)
  }}
  class TinhDiemTrungBinh extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		diemToan: 0,
		diemLy: 0,
		diemHoa: 0,
		diemTrungBinh: 0,
		xepLoai: '',
	  };
	  this.handleDiemToanChange = this.handleDiemToanChange.bind(this);
	  this.handleDiemLyChange = this.handleDiemLyChange.bind(this);
	  this.handleDiemHoaChange = this.handleDiemHoaChange.bind(this);
	  this.tinhDiemTrungBinh = this.tinhDiemTrungBinh.bind(this);
	  this.xepLoaiHocSinh = this.xepLoaiHocSinh.bind(this);
	}
  
	handleDiemToanChange(event) {
	  this.setState({ diemToan: Number(event.target.value) });
	}
  
	handleDiemLyChange(event) {
	  this.setState({ diemLy: Number(event.target.value) });
	}
  
	handleDiemHoaChange(event) {
	  this.setState({ diemHoa: Number(event.target.value) });
	}
  
	tinhDiemTrungBinh() {
	  const { diemToan, diemLy, diemHoa } = this.state;
	  const diemTong = parseFloat(diemToan + diemLy + diemHoa);
	  const diemTB = diemTong / 3;
	  this.setState({ diemTrungBinh: diemTB });
	  this.xepLoaiHocSinh(diemTB);
	}
  
	xepLoaiHocSinh(diemTB) {
	  let xepLoai = '';
	  if (diemTB >= 8.5 && diemTB <= 10) {
		xepLoai = "Học sinh giỏi";
	  } else if (diemTB >= 7 && diemTB < 8.5) {
		xepLoai = "Học sinh khá";
	  } else if (diemTB >= 5 && diemTB < 7) {
		xepLoai = "Học sinh trung bình";
	  } else {
		xepLoai = "Học sinh yếu";
	  }
	  this.setState({ xepLoai });
	}
  
	render() {
	  const { diemToan, diemLy, diemHoa, diemTrungBinh, xepLoai } = this.state;
	  return (
		<div>
		  <h2>Tính điểm TB và xếp loại HS</h2>
		  <label>
			Toán:
			<input type="number" value={diemToan} step='any' onChange={this.handleDiemToanChange} />
		  </label>
		  <br />
		  <label>
			Anh:
			<input type="number" value={diemLy} step='any' onChange={this.handleDiemLyChange} />
		  </label>
		  <br />
		  <label>
			Ngữ Văn:
			<input type="number" value={diemHoa} step='any'onChange={this.handleDiemHoaChange}/>
		  </label>
		  <br />
		  <button onClick={this.tinhDiemTrungBinh}>Tính điểm TB</button>
		  <br />
		  <label>
			Điểm TB:
			<input type="text" value={diemTrungBinh.toFixed(2)} readOnly />
		  </label>
		  <br />
		  <label>
			Xếp loại:
			<input type="text" value={xepLoai} readOnly />
		  </label>
		  </div>
	  );
	}
  }
 
function App(){
   return(
		<div>
		<TinhDiemTrungBinh/>
		<Appp/>
		<DiemTrungBinh/>
		<DiemTB/>
		<BaitapForm/>
		<Chuyenanh/>
		<Doianh/>
		<Dem/>
		< Baitap2_Form />
		<Demm/>
		<Demmm/>
		<Counter/>
		<Baitap_Form/>
		<Member_state/>
		</div>

  );
  
}

export default App;
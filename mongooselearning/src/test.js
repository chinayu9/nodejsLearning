const User = require('./user.js');

/**
 * 插入
 * 
 */

function insert(){
	let user = new User({
		username:'Tracy McGrady',
		userpwd:'abcde',
		userage:37,
		logindate:new Date()
	});

	user.save((err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 更新
 * @return {[type]} [description]
 */
function update(){
	let wherestr = {'username':'Tracy McGrady'};
	let updatestr = {'userpwd':'zzzz'};
	User.update(wherestr,updatestr,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 根据id更新
 * @return {[type]} [description]
 */
function findByIdAndUpdate(){
	let id = '5a34c679a2a02d1a6496f353';
	let updatestr = {'userpwd':'abcd'};
	User.findByIdAndUpdate(id,updatestr,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	})
}

/**
 * 删除
 * @return {[type]} [description]
 */
function del(){
	const wherestr = {'username':'Tracy McGrady'};
	User.remove(wherestr,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}


/**
 * 条件查询
 * @return {[type]} [description]
 */
function getByConditions(){
	const wherestr = {'username':'Tracy McGrady'};
	User.find(wherestr,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 条件查询  限制输出字段
 * @return {[type]} [description]
 */
function getByConditions1(){
	const wherestr = {'username':'Tracy McGrady'};
	const opt = {'username':1};
	User.find(wherestr,opt,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 条件查询所有
 * @return {[type]} [description]
 */
function getByConditions2(){
	const wherestr = {};
	const opt = {'username':1};
	User.find(wherestr,opt,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 条件查询数量查询
 * @return {[type]} [description]
 */
function getCountByConditions(){
	const wherestr = {};
	User.count(wherestr,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 根据id查询
 * @return {[type]} [description]
 */
function getById(){
	const id = '5a3715e24ad135160c1c24ba';
	User.findById(id,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}


/**
 * 模糊查询
 * @return {[type]} [description]
 */
function getByRegex(){
	const wherestr = {'username':{$regex:/m/i}};
	User.find(wherestr,(err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

/**
 * 分页查询
 * @return {[type]} [description]
 */
function getByPager(){
	let pageSize = 5;						//一页多少条
	let currentPage = 1;					//当前第几页
	let sort = {'logindate':-1};			//排序(时间倒序)
	let condition = {};						//条件
	let skipnum = (currentPage - 1) * pageSize;//跳过数

	User.find(condition)
	.skip(skipnum)
	.limit(pageSize)
	.sort(sort)
	.exec((err,res)=>{
		if (err) {
			console.log("Error: " + err);
		}else{
			console.log('Res: ' + res);
		}
	});
}

//insert();
//
//update();
//
//findByIdAndUpdate();
//
//del();
//
//getByConditions();
//
//getByConditions1();
//
//getByConditions2();
//
//getCountByConditions();
//
//getById();
//
//getByRegex();
//
getByPager();
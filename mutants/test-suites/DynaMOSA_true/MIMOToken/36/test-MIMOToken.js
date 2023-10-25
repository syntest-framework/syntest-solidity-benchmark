const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenpzsioL1 = await MIMOToken.new({from: accounts[3]});
		const addressNdJnPig = "0x0000000000000000000000000000000000000001"
		const uintoGFGyFg = await MIMOTokenpzsioL1.totalSupply.call({from: accounts[4]});
		const uintndrfy7e = await MIMOTokenpzsioL1.balanceOf.call(addressNdJnPig, {from: accounts[0]});

		assert.equal(uintndrfy7e, BigInt("0"))
		assert.equal(uintoGFGyFg, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenkPU6AfS = await MIMOToken.new({from: accounts[4]});
		const uintNttyi3B = BigInt("1166")
		const uintf78dMrN = BigInt("1294")
		const addresstWNROGd = "0x0000000000000000000000000000000000000001"
		const addressCZJQVKz = accounts[4]
		const addressoQdIlnX = "0x0000000000000000000000000000000000000001"
		const uintP1lsFSz = await MIMOTokenkPU6AfS.totalSupply.call({from: accounts[4]});
		const uint256wjSVSaQ = await MIMOTokenkPU6AfS.setMinFee.call(uintNttyi3B, {from: accounts[3]});
//		const bool4fcslI = await MIMOTokenkPU6AfS.transfer.call(addresstWNROGd, uintf78dMrN, {from: accounts[2]});
//		const uintZgCwPVh = await MIMOTokenkPU6AfS.balanceOf.call(addressCZJQVKz, {from: accounts[3]});
//		const uintg40WDF = await MIMOTokenkPU6AfS.balanceOf.call(addressoQdIlnX, {from: accounts[1]});

		assert.equal(uintP1lsFSz, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenkPU6AfS.transfer.call(addresstWNROGd, uintf78dMrN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenhjsnDNn = await MIMOToken.new({from: accounts[5]});
		const uintNmirpMH = BigInt("732")
		const uintt7nLpWM = BigInt("1207")
		const addressfxzkmUl = "0x0000000000000000000000000000000000000001"
		const uintqR2W9h8 = BigInt("3")
		const uintLb2p1f3 = BigInt("1251")
		const addresssjHzWih = accounts[2]
		const uint256mLmXTs = await MIMOTokenhjsnDNn.setMinFee.call(uintNmirpMH, {from: accounts[0]});
		const uint256RqyA3Wo = await MIMOTokenhjsnDNn.setFeeRate.call(uintt7nLpWM, {from: accounts[3]});
		const uintYc5PWiG = await MIMOTokenhjsnDNn.balanceOf.call(addressfxzkmUl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FbvTJnX = await MIMOTokenhjsnDNn.setFeeRate.call(uintqR2W9h8, {from: accounts[3]});
//		const boolhoUdPOH = await MIMOTokenhjsnDNn.transfer.call(addresssjHzWih, uintLb2p1f3, {from: accounts[0]});

		assert.equal(uintYc5PWiG, BigInt("0"))
		await expect(MIMOTokenhjsnDNn.transfer.call(addresssjHzWih, uintLb2p1f3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenafW4AJo = await MIMOToken.new({from: accounts[4]});
		const uintKQ9o37n = BigInt("1065")
		const addressan993QJ = accounts[3]
		const addressRr17vC = accounts[2]
		const uintBllnRBD = BigInt("1848")
		const addressHIxy83u = accounts[4]
		const addresszTxMjtx = accounts[0]
		const uintltFIPRh = BigInt("1646")
		const addresspiZdRTi = accounts[3]
		const addressVKhdbbP = accounts[0]
//		const boolXifLVQf = await MIMOTokenafW4AJo.transferFrom.call(addressRr17vC, addressan993QJ, uintKQ9o37n, {from: accounts[4]});
//		const boolKuSBN5I = await MIMOTokenafW4AJo.transfer.call(addressHIxy83u, uintBllnRBD, {from: accounts[1]});
//		const uintCDRWyYL = await MIMOTokenafW4AJo.balanceOf.call(addresszTxMjtx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQF9TCnX = await MIMOTokenafW4AJo.transferFrom.call(addressVKhdbbP, addresspiZdRTi, uintltFIPRh, {from: accounts[1]});

		await expect(MIMOTokenafW4AJo.transferFrom.call(addressRr17vC, addressan993QJ, uintKQ9o37n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokentaO66tW = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAnTqY1M = BigInt("482")
		const uintOtLhhlI = await MIMOTokentaO66tW.totalSupply.call({from: accounts[3]});
		const uint256cKMoGkp = await MIMOTokentaO66tW.setFeeRate.call(uintAnTqY1M, {from: accounts[3]});
		const uintAEoiZ9 = await MIMOTokentaO66tW.totalSupply.call({from: accounts[4]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenURUu0cN = await MIMOToken.new({from: accounts[2]});
		const uintmG2RbkS = BigInt("1574")
		const addressxvbgRax = accounts[1]
		const uintBE3iMGQ = BigInt("1335")
		const addressE4mHaQE = accounts[1]
		const addressc339J2e = accounts[4]
		const uintE7gmdHM = BigInt("341")
		const addressi4m5xUN = accounts[2]
		const bool77VM8D = await MIMOTokenURUu0cN.approve.call(addressxvbgRax, uintmG2RbkS, {from: accounts[2]});
		const uinthEBwTq = await MIMOTokenURUu0cN.totalSupply.call({from: accounts[3]});
		const uint256kDrxXN = await MIMOTokenURUu0cN.setFeeRate.call(uintBE3iMGQ, {from: accounts[5]});
		const uintJudI9pu = await MIMOTokenURUu0cN.allowance.call(addressc339J2e, addressE4mHaQE, {from: accounts[1]});
//		const boolIbAqoO6 = await MIMOTokenURUu0cN.transfer.call(addressi4m5xUN, uintE7gmdHM, {from: accounts[5]});

		assert.equal(bool77VM8D, true)
		assert.equal(uintJudI9pu, BigInt("0"))
		assert.equal(uinthEBwTq, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenURUu0cN.transfer.call(addressi4m5xUN, uintE7gmdHM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpzsioL1 = await MIMOToken.new({from: accounts[3]});
		const uint9m0wBL = BigInt("946")
		const addressrq3BBTb = "0x0000000000000000000000000000000000000000"
		const addressuUEUbvn = accounts[5]
		const uintkYrG5Y5 = BigInt("190")
		const addressqa4BjMS = accounts[1]
		const uint2Tcdmr = BigInt("627")
		const uintw1PhfGc = BigInt("1258")
		const addresssRbjb9K = accounts[0]
//		const boolAuqBbds = await MIMOTokenpzsioL1.transferFrom.call(addressuUEUbvn, addressrq3BBTb, uint9m0wBL, {from: "0x0000000000000000000000000000000000000001"});
//		const uintoGFGyFg = await MIMOTokenpzsioL1.totalSupply.call({from: accounts[4]});
//		const boolTYcOz4w = await MIMOTokenpzsioL1.approve.call(addressqa4BjMS, uintkYrG5Y5, {from: accounts[3]});
//		const uint5h92iC = await MIMOTokenpzsioL1.totalSupply.call({from: accounts[5]});
//		const uint256pzOXTga = await MIMOTokenpzsioL1.setFeeRate.call(uint2Tcdmr, {from: accounts[1]});
//		const boolQYwwPWs = await MIMOTokenpzsioL1.approve.call(addresssRbjb9K, uintw1PhfGc, {from: accounts[1]});

		await expect(MIMOTokenpzsioL1.transferFrom.call(addressuUEUbvn, addressrq3BBTb, uint9m0wBL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpzsioL1 = await MIMOToken.new({from: accounts[3]});
		const uintBhrWJqT = BigInt("963")
		const uintM9AHLqc = BigInt("642")
		const addressUNqssRG = accounts[2]
		const uintonXaMG7 = BigInt("1729")
		const uintxiXgNOC = BigInt("1099")
		const addressKdQhYRr = accounts[3]
		const addressZCej7a4 = accounts[1]
		const uint256kSLKLN7 = await MIMOTokenpzsioL1.getFee.call(uintBhrWJqT, {from: accounts[5]});
		const uintoGFGyFg = await MIMOTokenpzsioL1.totalSupply.call({from: accounts[4]});
		const boolhSSo5gQ = await MIMOTokenpzsioL1.approve.call(addressUNqssRG, uintM9AHLqc, {from: accounts[4]});
		const uint256UQ8nRy = await MIMOTokenpzsioL1.setMinFee.call(uintonXaMG7, {from: accounts[2]});
//		const boolOqPTSg = await MIMOTokenpzsioL1.transferFrom.call(addressZCej7a4, addressKdQhYRr, uintxiXgNOC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhSSo5gQ, true)
		assert.equal(uint256kSLKLN7, BigInt("50000000000000000"))
		assert.equal(uintoGFGyFg, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenpzsioL1.transferFrom.call(addressZCej7a4, addressKdQhYRr, uintxiXgNOC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpzsioL1 = await MIMOToken.new({from: accounts[3]});
		const uintzLr0S05 = BigInt("946")
		const addressl9iCo0I = "0x00000000000000000000000000000000000000-1"
		const addressx9LTH6L = accounts[5]
//		const boolAuqBbds = await MIMOTokenpzsioL1.transferFrom.call(addressx9LTH6L, addressl9iCo0I, uintzLr0S05, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MIMOTokenpzsioL1.transferFrom.call(addressx9LTH6L, addressl9iCo0I, uintzLr0S05, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})
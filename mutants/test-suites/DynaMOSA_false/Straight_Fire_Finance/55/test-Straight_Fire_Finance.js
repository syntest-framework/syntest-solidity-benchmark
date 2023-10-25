const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceUSG4S0J = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintqjVYSB = BigInt("873")
		const addressP5YzxjC = accounts[0]
		const uintl0cvGYl = BigInt("624")
		const addresso8ER96 = accounts[0]
		const uintwDzg9t = BigInt("1578")
		const addressqeThuG1 = "0x0000000000000000000000000000000000000001"
		const addressqHjm6qd = accounts[5]
		const uintKM4kcSM = BigInt("156")
		const addressrNg7Fe5 = "0x0000000000000000000000000000000000000001"
		const boolfuWrAZd = await Straight_Fire_FinanceUSG4S0J.transfer.call(addressP5YzxjC, uintqjVYSB, {from: accounts[1]});
		const boolRHi7O0J = await Straight_Fire_FinanceUSG4S0J.approve.call(addresso8ER96, uintl0cvGYl, {from: accounts[1]});
		const boolUwusXiE = await Straight_Fire_FinanceUSG4S0J.transferFrom.call(addressqHjm6qd, addressqeThuG1, uintwDzg9t, {from: accounts[0]});
		const boolyFzfhBk = await Straight_Fire_FinanceUSG4S0J.transfer.call(addressrNg7Fe5, uintKM4kcSM, {from: accounts[1]});

		assert.equal(boolRHi7O0J, true)
		assert.equal(boolUwusXiE, false)
		assert.equal(boolfuWrAZd, false)
		assert.equal(boolyFzfhBk, false)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceRLuOrl7 = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintsMLcoa3 = BigInt("1227")
		const addressLq8lQBR = accounts[5]
		const addressZjp0Die = accounts[2]
		const uintOcNhxYs = BigInt("930")
		const addressxFnVK2U = accounts[1]
		const addresswvLwB4H = accounts[2]
		const boolqb1p0Ix = await Straight_Fire_FinanceRLuOrl7.transferFrom.call(addressZjp0Die, addressLq8lQBR, uintsMLcoa3, {from: accounts[2]});
		const boolPWO6iqD = await Straight_Fire_FinanceRLuOrl7.transfer.call(addressxFnVK2U, uintOcNhxYs, {from: accounts[0]});
		const uint256qc6qlO6 = await Straight_Fire_FinanceRLuOrl7.balanceOf.call(addresswvLwB4H, {from: accounts[1]});

		assert.equal(boolPWO6iqD, true)
		assert.equal(boolqb1p0Ix, false)
		assert.equal(uint256qc6qlO6, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceDoWw9CH = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdfgKigo = BigInt("306")
		const addresslrihBLx = accounts[2]
		const uintdfSKLnF = BigInt("1021")
		const addressCMZfK42 = accounts[4]
		const uintqpSy1l7 = BigInt("2022")
		const addresslKbnJL3 = accounts[5]
		const addressAAtOFBW = accounts[1]
		const boolgr8RgyZ = await Straight_Fire_FinanceDoWw9CH.transfer.call(addresslrihBLx, uintdfgKigo, {from: accounts[2]});
		const boolQ5McNUC = await Straight_Fire_FinanceDoWw9CH.approve.call(addressCMZfK42, uintdfSKLnF, {from: accounts[5]});
		const booluBODJfg = await Straight_Fire_FinanceDoWw9CH.transferFrom.call(addressAAtOFBW, addresslKbnJL3, uintqpSy1l7, {from: accounts[1]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceCqi34Gy = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintgURrQ6s = BigInt("1090")
		const addressSpVgk6 = accounts[1]
		const addressvn5GMUL = accounts[3]
		const address1DTQXR = accounts[4]
		const uintWh5GpfV = BigInt("1729")
		const addressufwXyMm = accounts[4]
		const uintTHrd329 = BigInt("86")
		const addressvbDsGAO = accounts[0]
		const addressxCnNEua = accounts[3]
		const boolf0J9hGL = await Straight_Fire_FinanceCqi34Gy.transferFrom.call(addressvn5GMUL, addressSpVgk6, uintgURrQ6s, {from: accounts[0]});
		const uint256x6nR5Ve = await Straight_Fire_FinanceCqi34Gy.totalSupply.call({from: accounts[0]});
		const uint256zJwGAvq = await Straight_Fire_FinanceCqi34Gy.balanceOf.call(address1DTQXR, {from: accounts[2]});
		const booljrlzIe5 = await Straight_Fire_FinanceCqi34Gy.transfer.call(addressufwXyMm, uintWh5GpfV, {from: accounts[4]});
		const booljRDKvn = await Straight_Fire_FinanceCqi34Gy.transferFrom.call(addressxCnNEua, addressvbDsGAO, uintTHrd329, {from: accounts[1]});

		assert.equal(boolf0J9hGL, false)
		assert.equal(booljRDKvn, false)
		assert.equal(booljrlzIe5, false)
		assert.equal(uint256x6nR5Ve, BigInt("80000000000000000000000"))
		assert.equal(uint256zJwGAvq, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceglM220h = await Straight_Fire_Finance.new({from: accounts[4]});
		const addressO1uq27J = accounts[1]
		const addressMN7ymQe = accounts[0]
		const addressL0rDBly = accounts[0]
		const uint256uG9p5lZ = await Straight_Fire_FinanceglM220h.balanceOf.call(addressO1uq27J, {from: accounts[3]});
		const uintXqJSucv = await Straight_Fire_FinanceglM220h.allowance.call(addressL0rDBly, addressMN7ymQe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KW2NBxg = await Straight_Fire_FinanceglM220h.totalSupply.call({from: accounts[3]});
		const uint256TkuNCPc = await Straight_Fire_FinanceglM220h.totalSupply.call({from: accounts[1]});
		const uint256YCZ2ls9 = await Straight_Fire_FinanceglM220h.totalSupply.call({from: accounts[1]});

		assert.equal(uint256KW2NBxg, BigInt("80000000000000000000000"))
		assert.equal(uint256TkuNCPc, BigInt("80000000000000000000000"))
		assert.equal(uint256YCZ2ls9, BigInt("80000000000000000000000"))
		assert.equal(uint256uG9p5lZ, BigInt("0"))
		assert.equal(uintXqJSucv, BigInt("0"))
	});
})
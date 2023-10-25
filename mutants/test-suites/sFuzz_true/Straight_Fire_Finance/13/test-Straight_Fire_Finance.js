const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancefPHKqBP = await Straight_Fire_Finance.new({from: accounts[5]});
		const addressi1tiPTl = accounts[0]
		const addressu1uYZ4 = accounts[1]
		const uintrpAJyth = BigInt("1546")
		const addressGPA00w = accounts[0]
		const uint256euS8051 = await Straight_Fire_FinancefPHKqBP.balanceOf.call(addressi1tiPTl, {from: accounts[5]});
		const uint256JdlTd4M = await Straight_Fire_FinancefPHKqBP.balanceOf.call(addressu1uYZ4, {from: accounts[0]});
		const booljFTqlY = await Straight_Fire_FinancefPHKqBP.transfer.call(addressGPA00w, uintrpAJyth, {from: accounts[1]});

		assert.equal(booljFTqlY, false)
		assert.equal(uint256JdlTd4M, BigInt("0"))
		assert.equal(uint256euS8051, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financehn6caL = await Straight_Fire_Finance.new({from: accounts[1]});
		const addressVWig7y = accounts[4]
		const addressqCKNgAk = accounts[5]
		const uintabWLW3 = BigInt("1409")
		const addresseauRlWJ = accounts[3]
		const addressi0JVEO = accounts[0]
		const uintHESuFwC = await Straight_Fire_Financehn6caL.allowance.call(addressqCKNgAk, addressVWig7y, {from: accounts[2]});
		const boolRjYfnuo = await Straight_Fire_Financehn6caL.approve.call(addresseauRlWJ, uintabWLW3, {from: accounts[4]});
		const uint256YIBeWi = await Straight_Fire_Financehn6caL.balanceOf.call(addressi0JVEO, {from: accounts[3]});

		assert.equal(boolRjYfnuo, true)
		assert.equal(uint256YIBeWi, BigInt("0"))
		assert.equal(uintHESuFwC, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceWuHUB7v = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintpXzxlCm = BigInt("270")
		const addresse81UMJx = accounts[5]
		const addressVxFm3gu = accounts[1]
		const addressPHWiAFZ = "0x0000000000000000000000000000000000000001"
		const uintp03LQ3 = BigInt("1149")
		const addressLqPWRVr = accounts[2]
		const addressVoayO8 = accounts[5]
		const uintiLE37uB = BigInt("731")
		const addressgL9jAWG = accounts[1]
		const addressOb36I7e = accounts[4]
		const uintSOXT62A = BigInt("1528")
		const addressPSdLayS = accounts[2]
		const addressKzIOkzE = accounts[1]
		const bool3Nk2c1 = await Straight_Fire_FinanceWuHUB7v.approve.call(addresse81UMJx, uintpXzxlCm, {from: accounts[2]});
		const uintR1DnTOV = await Straight_Fire_FinanceWuHUB7v.allowance.call(addressPHWiAFZ, addressVxFm3gu, {from: "0x0000000000000000000000000000000000000001"});
		const boolzOttBZf = await Straight_Fire_FinanceWuHUB7v.transfer.call(addressLqPWRVr, uintp03LQ3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jmEHVCs = await Straight_Fire_FinanceWuHUB7v.balanceOf.call(addressVoayO8, {from: accounts[0]});
		const boolRu90ay = await Straight_Fire_FinanceWuHUB7v.transferFrom.call(addressOb36I7e, addressgL9jAWG, uintiLE37uB, {from: accounts[4]});
		const boolZDwf76d = await Straight_Fire_FinanceWuHUB7v.transferFrom.call(addressKzIOkzE, addressPSdLayS, uintSOXT62A, {from: accounts[1]});

		assert.equal(bool3Nk2c1, true)
		assert.equal(boolRu90ay, false)
		assert.equal(boolZDwf76d, false)
		assert.equal(boolzOttBZf, false)
		assert.equal(uint256jmEHVCs, BigInt("0"))
		assert.equal(uintR1DnTOV, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancebZ1CeBQ = await Straight_Fire_Finance.new({from: accounts[1]});
		const uintBMLDXN = BigInt("677")
		const addressDWYWRL = accounts[3]
		const uintQHCbHcm = BigInt("442")
		const addresssbAXT3w = accounts[4]
		const addressji4u7Y = accounts[3]
		const uintdIR3nia = BigInt("437")
		const addressRE2dild = accounts[0]
		const addresswm2GS9S = accounts[0]
		const boolDUv8rIB = await Straight_Fire_FinancebZ1CeBQ.transfer.call(addressDWYWRL, uintBMLDXN, {from: accounts[3]});
		const uint256OSFofRg = await Straight_Fire_FinancebZ1CeBQ.totalSupply.call({from: accounts[1]});
		const boolqhRldLR = await Straight_Fire_FinancebZ1CeBQ.transferFrom.call(addressji4u7Y, addresssbAXT3w, uintQHCbHcm, {from: accounts[1]});
		const boolPHNzCxd = await Straight_Fire_FinancebZ1CeBQ.transfer.call(addressRE2dild, uintdIR3nia, {from: accounts[5]});
		const uint256X7DtsIE = await Straight_Fire_FinancebZ1CeBQ.balanceOf.call(addresswm2GS9S, {from: accounts[4]});

		assert.equal(boolDUv8rIB, false)
		assert.equal(boolPHNzCxd, false)
		assert.equal(boolqhRldLR, false)
		assert.equal(uint256OSFofRg, BigInt("80000000000000000000000"))
		assert.equal(uint256X7DtsIE, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceXQXbvl = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjzpnuhD = BigInt("889")
		const address1mWdGI = accounts[5]
		const addresso3N7CBC = accounts[0]
		const addressciL30ii = accounts[3]
		const addressxlpFCoG = accounts[3]
		const addressieeeO9H = accounts[1]
		const addressP6n3oOv = accounts[4]
		const uint256ZLzia1M = await Straight_Fire_FinanceXQXbvl.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolgFiMjRk = await Straight_Fire_FinanceXQXbvl.transferFrom.call(addresso3N7CBC, address1mWdGI, uintjzpnuhD, {from: "0x0000000000000000000000000000000000000001"});
		const uintOC0XZYy = await Straight_Fire_FinanceXQXbvl.allowance.call(addressxlpFCoG, addressciL30ii, {from: accounts[3]});
		const uintMqznnUx = await Straight_Fire_FinanceXQXbvl.allowance.call(addressP6n3oOv, addressieeeO9H, {from: accounts[2]});
	});
})
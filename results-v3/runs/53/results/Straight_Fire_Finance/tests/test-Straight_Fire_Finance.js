const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceqkzyhZ3 = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintXkOHICg = BigInt("352")
		const addressWU2hLNy = accounts[1]
		const addressJjXX1H4 = accounts[2]
		const addresssv9FSgO = accounts[1]
		const addressudHFL26 = accounts[1]
		const addressMe9oKT9 = "0x0000000000000000000000000000000000000001"
		const addresswDrTwkq = accounts[1]
		const uintmCOrx3y = BigInt("578")
		const addressNGChqbO = accounts[3]
		const uintVXWaC8H = BigInt("905")
		const addressZG3UkON = accounts[2]
		const addressTOf3xXv = accounts[5]
		const boolKsaxAk3 = await Straight_Fire_FinanceqkzyhZ3.transferFrom.call(addressJjXX1H4, addressWU2hLNy, uintXkOHICg, {from: "0x0000000000000000000000000000000000000001"});
		const uintY0DQjr6 = await Straight_Fire_FinanceqkzyhZ3.allowance.call(addressudHFL26, addresssv9FSgO, {from: accounts[2]});
		const uintvNUh3Uk = await Straight_Fire_FinanceqkzyhZ3.allowance.call(addresswDrTwkq, addressMe9oKT9, {from: accounts[4]});
		const boolM2gWOE = await Straight_Fire_FinanceqkzyhZ3.transfer.call(addressNGChqbO, uintmCOrx3y, {from: accounts[3]});
		const boolB3DFuvt = await Straight_Fire_FinanceqkzyhZ3.transferFrom.call(addressTOf3xXv, addressZG3UkON, uintVXWaC8H, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolB3DFuvt, false)
		assert.equal(boolKsaxAk3, false)
		assert.equal(boolM2gWOE, false)
		assert.equal(uintY0DQjr6, BigInt("0"))
		assert.equal(uintvNUh3Uk, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancewghRxmD = await Straight_Fire_Finance.new({from: accounts[2]});
		const addressIIvdcAc = accounts[0]
		const uinth9k0IxT = BigInt("674")
		const addresstd54h9T = accounts[4]
		const uint256mohNvYe = await Straight_Fire_FinancewghRxmD.balanceOf.call(addressIIvdcAc, {from: accounts[1]});
		const boolTv1JT4n = await Straight_Fire_FinancewghRxmD.transfer.call(addresstd54h9T, uinth9k0IxT, {from: accounts[3]});

		assert.equal(boolTv1JT4n, false)
		assert.equal(uint256mohNvYe, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancekYcC1T6 = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintFOfApzQ = BigInt("1193")
		const addressuTOnRzd = accounts[4]
		const addressOw84BN = accounts[4]
		const uintoLOwZM = BigInt("1672")
		const addressDlL4pAK = accounts[0]
		const addressTFuxbEU = accounts[2]
		const uintStE2nlW = BigInt("477")
		const addressbFqcxqc = accounts[5]
		const boolUQSqhj = await Straight_Fire_FinancekYcC1T6.transfer.call(addressuTOnRzd, uintFOfApzQ, {from: accounts[4]});
		const uint256QCMAd8 = await Straight_Fire_FinancekYcC1T6.balanceOf.call(addressOw84BN, {from: accounts[0]});
		const boolQaarct9 = await Straight_Fire_FinancekYcC1T6.transferFrom.call(addressTFuxbEU, addressDlL4pAK, uintoLOwZM, {from: accounts[0]});
		const booltoMb0Vk = await Straight_Fire_FinancekYcC1T6.approve.call(addressbFqcxqc, uintStE2nlW, {from: accounts[0]});

		assert.equal(boolQaarct9, false)
		assert.equal(boolUQSqhj, false)
		assert.equal(booltoMb0Vk, true)
		assert.equal(uint256QCMAd8, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceWu1nTHz = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintaCw9RL0 = BigInt("50")
		const addresszmI9gj7 = accounts[4]
		const uint256ww2JqJV = await Straight_Fire_FinanceWu1nTHz.totalSupply.call({from: accounts[1]});
		const boolK9iGYTt = await Straight_Fire_FinanceWu1nTHz.approve.call(addresszmI9gj7, uintaCw9RL0, {from: accounts[3]});

		assert.equal(boolK9iGYTt, true)
		assert.equal(uint256ww2JqJV, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancegZztiW = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDCwFunQ = BigInt("578")
		const addresskajUo7X = accounts[4]
		const uintCfZ2nRR = BigInt("743")
		const addressW19xzSS = accounts[1]
		const addressVr7Sr2b = "0x0000000000000000000000000000000000000001"
		const addressmPqaNCm = "0x0000000000000000000000000000000000000001"
		const boolkP3K4wI = await Straight_Fire_FinancegZztiW.transfer.call(addresskajUo7X, uintDCwFunQ, {from: accounts[5]});
		const boolWTiJRiG = await Straight_Fire_FinancegZztiW.approve.call(addressW19xzSS, uintCfZ2nRR, {from: accounts[2]});
		const uintaCRDIYh = await Straight_Fire_FinancegZztiW.allowance.call(addressmPqaNCm, addressVr7Sr2b, {from: accounts[3]});
	});
})